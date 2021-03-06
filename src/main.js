import { createServer } from "http";
import { readFile } from "fs";
import { resolve } from "path";

const server = createServer((request, response) => {
  switch (request.url) {
    case "/": {
      const filePath = resolve(__dirname, "./pages/index.html");
      readFile(filePath, (err, file) => {
        if (err) {
          response.writeHead(500, "Can't process HTML file.");
          response.end();
          return;
        }
        response.writeHead(200);
        response.write(file);
        response.end();
      });
      break;
    }

    default: {
      response.writeHead(404, "Service not found.");
      response.end();
      break;
    }
  }
});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;

const HOSTNAME = process.env.HOSTNAME || "127.0.0.1";

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server is listening at http://${HOSTNAME}:${PORT}.`);
});
