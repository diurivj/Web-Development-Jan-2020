const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const obstacles = []
let interval
let frames = 0
let score = 0

const imgs = {
  character: 'https://im7.ezgif.com/tmp/ezgif-7-ba827f34da9c.png',
  background:
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5f8143ed-4ec0-4539-b8cf-827bc87f498a/d3l6i50-12ad4899-93d5-4445-a4dc-570cd5b26d9a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVmODE0M2VkLTRlYzAtNDUzOS1iOGNmLTgyN2JjODdmNDk4YVwvZDNsNmk1MC0xMmFkNDg5OS05M2Q1LTQ0NDUtYTRkYy01NzBjZDViMjZkOWEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ucfcdYqUY2e89X1aFcnWGKnk2zYqdw2G30IUlTtWgek',
  weed:
    'https://dejpknyizje2n.cloudfront.net/marketplace/products/pixel-art-marijuana-leaf-sticker-1543002845.9860613.png',
  taco: 'https://images-na.ssl-images-amazon.com/images/I/21lDj6no06L.png'
}

class Background {
  constructor() {
    this.x = 0
    this.y = 0
    this.width = canvas.width
    this.height = canvas.height
    this.img = new Image()
    this.img.src = imgs.background
    this.img.onload = () => {
      this.draw()
    }
    this.audio = new Audio()
    this.audio.src =
      'http://23.237.126.42/ost/nyan-cat-fly-gamerip/tpwewlja/146__-0r._-2y.mp3'
    this.audio.loop = true
  }
  draw() {
    if (this.x < -canvas.width) this.x = 0
    this.x--
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    ctx.drawImage(
      this.img,
      this.x + this.width,
      this.y,
      this.width,
      this.height
    )
    ctx.font = '50px Avenir'
    ctx.fillStyle = 'white'
  }
}

class Obstacle {
  constructor(x, y, imgSrc) {
    this.x = x
    this.y = y
    this.width = 100
    this.height = 100
    this.img = new Image()
    this.img.src = imgSrc
  }
  draw() {
    this.x--
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
}

class Character {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.width = 100
    this.height = 100
    this.sx = 0
    this.sy = 0
    this.img = new Image()
    this.img.src = imgs.character
    this.img.onload = () => {
      this.draw()
    }
  }
  draw() {
    if (this.sx >= 2040) this.sx = 0
    ctx.drawImage(
      this.img,
      this.sx,
      this.sy,
      340,
      238,
      this.x,
      this.y,
      this.width,
      this.height
    )
  }
  goRight() {
    if (this.x > canvas.width - 100) return
    this.x += 10
    this.move()
  }
  goLeft() {
    this.x -= 10
    this.move()
  }
  goUp() {
    this.y -= 10
    this.move()
  }
  goDown() {
    this.y += 10
    this.move()
  }
  move() {
    this.sx += 340
  }
  isTouching(obstacle) {
    return (
      this.x < obstacle.x + obstacle.width &&
      this.x + this.width > obstacle.x &&
      this.y < obstacle.y + obstacle.height &&
      this.y + this.height > obstacle.y
    )
  }
}

const nyan = new Character(0, canvas.height - 200)
const nyanWorld = new Background()

function startGame() {
  if (interval) return
  nyanWorld.audio.play()
  interval = setInterval(update, 1000 / 60)
}

function generateObstacles() {
  let img, rnd
  if (frames % 100 === 0) {
    rnd = Math.random() * canvas.height
    if (Math.random() >= 0.5) img = imgs.taco
    else img = imgs.weed
    obstacles.push(new Obstacle(canvas.width + 100, rnd, img))
  }
}

function drawObstacles() {
  generateObstacles()
  obstacles.forEach(obstacle => obstacle.draw())
}

function checkCollitions() {
  obstacles.forEach((obstacle, idx) => {
    if (nyan.isTouching(obstacle)) {
      if (obstacle.img.src === imgs.taco) score += 10
      else score -= 20
      return obstacles.splice(idx, 1)
    }
  })
}

function update() {
  frames++
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  nyanWorld.draw()
  nyan.draw()
  drawObstacles()
  checkCollitions()
  ctx.fillText(String(score), canvas.width - 100, 100)
}

document.addEventListener('keydown', ({ keyCode }) => {
  switch (keyCode) {
    case 39:
      return nyan.goRight()

    case 38:
      return nyan.goUp()

    case 37:
      return nyan.goLeft()

    case 40:
      return nyan.goDown()

    case 13:
      return startGame()
  }
})

document.querySelector('button').onclick = () => {
  if (canvas.webkitRequestFullScreen) {
    canvas.webkitRequestFullScreen()
  } else {
    canvas.mozRequestFullScreen()
  }
}
