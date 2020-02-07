const { model, Schema } = require("mongoose");

const reviewSchema = new Schema(
  {
    body: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    concert: {
      type: Schema.Types.ObjectId,
      ref: "Concert"
    },
    rating: {
      default: 0,
      type: Number,
      min: 0,
      max: 5
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Review", reviewSchema);
