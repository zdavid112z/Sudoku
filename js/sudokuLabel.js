function SudokuLabel(x, y, txt, fs)
{
	this.x = x;
	this.y = y;
	this.txt = txt;
	this.fontScale = fs;
	this.textColor = new color(0, 0, 0, 255);

	this.resize = function(px, py, fs)
	{
		this.x = px;
		this.y = py;
		this.fontScale = fs;
	}

	this.render = function()
	{
		this.textColor.setFill();
		setFont(this.fontScale, "Calibri");
		ctx.fillText(this.txt, this.x, this.y);
	}
}