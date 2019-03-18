var sg;
var hint;
var newgame;
var slider;
var difLabel;
var gameWon = false;

function onClickHint()
{
	if(gameWon == false)
	{
		var w = sg.hint();
		if(w == 0) difLabel.setCode(2);
		else difLabel.setCode(3);
	}
}

function onClickNewGame()
{
	gameWon = false;
	sg.blockInput = false;
	sg.startTimer = performance.now();
	sg.lastTime = 0;
	sg.sudoku.randomSelect(slider.getval());
	difLabel.reset();
}

function onWin()
{
	gameWon = true;
	difLabel.win();
}

function getCanvasWidth()
{
	var ratio = window.devicePixelRatio || 1;
	var w = screen.width * ratio;
	var h = screen.height * ratio;
	var onmb = isOnMobile();
	var screenPercentage = 0.7;
	if(onmb == true)
	{
		screenPercentage = 0.6;
		if(w > h) screenPercentage = 0.4;
	}
	var mindim = Math.min(w, h);
	return (mindim * screenPercentage - 10) * (11 / 17);
}

function resize()
{
	var v = getCanvasWidth();

	ctx.canvas.width = v + 10;
	ctx.canvas.height = v * (20/11.5) + 15;

	sg.resize(5, 5, v / 9, 0.8);
	hint.resize(v / 4, v / 9 * 12, 0, v / 11);
	newgame.resize(v / 4 * 3, v / 9 * 12, 0, v / 11);
	slider.resize(5 + v / 11, v / 9 * 13, v - v / 11 * 2, v / 9);
	difLabel.resize(v / 2 + 5, v / 9 * 14, v / 11);
}

function mousePressed()
{
	slider.mpressed();
	sg.mpressed();
	hint.mpressed();
	newgame.mpressed();
	return false;
}

function mouseDragged()
{
	slider.mdragged();
	sg.mdragged();
	return false;
}

function mouseReleased()
{
	slider.mreleased();
	sg.mreleased();
}

function keyPressed()
{
	var rez = sg.kpressed();
	if(rez) return true;
	if(keyCode == "H".charCodeAt(0)) { hint.click(); return true; }
	if(keyCode == "Z".charCodeAt(0)) { slider.val = 0; return true; }
	if(keyCode == "X".charCodeAt(0)) { slider.val = 0.3; return true; }
	if(keyCode == "C".charCodeAt(0)) { slider.val = 0.5; return true; }
	if(keyCode == "V".charCodeAt(0)) { slider.val = 0.7; return true; }
	if(keyCode == "B".charCodeAt(0)) { slider.val = 1; return true; }
	if(keyCode == "N".charCodeAt(0)) { newgame.click(); return true; }
	return false;
}

function draw()
{
	ctx.fillStyle = "white";
    ctx.fillRect(0, 0, mainCanvas.width, mainCanvas.height);
	sg.render();
	sg.update();

	hint.render();
	newgame.render();
	slider.render();
	difLabel.render();
}

function setup()
{
	var v = getCanvasWidth();

	initGraphics();
	ctx.canvas.width = v + 10;
	ctx.canvas.height = v * 2;
	initInput();
	var sud = new Sudoku();
	sud.randomSelect(0);
	sg = new SudokuGame(sud, 5, 5, v / 9, 0.8, onWin);
	hint = new SudokuButton("Hint", v / 4, v / 9 * 12, 0, v / 11, onClickHint);
	newgame = new SudokuButton("New Game", v / 4 * 3, v / 9 * 12, 0, v / 11, onClickNewGame);
	slider = new SudokuSlider(5 + v / 11, v / 9 * 13, v - v / 11 * 2, v / 9, 0, 20);
	difLabel = new SudokuDifLabel(v / 2 + 5, v / 9 * 14, v / 11, slider);
	resize();
	setInterval(draw, 33.3);
}
