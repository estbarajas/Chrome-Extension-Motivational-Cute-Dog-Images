document.addEventListener('DOMContentLoaded', function() {
	let button = document.getElementById('button');
	let container = document.getElementById('container');
	let imagesArray = ['dog1.jpg', 'dog2.jpg', 'dog3.jpg', 'dog4.jpg', 'dog5.jpg'];
	
	button.addEventListener('click', function() {
		let num = Math.floor(Math.random() * (imagesArray.length));
		document.dogImage.src = imagesArray[num];
	}, false);	
},false);