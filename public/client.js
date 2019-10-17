var socket
var input = {
    boosting  :   false,
    clock     :   false,
    counter   :   false,
    fire      :   false
  }

//Listen for User Input
var keymap = {};
$(document).ready(function(){
    $(document).keydown(function(event){ 
        keyChanged(event);
    });
    $(document).keyup(function(event){ 
        keyChanged(event);
    });
});
//Act on change in input
function keyChanged(event) {
    keymap[event.key] = event.type == 'keydown';
    
    if(keymap[' ']){
        //stops downward browser scrolling
        event.preventDefault();    
    }
    // input.fire = keymap[' '];
    // input.boosting = keymap['w'];
    // input.counter = keymap['a'];
    // input.clock = keymap['d'];
    //Input is ready to send
    updateInput();
}
//Update input, sends input data to server
function updateInput(){
    socket.emit('inputchange', input);
}