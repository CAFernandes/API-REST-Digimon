import cors from 'cors';
import path from 'path';
import helmet from 'helmet';
import express from 'express';
import Digimon from './Routes/Digimon';
import Level from './Routes/Level';
import Index from './Routes/Index';
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

app.use('/images', express.static(path.resolve(__dirname, '..', 'images')));

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(Digimon);
app.use(Level);
app.use(Index);

app.listen(process.env.PORT || 3333);

console.log(`${process.env.URL_APP}${process.env.PORT}`)