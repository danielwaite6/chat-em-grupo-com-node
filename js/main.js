$(document).on("ready", start);

var logged = false;
var ws = io.connect("http://node-chat-em-grupo.vrazor.com");

function start()
{

	$("#enter").on("click", enter);
	$("#exit").on("click", exit);

	ws.on("msgServer", receive);

	$("#send").on("click", send);

	$(document).on("keypress", press);


	$('#colorSelector').ColorPicker({
		color: '#0000ff',
		onShow: function (colpkr) {
			$(colpkr).fadeIn(500);
			return false;
		},
		onHide: function (colpkr) {
			$(colpkr).fadeOut(500);
			return false;
		},
		onChange: function (hsb, hex, rgb) {
			$('#colorSelector div').css('backgroundColor', '#' + hex);
			$('#color').val('#' + hex);
		}
	});
}
function enter()
{

	$("#logout").hide();
	$("#logged").fadeIn();

	logged = true;
}
function exit()
{
	$("#logged").hide();
	$("#logout").fadeIn();

	logged = false;
	
	return false;
}
function send() 
	{	
		if($("#text").val() != ''){
			var values = {
							'name':$("#name").val(),
							'color':$("#color").val(),
							'text':$("#text").val()
							};


			ws.emit("novaMensagem", values);
			$("#text").val('').focus();
		}	
	}
function press(t)
{
	if(t.which == 13){
		$("#send").click();
	}
	console.log(t.which);
}
function receive(values) 
{
	
	$("#chat").append('<span style="color:'+ values.color +';display:block;"><b>'+ values.name +' says:</b> '+ values.text +'</span>').scrollTop();


}