export const getAvatarSimplification = (name: string): string => {
  const [first, second] = name?.split(" ").map((part) => part[0].toUpperCase()) || []
  return first + (second || "")
}
