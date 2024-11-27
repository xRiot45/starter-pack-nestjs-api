export function paginate(data: any[], page: number, limit: number): any[] {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  return data.slice(startIndex, endIndex);
}
