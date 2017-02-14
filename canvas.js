var c = document.getElementById('brexit');
var x = c.getContext('2d');
var b = document.getElementById('reset');

var rectbuilder = function() {
	x.fillStyle = "#60b2e5";
	x.fillRect(event.clientX-5,event.clientY-78,50,100);
	console.log('success');
}


c.addEventListener('click', function() {
	rectbuilder();
	});

b.addEventListener('click', function() {
	x.clearRect(0,0,c.width,c.height);
	console.log("WHYYYYYYYYY????");
	});