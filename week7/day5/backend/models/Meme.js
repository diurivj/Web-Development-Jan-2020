const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')

const memeSchema = new Schema(
  {
    name: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    photoURL: String,
    tags: [String]
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('Meme', memeSchema)
