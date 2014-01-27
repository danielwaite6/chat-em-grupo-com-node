var s = require("socket.io").listen(9090);

s.sockets.on("connection", iniciar);

function iniciar(usuario)
{

	usuario.on("novaMensagem", enviar);

}
function enviar(valor) 
{
	
	s.sockets.emit("msgServer", valor);

}