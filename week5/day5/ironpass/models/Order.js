const { model, Schema } = require("mongoose");

const orderSchema = new Schema(
  {
    concert: {
      type: Schema.Types.ObjectId,
      ref: "Concert"
    },
    attendance: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Order", orderSchema);
