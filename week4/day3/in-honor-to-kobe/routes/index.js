//const express = require('express')
//const router = express.Router()
const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/bio', (req, res) => {
  // para escapar del layout, le pasamos una llave que diga layout: false
  const kobe = {
    name: 'Kobe Bryant',
    isAlive: false,
    born: 'August 23, 1978',
    died: 'January 26, 2020',
    awards: [
      {
        name: 'NBA Champion',
        quantity: 5
      },
      {
        name: 'NBA Finals MVP',
        quantity: 2
      },
      {
        name: 'NBA All-Star',
        quantity: 18
      }
    ],
    attributes: {
      height: '1.98 m',
      middle: 'otra cosa',
      weight: '96 kg'
    }
  }
  res.render('bio', kobe)
})

router.get('/gallery', (req, res) => {
  const data = [
    {
      name: 'Lakers vs Celtics',
      description: 'Se mamoooo, hizo 200 puntos',
      image:
        'https://image.cnbcfm.com/api/v1/image/104504933-Kobe_Bryant_24.jpg?v=1580227638',
      date: 'October 2019'
    },
    {
      name: 'Lakers vs Bulls',
      description: 'LE dio en su madre chido',
      image:
        'https://images.solecollector.com/images/fl_lossy,q_auto/c_crop,h_3660,w_2844,x_0,y_496/altdbbqgsodsp6in0skh/kobe-bryant-houston-rockets-march-30-2007',
      date: 'October 2018'
    },
    {
      name: 'Lakers vs Raptors',
      description: 'Cemarnat',
      image: 'https://i.ytimg.com/vi/FS0zbKZ66vw/maxresdefault.jpg'
    }
  ]
  res.render('gallery', { data })
})

module.exports = router
