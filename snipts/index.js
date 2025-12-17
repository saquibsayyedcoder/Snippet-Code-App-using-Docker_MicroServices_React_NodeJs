import express from 'express';
import snippetRouter from './routes/snippetRoutes.js';
import cors from "cors"
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors ({
  origin:"http://localhost:5173"
}))

app.use("/api/v1/snippets", snippetRouter);

app.listen(PORT, () => {
  console.log(`Snipts Microservice is running on http://localhost:${PORT}`);
});