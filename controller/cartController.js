const Product = require("../models/Product");
const mongoose = require("mongoose");
const Category = require("../models/Category");
const Attribute = require("../models/Attribute");
const Cart = require("../models/Cart");
const addTocart = async (req, res) => {
  const { productId, variant, quantity } = req.body;
  const userId = req.user._id;
  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(400).json({ message: "Product not found" });
    }
    if (product.stock < quantity) {
      return res.status(400).json({ message: "Not enough stock" });
    }
    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      cart = new Cart({ user: userId, items: [], totalPrice: 0 });
    }
    const itemIndex = cart.items.findIndex(
      (item) =>
        item.product.toString() === productId &&
        JSON.stringify(item.variant) === JSON.stringify(variant)
    );
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ product: productId, variant, quantity });
    }
    cart.totalPrice +=
      variant.price == 0
        ? variant.originalPrice * quantity
        : variant.price * quantity;
    product.stock -= quantity;
    await product.save();
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const getCart = async (req, res) => {
  const userId = req.user._id;
  try {
    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(400).json({ message: "Cart is empty" });
    }
    res.status(200).json(cart);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const removeCart = async (req, res) => {
  const userId = req.user._id;
  try {
    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(400).json({ message: "Cart is empty" });
    }
    cart.items = [];
    cart.totalPrice = 0;
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const removeItem = async (req, res) => {
  const userId = req.user._id;
  const { productId, variant } = req.body;
  try {
    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(400).json({ message: "Cart is empty" });
    }
    const itemIndex = cart.items.findIndex(
      (item) =>
        item.product.toString() === productId &&
        JSON.stringify(item.variant) === JSON.stringify(variant)
    );
    if (itemIndex > -1) {
      const product = await Product.findById(productId);
      product.stock += cart.items[itemIndex].quantity;
      await product.save();
      cart.totalPrice -= variant.price ==0 ? variant.originalPrice  * cart.items[itemIndex].quantity : variant.price * cart.items[itemIndex].quantity;
      cart.items.splice(itemIndex, 1);
    }
    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { addTocart, getCart, removeCart, removeItem };
