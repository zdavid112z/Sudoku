function SudokuDifLabel(x, y, fs, slider)
{
	this.x = x;
	this.y = y;
	this.fontScale = fs;
	this.slider = slider;
	this.vhardColor = new color("#b70909");
	this.hardColor = new color("#ff5421");
	this.medColor = new color("#f7e81d");
	this.easyColor = new color("#a7f71d");
	this.veasyColor = new color("#50f71d");
	this.oldVal = 0;
	this.showDelay = 45;
	this.difTimer = this.showDelay;
	// 0 = nothing, 1 = slider dif, 2 = hint ok, 3 = hint wrong
	this.showcode = 1;
	this.hasWon = false;

	this.reset = function()
	{
		this.showcode = 0;
		this.hasWon = false;
	}

	this.win = function()
	{
		this.hasWon = true;
	}

	this.setCode = function(nc)
	{
		this.showcode = nc;
		this.difTimer = this.showDelay;
	}

	this.resize = function(px, py, fs)
	{
		this.x = px;
		this.y = py;
		this.fontScale = fs;
	}

	this.render = function()
	{
		setFont(this.fontScale, "Calibri");
		if(this.slider.val != this.oldVal || this.slider.selected)
		{
			this.oldVal = this.slider.val;
			this.difTimer = this.showDelay;
			this.showcode = 1;
		}
		if(this.difTimer > 0)
		{
			this.difTimer--;
			if(this.showcode == 1)
			{
				if(this.slider.val < 0.2)
				{
					this.vhardColor.setFill();
					ctx.fillText("Foarte greu", this.x, this.y);
				}
				else if(this.slider.val < 0.4)
				{
					this.hardColor.setFill();
					ctx.fillText("Greu", this.x, this.y);	
				}
				else if(this.slider.val < 0.6)
				{
					this.medColor.setFill();
					ctx.fillText("Mediu", this.x, this.y);	
				}
				else if(this.slider.val < 0.8)
				{
					this.easyColor.setFill();
					ctx.fillText("Usor", this.x, this.y);	
				}
				else
				{
					this.veasyColor.setFill();
					ctx.fillText("Foarte usor", this.x, this.y);
				}
			}
			else if(this.showcode == 2)
			{
				this.easyColor.setFill();
				ctx.fillText("Totul e ok", this.x, this.y);	
			}
			else if(this.showcode == 3)
			{
				this.vhardColor.setFill();
				ctx.fillText("Exista greseli", this.x, this.y);	
			}
			else this.showcode = 0;
		}
		if(this.hasWon == true && (this.difTimer <= 0 || this.showcode < 1 || this.showcode > 3))
		{
			this.easyColor.setFill();
			ctx.fillText("Ai castigat!", this.x, this.y);
		}
	}
}