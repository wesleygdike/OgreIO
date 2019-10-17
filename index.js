const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express()
  app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  const server = app.listen(PORT, () => console.log(`OgreIO is listening on ${ PORT }`))

  //Web sockets
  const io = require('socket.io').listen(server)

  io.on('connection', (socket) => {
    console.log('a user connected')
    //create user
    //create users game pieces
    //When user changes their input values
    socket.on('inputchange', function(data){
      //console.log('User: ' + user.id + 'changed their input');
      //update user input values
      // user.input.boosting = data.boosting;
      // user.input.clock = data.clock;
      // user.input.counter = data.counter;
      // user.input.fire = data.fire;
    })
  })

  //Spin up game loop
  setInterval(gameLoop, 30)
  //spin up other intervals as needed (Income)

  function gameLoop(){
      //Check for users, if no users do not advance the game
      if(users.values() !== null) {
          //update ship velocities due to input
          handleInput()
          //update flying objects
          update()
          //bring out your dead
          burrythedead()
          //push the update to the clients
          render()
      } else {
          //No Users, Empty data.
      }
  }

  function handleInput(){}

  function update(){}
  
  function burrythedead(){}
  
  function render(){}
