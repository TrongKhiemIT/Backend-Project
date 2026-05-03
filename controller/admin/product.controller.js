// [GET] /admin/products
const Product = require("../../models/product.model");

module.exports.product = async (req, res) => {
  let filterStatus = [
    {
      name: "Tất cả",
      status: "",
      class: "",
    },
    {
      name: "Hoạt động",
      status: "active",
      class: "",
    },
    {
      name: "Dừng hoạt động",
      status: "inactive",
      class: "",
    },
  ];

  if (req.query.status) {
    const index = filterStatus.findIndex(
      (item) => item.status === req.query.status,
    );
    filterStatus[index].class = "active";
  } else {
    filterStatus[0].class = "active";
  }

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
