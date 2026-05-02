module.exports.index = (req, res) => {
  res.render("client/pages/home/index", {
    titlePace: "Trang chủ",
    message: "Chào mừng bạn đến với trang chủ!",
  });
};
