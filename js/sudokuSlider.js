function SudokuSlider(x, y, w, h, mn, mx)
{
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.selected = false;
	this.minval = mn;
	this.maxval = mx;
	this.val = 0;
	this.strokeColor = new color(0, 0, 0, 255);
	this.backColor = new color("#f8f8f8");
	this.hoverColor = new color("#afe5ff");
	this.selectedColor = new color("#7fd6ff");
	this.sliderHeight = h * 0.8;
	this.sliderWidth = w / 30;

	this.resize = function(x, y, w, h)
	{
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.sliderHeight = h * 0.8;
		this.sliderWidth = w / 30;
	}

	this.mdragged = function()
	{
		if(this.selected == true)
		{
			this.val = clamp((mouseX - this.x) / this.w, 0, 1);
		}
	}

	this.mpressed = function()
	{
		if(mouseX >= this.x && mouseX <= this.x + this.w && mouseY >= this.y - this.h / 2 && mouseY <= this.y + this.h / 2)
		{
			this.selected = true;
			this.mdragged();
		}
		else this.selected = false;
	}

	this.mreleased = function()
	{
		this.selected = false;
	}

	this.render = function()
	{
		this.strokeColor.setStroke();
		line(this.x, this.y, this.x + this.w, this.y);
		line(this.x, this.y + this.h / 2, this.x, this.y - this.h / 2);
		line(this.x + this.w, this.y + this.h / 2, this.x + this.w, this.y - this.h / 2);
		this.backColor.setFill();
		if(mouseX >= this.x && mouseX <= this.x + this.w && mouseY >= this.y - this.h / 2 && mouseY <= this.y + this.h / 2)
			this.hoverColor.setFill();
		if(this.selected == true)
			this.selectedColor.setFill();
		roundRect(this.x + this.val * this.w - this.sliderWidth / 2, this.y - this.sliderHeight / 2, this.sliderWidth, this.sliderHeight, 3, true, true);
	}

	this.getval = function()
	{
		return this.minval + this.val * (this.maxval - this.minval);
	}
}