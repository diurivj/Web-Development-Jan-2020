const cloudinary = require('cloudinary')
const cloudinaryStorage = require('multer-storage-cloudinary')
const multer = require('multer')

// configurar cloudinary con nuestras credenciales
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
})

const storage = cloudinaryStorage({
  cloudinary,
  folder: 'Doubts', // The name of the folder in cloudinary
  allowedFormats: ['jpg', 'png', 'gif'],
  filename: (req, file, cb) => cb(null, file.originalname) // The file on cloudinary would have the same name as the original file name
})

const uploadCloud = multer({ storage })

module.exports = uploadCloud
