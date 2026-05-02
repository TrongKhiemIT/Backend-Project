// [GET] http://localhost:3000/
module.exports.index = (req, res) => {
  res.render("client/pages/home/index", {
    titlePages: "Trang chủ",
    message: "Chào mừng bạn đến với trang chủ!",
  });
};
