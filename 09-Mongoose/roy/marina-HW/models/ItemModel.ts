
import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  url: String,
  year: {
    type: Number,
  },
  ownerId: {
    type: String,
    required: true,
  }
});

const ItemModel = mongoose.model("items", ItemSchema);
export default ItemModel;
