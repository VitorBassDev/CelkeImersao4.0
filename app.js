require('dotenv/config');
const express   = require('express');
const http      = require ('http');
const app       = express();
const port      = process.env.PORT

app.get('/', (request, response) => {
    return response.json('Hello Word')
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            )

const server = http.createServer(app);
  server.listen(port, () => {
  console.log(`BackEnd - Celke`, port);
});                                                         