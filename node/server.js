var s = require("socket.io").listen(3300);

s.sockets.on("connection", start);

function start(user)
{

	user.on("newMessage", send);

}
function send(value) 
{
	
	s.sockets.emit("msgServer", value);

}