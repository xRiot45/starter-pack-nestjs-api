export function flattenArray<T>(arr: any[]): T[] {
  return arr.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val),
    [],
  );
}
