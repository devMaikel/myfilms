import express from 'express';
import mongoose from 'mongoose';
import routes from './routes/routes';

const app = express();

mongoose.connect("mongodb://localhost/myfilms");

app.use(express.json());

app.use(routes);

app.listen(3000, () => {
  console.log('Rodando na porta 3000 !');
  
});
