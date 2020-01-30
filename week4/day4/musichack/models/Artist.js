const { model, Schema } = require("mongoose");

const artistSchema = new Schema(
  {
    name: String,
    genre: String,
    rating: {
      type: Number,
      default: 0,
      max: 5,
      min: 0
    },
    albums: [
      {
        type: Schema.Types.ObjectId,
        ref: "Album"
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = model("Artist", artistSchema);
