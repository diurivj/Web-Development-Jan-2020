const { model, Schema } = require("mongoose");

const concertSchema = new Schema(
  {
    genre: {
      type: String,
      enum: [
        "METAL",
        "INDIE",
        "CUMBIA",
        "K-POP",
        "REGGAEPOOP",
        "SKA",
        "JAZZ",
        "ROCK",
        "HARD ROCK",
        "ELECTRONICA",
        "CLASICA"
      ]
    },
    name: String,
    location: {
      type: { type: String },
      coordinates: [Number]
    },
    date: Date,
    capacity: Number,
    attendees: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    price: Number,
    description: String,
    reviews: [
      {
        type: Schema.Types.ObjectId,
        ref: "Review"
      }
    ],
    cartel: String,
    availableTickets: Number
  },
  {
    timestamps: true
  }
);

concertSchema.index({ location: "2dsphere" });

module.exports = model("Concert", concertSchema);
