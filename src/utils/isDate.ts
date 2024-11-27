export function isDate(date: any): boolean {
  return date instanceof Date && !isNaN(date.getTime());
}
