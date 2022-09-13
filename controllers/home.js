// libraries
const express = require("express");

const Counter = require("../models/counter");

async function home(req, res) {
  let result = await Counter.find({});
  let status;

  if (result.length == 0) {
    // add item
    let val = new Counter(req.body);

    try {
      let response = await val.save();
      status = "OK";
    } catch (error) {
      status = "ERROR";
    }
  } else {
    // update item
    const filter = { _id: result[0]["_id"] };
    const update = req.body;

    try {
      let response = await Counter.findOneAndUpdate(filter, update);
      status = "OK";
    } catch (error) {
      status = "ERROR";
    }
  }

  return res.json({ message: status });
}

module.exports = {
  home,
};
