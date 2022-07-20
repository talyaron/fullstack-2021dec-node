import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema(
    {
        title: {
            type: String, 
            required: true,
        }, 
        year: {
            type: Number,
            required: true,
        },
        url: {
            type: String,
            required: true,
        }, 
        ownerId: {
            type: String,
            required: true,
        }
    }
);

const ItemModel = mongoose.model("items", ItemSchema);
export default ItemModel;