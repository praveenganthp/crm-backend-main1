const { ObjectId } = require("mongodb");

const mongo = require("../../addTicket/shared/mongo");

const service = {
  getPosts() {
    return mongo.db.collection("message_service").find().toArray();
  },
  getPost(id) {
    return mongo.db
      .collection("message_service")
      .findOne({ _id: ObjectId(id) });
  },
  createPost(data) {
    return mongo.db.collection("message_service").insertMany([data]);
  },
  updatePost(id, data) {
    return mongo.db
      .collection("message_service")
      .findOneAndUpdate(
        { _id: ObjectId(id) },
        { $set: data },
        { returnDocument: "after" }
      );
  },
  deletePost(id) {
    return mongo.db.collection("message_service").remove({ _id: ObjectId(id) });
  },
};

module.exports = service;
