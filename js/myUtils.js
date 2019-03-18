function isOnMobile() {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        return true;
    }
    return false;
}

var mouseX = 0;
var mouseY = 0;
var key = '0';
var keyCode = 0;
var mouseButton = 0;
var BACKSPACE = 8;
var LEFT_ARROW = 37;
var UP_ARROW = 38;
var RIGHT_ARROW = 39;
var DOWN_ARROW = 40;
var ENTER_KEY = 13;
var TAB_KEY = 9;
var onMobile = isOnMobile();

function clamp(val, mn, mx)
{
    if(val < mn)
        return mn;
    if(val > mx)
        return mx;
    return val;
}

function shuffle(vec)
{
	var aux = vec[0];
	for(i = 0; i < vec.length; i++)
	{
		var newPos = Math.floor(Math.random() * vec.length);
		aux = vec[i];
		vec[i] = vec[newPos];
		vec[newPos] = aux;
	}
}

function onResize(event)
{
	resize();
}

function initInput()
{
	onMobile = isOnMobile();
	window.onresize = onResize;

	if(!onMobile)
	{
		window.addEventListener("mousemove", function(event) {
			var rect = mainCanvas.getBoundingClientRect();
			mouseX = event.clientX - rect.left;
			mouseY = event.clientY - rect.top;
			mouseDragged();
		});

		window.addEventListener("mousedown", function(event) {
			mouseButton = event.button;
			var rect = mainCanvas.getBoundingClientRect();
			mouseX = event.clientX - rect.left;
			mouseY = event.clientY - rect.top;
			mousePressed();
		});

		window.addEventListener("mouseup", function(event) {
			mouseReleased();
		});

		window.addEventListener("keydown", function(event) {
			key = event.key;
			keyCode = event.which || event.keyCode;
			if(keyPressed())
			{
				event.preventDefault();
				return false;
			}
			return true;
		});
	}
	else
	{
		window.addEventListener("touchstart", function(event) {
			var rect = mainCanvas.getBoundingClientRect();
			mouseX = (event.touches[0].clientX - rect.left);
			mouseY = (event.touches[0].clientY - rect.top);
			mouseButton = 0;
			mousePressed();
		});

		window.addEventListener("touchmove", function(event) {
			var rect = mainCanvas.getBoundingClientRect();
			mouseX = (event.touches[0].clientX - rect.left);
			mouseY = (event.touches[0].clientY - rect.top);
			mouseDragged();
			if(mouseX >= 0 && mouseY >= 0 && mouseX < mainCanvas.width && mouseY < mainCanvas.height)
				event.preventDefault();
		});

		window.addEventListener("touchend", function(event) {
			mouseReleased();
		});
	}
}