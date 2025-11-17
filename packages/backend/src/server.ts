import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Express server listening on port ${port}`);
});

