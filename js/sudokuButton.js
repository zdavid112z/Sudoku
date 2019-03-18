function SudokuButton(ptxt, px, py, pw, ph, poc)
{
	this.txt = ptxt;
	this.x = px;
	this.y = py;
	this.w = pw;
	this.h = ph;
	this.onClick = poc;
	this.backColor = new color("#f8f8f8");
	this.hoverColor = new color("#afe5ff");
	this.pressedColor = new color("#7fd6ff");
	this.textColor = new color(0, 0, 0, 255);
	this.mobile = isOnMobile();
	this.pressDelay = 5;
	this.pressDelayTimer = 0;

	this.resize = function(px, py, pw, ph)
	{
		this.x = px;
		this.y = py;
		this.w = pw;
		this.h = ph;
	}

	this.click = function()
	{
		this.onClick();
		this.pressDelayTimer = this.pressDelay;
	}

	this.mpressed = function()
	{
		if(mouseX >= this.x - this.w / 2 && mouseX <= this.x + this.w / 2 && mouseY >= this.y - this.h / 2 && mouseY <= this.y + this.h / 2)
		{
			this.click();
		}
	}

	this.render = function()
	{
		setFont(this.h * 0.7, "Calibri");
		var dim = ctx.measureText(this.txt).width + 10;
		this.w = dim;

		this.textColor.setStroke();
		this.backColor.setFill();
		if(this.mobile == false && mouseX >= this.x - this.w / 2 && mouseX <= this.x + this.w / 2 && mouseY >= this.y - this.h / 2 && mouseY <= this.y + this.h / 2)
		{
			this.hoverColor.setFill();
		}
		if(this.pressDelayTimer > 0)
		{
			this.pressDelayTimer--;
			this.pressedColor.setFill();
		}
		roundRect(this.x - dim / 2, this.y - this.h / 2, dim, this.h, 5, 2, true, true);
		this.textColor.setFill();
		ctx.fillText(this.txt, this.x, this.y);
	}
	return this;
}