const { model, Schema } = require("mongoose");
const PLM = require("passport-local-mongoose");

const userSchema = new Schema(
  {
    email: String,
    name: String,
    slackID: String,
    googleID: String,
    image: String,
    role: {
      type: String,
      enum: ["ADMIN", "GUEST"],
      default: "GUEST"
    }
  },
  {
    timestamps: true
  }
);

userSchema.plugin(PLM, { usernameField: "email" });

module.exports = model("User", userSchema);
