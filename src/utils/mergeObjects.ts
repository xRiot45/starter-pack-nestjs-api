export function mergeObjects<T extends object>(obj1: T, obj2: T): T {
  return { ...obj1, ...obj2 };
}
