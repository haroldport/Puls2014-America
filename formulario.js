var form = $('#formulario'),
    titulo = $('#titulo'),
    url = $('#url'),
    button = $('#mostrar-form'),
    list = $('#contenido'),
    post = $('.item').first();

function mostrarFormulario(){
	form.slideToggle();
	return false;
}

function agregarPost(){
	var urlInterna = url.val(),
		tituloInterno = titulo.val(),
		clone = post.clone();
	clone.find('.titulo_item a').text(tituloInterno).attr('href',urlInterna);
	clone.hide();

	list.prepend(clone);

	clone.fadeIn();
	return false;
}


//Eventos
button.click(mostrarFormulario);
form.on('submit', agregarPost);