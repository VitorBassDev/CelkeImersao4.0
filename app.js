
const express   = require('express');
const http      = require ('http');

const app       = express();
const port      = 8080

app.get('/', (request, response) => {
    return response.json('Hello Word')
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            )

const server = http.createServer(app);
  server.listen(port, () => {
  console.log(`BackEnd - Celke`, port);
});                                                         