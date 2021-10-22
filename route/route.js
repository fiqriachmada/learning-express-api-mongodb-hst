const express = require("express");
const router = express.Router();
const userSchema = require("../model/modelUser");

//method get
router.route("/user").get((req, res) => {
  userSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

//method getById
router.route("/user/:id").get((req, res, next) => {
  userSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
      console.log(error);
    } else {
      res.json(data);
      console.log("ID " + req.params.id + " found");
    }
  });
});

//method post
router.route("/create-user").post((req, res, next) => {
  userSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
      console.log("New ID, with ID: " + req.params.id + " Inserted");
    }
  });
});

//method put
router.route("/update-user/:id").put((req, res, next) => {
  userSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json({
          updatedTo: data,
        });
        console.log("ID " + req.params.id + " updated");
      }
    }
  );
});

//method delete
router.route("/delete-user/:id").delete((req, res, next) => {
  userSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
      console.log(error);
    } else {
      res.status(200).json({
        deletedTo: data,
      });
      console.log("ID " + req.params.id + " deleted");
    }
  });
});

module.exports = router;
