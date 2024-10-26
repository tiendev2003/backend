const express = require("express");
const router = express.Router();
const {
  addOrder,
  getOrderById,
  getOrderCustomer,
  createPaymentIntent,
  confirmOrder,
  confirmPayment,
  addPaymentDetails
} = require("../controller/customerOrderController");
const { guestAuth, isAuth } = require("../config/auth");

//add a order
router.post("/guest-add", guestAuth, addOrder);

router.post("/add", isAuth, addOrder);

router.post("/add-payment-details/:id", addPaymentDetails);

// create stripe payment intent
router.post("/create-payment-intent", createPaymentIntent);

//get a order by id
router.get("/:id", getOrderById);

//get all order by a user
router.get("/", getOrderCustomer);

router.post("/confirm-order/:id", confirmOrder);

router.post("/confirm-payment/:id", confirmPayment);

module.exports = router;
