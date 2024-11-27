export function getUniqueElements<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}
