const { ObjectId } = require("mongodb");

const mongo = require("../shared/mongo");

const service = {
  getPosts() {
    return mongo.db.collection("add_tickets").find().toArray();
  },
  getPost(id) {
    return mongo.db.collection("add_tickets").findOne({ _id: ObjectId(id) });
  },
  createPost(data) {
    return mongo.db.collection("add_tickets").insertMany([data]);
  },
  updatePost(id, data) {
    return mongo.db
      .collection("add_tickets")
      .findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: data },
        { returnDocument: "after" }
      );
  },
  deletePost(id) {
    return mongo.db.collection("add_tickets").remove({ _id: ObjectId(id) });
  },
};

module.exports = service;
