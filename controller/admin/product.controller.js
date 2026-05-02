// [GET] /admin/products
const Product = require("../../models/product.model");

module.exports.product = async (req, res) => {
  const product = await Product.find({
    deleted: false,
  });
  const newProduct = product.map((item) => {
    return item;
  });
  res.render("admin/pages/products/product", {
    titlePages: "Trang Admin Product",
    message: "ProductPages",
    products: newProduct,
  });
};
