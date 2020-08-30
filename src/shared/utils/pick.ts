export function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const o: Pick<T, K> = {} as Pick<T, K>
  for (let key of keys) {
    o[key] = obj[key]
  }
  return o
}
