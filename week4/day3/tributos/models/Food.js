const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true
    },
    brand: {
      type: String,
      enum: ['Marinela', 'Barcel', 'Sabritas']
    },
    rate: {
      type: Number,
      min: 1,
      max: 5
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = mongoose.model('Food', foodSchema)
