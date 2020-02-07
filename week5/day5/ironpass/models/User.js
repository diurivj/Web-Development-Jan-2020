const { model, Schema } = require("mongoose");
const PLM = require("passport-local-mongoose");

const userSchema = new Schema(
  {
    name: String,
    email: String,
    photo: {
      type: String,
      default:
        "https://kooledge.com/assets/default_medium_avatar-57d58da4fc778fbd688dcbc4cbc47e14ac79839a9801187e42a796cbd6569847.png"
    },
    credits: {
      type: Number,
      default: 0
    },
    concertOrders: [
      {
        type: Schema.Types.ObjectId,
        ref: "Order"
      }
    ],
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER"
    }
  },
  {
    timestamps: true
  }
);

userSchema.plugin(PLM, { usernameField: "email" });

module.exports = model("User", userSchema);
