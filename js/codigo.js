$(document).on("ready", iniciar);

var logado = false;

function iniciar()
{

	$("#entrar").on("click", entrar);
	$("#sair").on("click", sair);


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
function entrar()
{

	$("#logar").hide();
	$("#logado").fadeIn();

	logado = true;
}
function sair()
{
	$("#logado").hide();
	$("#logar").fadeIn();

	logado = false;
	
	return false;
}