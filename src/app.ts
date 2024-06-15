import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';
const app: Application = express();
app.use(express.json());
app.use(
  cors({
    origin: 'https://jobify-backend-six.vercel.app',
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
  }),
);
app.use('/api/v1', router);

const root = (req: Request, res: Response) => {
  res.send('Welcome To Joblify Server');
};
app.use('/', root);
app.use(globalErrorHandler);
app.use(notFound);
export default app;
