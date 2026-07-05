const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain ; charset=utf-8" });
  res.end(
    "Hello mấy em be tới với trang web sử dụng Jenkins CICD của anh nha aaaaaaaa !!!!",
  );
});

server.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});
