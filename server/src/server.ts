import express from 'express';
import cors from 'cors';
import { join } from 'path';
import router from './router';

const app = express();

app.use(express.static(join(__dirname, '../public')))
app.use(cors());
router(app);
app.use('/uploads', express.static(join(__dirname, 'uploads')))

export default app;