import express from 'express';
import commentRouter from './routes/comment.route.js';
import cors from "cors"
const app = express();
const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors ({
  origin:"http://localhost:5173"
}))

app.use("/api/v1/snippet", commentRouter);
"http://localhost:3000/api/v1/snippets/:id/comment"


app.listen(PORT, () => {
  console.log(`Snipts Microservice is running on http://localhost:${PORT}`);
});