export function convertToCamelCase(str: string): string {
  return str.replace(/[_-]\w/g, (match) => match.charAt(1).toUpperCase());
}
