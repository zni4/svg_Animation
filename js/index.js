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
