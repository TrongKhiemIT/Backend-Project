// [GET] /admin/products
const Product = require("../../models/product.model");
const filterStatusHelper = require("../../helper/filterStatus");

module.exports.product = async (req, res) => {
  const filterStatus = filterStatusHelper(req.query);

  let find = {
    deleted: false,
  };

  if (req.query.status) {
    find.status = req.query.status;
  }

  let keyword = "";
  if (req.query.keyword) {
    keyword = req.query.keyword;
    const regex = new RegExp(keyword, "i");
    find.title = regex;
  }

  const product = await Product.find(find);

  res.render("admin/pages/products/product", {
    titlePages: "Trang Admin Product",
    message: "ProductPages",
    products: product,
    filterStatus: filterStatus,
    keyword: keyword,
  });
};
