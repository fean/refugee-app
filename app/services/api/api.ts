import { ApisauceInstance, create } from "apisauce"
import { ApiConfig, DEFAULT_API_CONFIG } from "./api-config"
import { Environment } from "../../models/environment"

const publicEndpoints = [/auth\/token/, /auth\/start/, /homeowners$/, /partners$/]

/**
 * Manages all requests to the API.
 */
export class Api {
  /**
   * The underlying apisauce instance which performs the requests.
   */
  apisauce: ApisauceInstance

  /**
   * Creates the api.
   *
   * @param config The configuration to use.
   */
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private readonly environment: Environment,
    public readonly config: ApiConfig = DEFAULT_API_CONFIG,
  ) {}

  setup(token?: string) {
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
        Authorization: token ? `Bearer ${token}` : undefined,
      },
    })

    let refreshPromise: Promise<void> | null = null
    this.apisauce.addAsyncRequestTransform(async (request) => {
      const isPublicEndpoint = publicEndpoints.some((regex) => regex.test(request.url))
      if (isPublicEndpoint || !refreshPromise) {
        return
      }

      await refreshPromise
      request.headers.Authorization = `Bearer ${this.environment.rootStore.userStore.accessToken}`
    })

    this.apisauce.addAsyncResponseTransform(async (response) => {
      if (response.status !== 401) {
        return
      }

      const handleRedoRequest = async () => {
        try {
          const secondResponse = await this.apisauce.axiosInstance.request({
            headers: {
              ...response.config.headers,
              Authorization: `Bearer ${this.environment.rootStore.userStore.accessToken}`,
            },
            ...response.config,
          })

          response.status = secondResponse.status
          response.headers = secondResponse.headers
          response.data = secondResponse.data
        } catch (error) {
          // TODO: Handle error
        }
      }

      if (refreshPromise) {
        await refreshPromise
        await handleRedoRequest()
      }

      refreshPromise = this.environment.rootStore.userStore.doRefresh()
      await refreshPromise
      await handleRedoRequest()
    })
  }
}
