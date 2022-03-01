function button_click () {
	document.getElementById('calculate_button').onclick = function () {
		abs_x = Math.abs(parseInt(document.getElementById('x_value').value));
		document.getElementById('sin_x_value').innerHTML = 'abs(x) = ' + abs_x; 
		//alert(abs_x));
		alert("Абсолютное значение x = " + abs_x);
	}
}

window.onload = function () {
	button_click();
}