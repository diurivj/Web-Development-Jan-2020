const { model, Schema } = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    photoURL: {
      type: String,
      default:
        'https://www.stickpng.com/assets/images/580b585b2edbce24c47b2561.png'
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

// configurando plm
userSchema.plugin(PLM, { usernameField: 'email' })

module.exports = model('User', userSchema)
