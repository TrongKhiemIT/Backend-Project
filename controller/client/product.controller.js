module.exports.index = (req, res) => {
  res.render("client/pages/products/products", {
    titlePace: "Trang sản phẩm",
    message: "San pham",
  });
};
