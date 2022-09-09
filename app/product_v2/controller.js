const Product = require('./model');
const path = require('path');
const fs = require('fs');
const { Op } = require('sequelize');



const index = async (req, res) => {
  const { search } = req.query;
  if (search) {
    try {
      const product = await Product.findAll({
        where: {
          name: { [Op.substring]: search }
        }
      });
      res.send(product);
    }
    catch (e) {
      res.send(e);
    }
  } else {
    try {
      const product = await Product.findAll();
      res.send(product)
    }
    catch (e) {
      res.send(e);
    }
  }
}


const view = async (req, res) => {
  try {
    const product = await Product.findAll({
      where: {
        id: req.params.id
      }
    });
    res.send(product[0]);
  } catch (e) {
    res.send(e);
  }
}


const store = async (req, res) => {
  const { users_id, name, price, stock, status } = req.body;
  const image = req.file;
  if (image) {
    const target = path.join(__dirname, '../../uploads', image.originalname)
    fs.renameSync(image.path, target)
    try {
      await Product.sync();
      const result = await Product.create({ users_id, name, price, stock, status, image_url: `https://remotemysql.com:3306/public/${image.originalname}` });
      res.send(result);
    } catch (e) {
      res.send(e);
    }
  }
}


const update = async (req, res) => {
  const { users_id, name, price, stock, status } = req.body;
  const image = req.file;
  if (image !== null) {
    const target = path.join(__dirname, '../../uploads', image.originalname)
    fs.renameSync(image.path, target)
    try {
      await Product.sync();
      await Product.update({ users_id, name, price, stock, status, image_url: `https://remotemysql.com:3306/public/${image.originalname}` }, { where: { id: req.params.id } });
      res.send({
        "message": "Product Updated"
      });
    } catch (e) {
      res.send(e);
    }
  } else {
    try {
      await Product.sync();
      await Product.update({ users_id, name, price, stock, status }, { where: { id: req.params.id } });
      res.send({
        "message": "Product Updated"
      });
    } catch (e) {
      res.send(e);
    }
  }
}


const destroy = async (req, res) => {
  const image = req.file;
  try {
    const target = path.join(__dirname, '../../uploads', image.originalname)
    fs.unlinkSync(image.path, target);
    await Product.sync();
    await Product.destroy({ where: { id: req.params.id } })
    res.json({
      "message": "product Deleted"
    })
  } catch (e) {
    res.send(e);
  }
}

module.exports = {
  index,
  view,
  store,
  update,
  destroy
}