import { registerAs } from '@nestjs/config';

export default registerAs('upload', () => ({
  maxFileSize:
    parseInt(process.env.UPLOAD_MAX_FILE_SIZE, 10) || 2 * 1024 * 1024,
  allowedMimeTypes: (
    process.env.UPLOAD_ALLOWED_MIME_TYPES || 'image/jpeg,image/png'
  ).split(','),
  directory: process.env.UPLOAD_DIRECTORY || 'uploads',
}));
