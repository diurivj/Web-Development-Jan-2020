const { model, Schema } = require("mongoose");

const albumSchema = new Schema(
  {
    name: String,
    genre: String,
    image: String,
    artist: {
      type: Schema.Types.ObjectId,
      ref: "Artist"
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Album", albumSchema);
