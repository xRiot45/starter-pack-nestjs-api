import { registerAs } from '@nestjs/config';

export default registerAs('file-upload', () => ({
  maxFileSize:
    parseInt(process.env.FILE_UPLOAD_MAX_SIZE, 10) || 5 * 1024 * 1024, // 5MB
  allowedMimeTypes: (
    process.env.FILE_UPLOAD_ALLOWED_MIMES ||
    'image/jpeg,image/png,application/pdf'
  ).split(','),
  directory: process.env.FILE_UPLOAD_DIRECTORY || 'uploads',
}));
