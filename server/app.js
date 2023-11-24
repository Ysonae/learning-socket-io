const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server,{
  allowEIO3: true // false by default
})

io.on('connection', socket => {
  console.log('IO connected')

  socket.emit('newMessage', {
    text: 'WTF'
  })
})

module.exports = {
  app, server
}
