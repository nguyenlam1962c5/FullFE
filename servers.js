// server.js
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const handle = app.getRequestHandler();

const PORT_ONE = parseInt(process.env.PORT_ONE, 10) || 1001;
const PORT_TWO = parseInt(process.env.PORT_TWO, 10) || 1002;
const PORT_THREE = parseInt(process.env.PORT_THREE, 10) || 1003;
const PORT_FOUR = parseInt(process.env.PORT_FOUR, 10) || 1004;

// Tạo server lắng nghe trên cổng PORT_ONE
const server1 = createServer((req, res) => {
  const parsedUrl = parse(req.url, true);
  handle(req, res, parsedUrl);
});

// Tạo server lắng nghe trên cổng PORT_TWO
const server2 = createServer((req, res) => {
  const parsedUrl = parse(req.url, true);
  handle(req, res, parsedUrl);
});

// Tạo server lắng nghe trên cổng PORT_THREE
const server3 = createServer((req, res) => {
  const parsedUrl = parse(req.url, true);
  handle(req, res, parsedUrl);
});

// Tạo server lắng nghe trên cổng PORT_FOUR
 const server4 = createServer((req, res) => {
  const parsedUrl = parse(req.url, true);
  handle(req, res, parsedUrl);
});

// Khởi động ứng dụng Next.js và lắng nghe trên các cổng đã cấu hình
app.prepare().then(() => {
  server1.listen(PORT_ONE, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT_ONE}`);
  });

  server2.listen(PORT_TWO, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT_TWO}`);
  });

  server3.listen(PORT_THREE, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT_THREE}`);
  });
  
  server4.listen(PORT_FOUR, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT_FOUR}`);
  });
});
