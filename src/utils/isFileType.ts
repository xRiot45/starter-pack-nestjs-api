export function isFileType(file: any, allowedTypes: string[]): boolean {
  if (!file || !file.mimetype) {
    return false;
  }

  const fileType = file.mimetype.split('/')[0];
  return allowedTypes.includes(fileType);
}
