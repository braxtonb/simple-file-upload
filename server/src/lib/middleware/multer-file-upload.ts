import multer from 'multer';
import { join } from 'path';
import fs from 'fs';

const storage = multer.diskStorage({
  // https://stackoverflow.com/a/59653876
  destination: (req, file, cb) => {
    const destination = join(__dirname, '../../../public/media');
    fs.mkdirSync(destination, { recursive: true });

    cb(null, destination);
  },
  filename: (req, file, cb) => {
    const filename = `${Date.now()}-${file.originalname}`;

    cb(null, filename);
  },
})
export const uploadMediaFile = multer({ storage });
