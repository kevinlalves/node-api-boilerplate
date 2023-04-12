import { init } from './app.js';

const port = process.env.PORT || 3000;

const app = await init();

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
