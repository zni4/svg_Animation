function animar() {
	if (document.getElementById('ipad').classList.contains('animar')) {
		document.getElementById('ipad').classList.remove('animar');
		document.getElementById('ipad').classList.add('des_animar');
	} else {
		document.getElementById('ipad').classList.add('animar');
		document.getElementById('ipad').classList.remove('des_animar');
	}
}
