const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)

    const fileStream = fs.createReadStream("./content/big.txt", "utf8");
    fileStream.on("open", () => {
      fileStream.pipe(res);
    //   We are sending file in chunks instead of sending the file in a variable which will take up a lot of space
    });
    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000)

