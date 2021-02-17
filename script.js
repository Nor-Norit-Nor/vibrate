document.querySelector('button').addEventListener('click', function(e) {
	var value = document.querySelector('input[type="number"]').value;
	navigator.vibrate([value, 30, value, 30, value]);
  });