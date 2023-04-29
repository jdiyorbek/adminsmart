const express = require("express");
const app = express();
const router = express.Router();
const AdminModel = require("../models/admin");
const ArticleModel = require("../models/article");
const path = require("path");
const adminData ={login: "smartadmin", password: "123456789", id: "XE2p5QcFq^*U^SQi&geqr9vS$eBantD8wpuOOmbp"}

router.get("*", async (req, res, next) => {
  
  // console.log(adminData)
  if (req.session.userID == adminData.id) {
    next();
  } else if (req.originalUrl == "/admin") {
    res.render("admin");
  } else {
    res.redirect("/admin");
  }
});

router.get("/", async (req, res) => {
  res.redirect("/admin/create-article");
});

router.post("/", async (req, res) => {
  if (
    adminData.login == req.body.login &&
    adminData.password == req.body.password
  ) {
    req.session.userID = adminData.id;
    res.redirect("/admin/create-article");
  } else {
    res.redirect("/");
  }
});

// router.get("/articles", async (req, res) => {
//   // console.log(req.params)
//   const articles = await ArticleModel.find();
//   // const articles = await ArticleModel.find().skip((parseInt(req.params.page) * 2) - 2).limit(2)
//   res.render("articles", { articles });
// });

router.get("/create-article", async (req, res) => {
  res.render("createPost");
});

router.post("/create-article", async (req, res) => {
  console.log(req.body)
  ArticleModel.create({
    uz: {
      title: req.body.titleUz,
      description: req.body.descriptionUz,
      imgUrl: req.body.img,
      readMore: req.body.moreUz,
      text: req.body.textUz,
      view: 0,
    },
    ru: {
      title: req.body.titleRu,
      description: req.body.descriptionRu,
      imgUrl: req.body.img,
      readMore: req.body.moreRu,
      text: req.body.textRu,
      view: 0,
    }
  });
  res.redirect("/");
});

// router.get("/edit-article/", async (req, res) => {
//   res.redirect("./articles");
// });

// router.get("/edit-article/:id", async (req, res) => {
//   const article = await ArticleModel.findById(req.params.id);
//   res.render("editPost", { article });
// });

// router.post("/edit-article/:id", async (req, res) => {
//   await ArticleModel.findByIdAndUpdate(req.params.id, { ...req.body });
//   res.redirect(`/article/${req.params.id}`);
// });

// router.get("/delete-article/:id/", async (req, res) => {
//   await ArticleModel.findByIdAndDelete(req.params.id);
//   res.redirect("/admin/articles");
// });

// router.get("/admins", async (req, res) => {
//   const admins = await AdminModel.find();
//   res.render("admins", { admins: admins });
// });

// router.get("/admins/add", async (req, res) => {
//   res.render("addAdmin");
  // const adminData = await AdminModel.findOne();
  // if (req.session.userID == adminData._id) {
  //     await ArticleModel.findByIdAndDelete(req.params.id)
  //     res.redirect("/admins");
  // } else {
  //     res.redirect("/admin");
  // }
// });

// router.post("/admins/add", async (req, res) => {
//   await AdminModel.create({ ...req.body });
//   res.redirect("/admin/admins");
// });

// router.get("/admins/edit/", async(req, res) => {
//     const chosenAdmin = await AdminModel.findOne()
//     console.log(chosenAdmin)
//     res.render("editAdmin", { chosenAdmin });
// });

// router.get("/admins/edit-admin/:id", async (req, res) => {
//   const chosenAdmin = await AdminModel.findById(req.params.id)
//   res.render("editAdmin", {chosenAdmin});
// });

// router.post("/admins/edit-admin/:id", async (req, res) => {
//   await AdminModel.findByIdAndUpdate(req.params.id, {...req.body})
//   res.redirect("/admin/admins")
// });

// router.get("/delete-admin/:id", async (req, res) => {
//   await AdminModel.findByIdAndDelete(req.params.id);
//   res.redirect("/admin/admins");
// });

module.exports = router;