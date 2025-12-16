import express from 'express';
const app = express();
const PORT = 3001;


app.get('/', (req, res) => {
  res.send('Hello from Snipts Microservice!');
});
app.listen(PORT, () => {
  console.log(`Snipts Microservice is running on http://localhost:${PORT}`);
});