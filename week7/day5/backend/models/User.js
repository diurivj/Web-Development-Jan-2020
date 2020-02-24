const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema(
  {
    email: String,
    name: String,
    photoURL: {
      type: String,
      default:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3v-5mIV5qzIasJcJOynU-C5Z31ZHMFXdsNYqvpoQ4oBtYOhnm'
    },
    memes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Meme'
      }
    ]
  },
  {
    timestamps: true,
    versionKey: false
  }
)

userSchema.plugin(PLM, { usernameField: 'email' })

module.exports = model('User', userSchema)
