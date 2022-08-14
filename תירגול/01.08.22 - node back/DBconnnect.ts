import mongoose from "mongoose";

export const dbConnection = () => {
  try {
    mongoose.connect(
      "mongodb+srv://KaKa:7pl0qohPTblWZF0T@cluster0.mfqlq.mongodb.net/FullStackDec2021",
      () => {
        console.log(`db connect`);
      }
    );
  } catch (error) {
    console.log(error);
  }
};
