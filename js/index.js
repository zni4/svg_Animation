function animar() {
	if (document.getElementById('ipad').classList.contains('animar')) {
		document.getElementById('ipad').classList.remove('animar');
		document.getElementById('ipad').classList.add('des_animar');

		document.getElementById('imagen_ipad').classList.add('desanimar_imagen');
		document.getElementById('imagen_ipad').classList.remove('animar_imagen');

		document.getElementById('textoiPad').classList.add('desanimar_texto');
		document.getElementById('textoiPad').classList.remove('animar_texto');
	} else {
		document.getElementById('ipad').classList.add('animar');
		document.getElementById('ipad').classList.remove('des_animar');

		document.getElementById('imagen_ipad').classList.add('animar_imagen');
		document.getElementById('imagen_ipad').classList.remove('desanimar_imagen');

		document.getElementById('textoiPad').classList.add('animar_texto');
		document.getElementById('textoiPad').classList.remove('desanimar_texto');
	}
}

function animar_notebook() {
	if (document.getElementById('hoja_izda').classList.contains('abrir')) {
		document.getElementById('hoja_izda').classList.add('cerrar');
		document.getElementById('hoja_izda').classList.remove('abrir');

		document
			.getElementById('notebook_svg')
			.classList.add('desanimar_notebook_svg');
		document
			.getElementById('notebook_svg')
			.classList.remove('animar_notebook_svg');
	} else {
		document.getElementById('hoja_izda').classList.add('abrir');
		document.getElementById('hoja_izda').classList.remove('cerrar');

		document
			.getElementById('notebook_svg')
			.classList.add('animar_notebook_svg');
		document
			.getElementById('notebook_svg')
			.classList.remove('desanimar_notebook_svg');
	}
}
