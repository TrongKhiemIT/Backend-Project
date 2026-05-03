// [GET] http://localhost:3000/products

const Product = require("../../models/product.model");
const searchHelper = require("../../helper/search");

module.exports.index = async (req, res) => {
  let find = {
    status: "active",
    deleted: false,
  };

  //Tìm kiếm
  const objectSearch = searchHelper(req.query);
  if (objectSearch.regex) {
    find.title = objectSearch.regex;
  }

  let objectPagination = {
    currentPage: 1,
    limitItems: 9,
  };

  if (req.query.page) {
    objectPagination.currentPage = parseInt(req.query.page);
  }

  objectPagination.skip =
    (objectPagination.currentPage - 1) * objectPagination.limitItems;

  //Lấy sản phẩm theo số lượng mỗi trang
  const products = await Product.find(find)
    .limit(objectPagination.limitItems)
    .skip(objectPagination.skip);

  // Tính priceNew trên data đã phân trang
  const newProduct = products.map((item) => {
    item.priceNew = Math.round(
      item.price - item.price * (item.discountPercentage / 100),
    );
    return item;
  });

  // Đếm tổng số sản phẩm
  const countProduct = await Product.count(find);
  const totalPage = Math.ceil(countProduct / objectPagination.limitItems);
  objectPagination.totalPage = totalPage;

  res.render("client/pages/products/products", {
    titlePages: "Trang sản phẩm",
    message: "San pham",
    products: newProduct,
    keyword: objectSearch.keyword,
    pagination: objectPagination,
  });
};
