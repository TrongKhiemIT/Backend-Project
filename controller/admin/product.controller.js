// [GET] /admin/products
const Product = require("../../models/product.model");
const filterStatusHelper = require("../../helper/filterStatus");
const searchHelper = require("../../helper/search");

module.exports.product = async (req, res) => {
  const filterStatus = filterStatusHelper(req.query);

  let find = {
    deleted: false,
  };

  // Lọc trạng thái
  if (req.query.status) {
    find.status = req.query.status;
  }

  // Tính năng tìm kiếm
  const objectSearch = searchHelper(req.query);
  if (objectSearch.regex) {
    find.title = objectSearch.regex;
  }

  // Tính năng phân trang
  let objectPagination = {
    currentPage: 1,
    limitItems: 10,
  };
  if (req.query.page) {
    objectPagination.currentPage = parseInt(req.query.page);
  }
  objectPagination.skip =
    (objectPagination.currentPage - 1) * objectPagination.limitItems;
  const product = await Product.find(find)
    .limit(objectPagination.limitItems)
    .skip(objectPagination.skip);

  const countProducts = await Product.count(find);
  const totalPage = Math.ceil(countProducts / objectPagination.limitItems);
  objectPagination.totalPage = totalPage;

  // Kết thúc phân trang

  res.render("admin/pages/products/product", {
    titlePages: "Trang Admin Product",
    message: "ProductPages",
    products: product,
    filterStatus: filterStatus,
    keyword: objectSearch.keyword,
    pagination: objectPagination,
  });
};
