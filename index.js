const express = require("express");
const app = express();
const port = 3000;

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Trang chủ",
    message: "Chào mừng bạn đến với trang chủ!",
  });
});

app.get("/products", (req, res) => {
  res.render("products", {
    title: "Trang sản phẩm",
    message: "Đây là trang sản phẩm",
  });
});

app.get("/blog", (req, res) => {
  res.render("blog", {
    title: "Trang bài viết",
    message: "Đây là trang bài viết",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Trang liên hệ",
    message: "Đây là trang liên hệ",
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
