export class NoRefreshTokenOnRefreshError extends Error {
  constructor() {
    super("A refresh has been initiated without a refresh token.")
    this.name = "NoRefreshTokenOnRefreshError"
  }
}
