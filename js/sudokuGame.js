function SudokuGame(game, x, y, s, fs, onwin)
{
	this.onWin = onwin;
	this.sudoku = game;
	this.x = x;
	this.y = y;
	this.s = s;
	this.backColor = new color("#f8f8f8");
	this.linesColor = new color(0, 0, 0);
	this.textColor = new color(0, 0, 0);
	this.unlockedTextColor = new color("#228dbf");
	this.hoverColor = new color("#afe5ff");
	this.selectedColor = new color("#7fd6ff");
	this.badColor = new color("#b70909");
	this.badSelectedColor = new color("#ce891a");
	this.badTextColor = new color("#ffffff");
	this.lineWeigh = 1;
	this.centerLineWeigh = 3;
	this.selectedI = -1;
	this.selectedJ = -1;
	this.hoverI = -1;
	this.hoverJ = -1;
	this.mobile = isOnMobile();
	this.firstTouchI = -1;
	this.firstTouchJ = -1;
	this.selectDelay = 5;
	this.selectDelayTimer = 0;
	this.rightSelectedIndex = -1;
	this.blockInput = false;
	this.fontScale = fs;
	this.startTimer = performance.now();
	this.lastTime = 0;
	this.logText = "";
	this.highlightBad = false;

	this.resize = function(x, y, s, fs)
	{
		this.x = x;
		this.y = y;
		this.s = s;
		this.fs = fs;
	}

	this.putValueOnSelected = function(val)
	{
		if(this.selectedI != -1)
		{
			if(this.sudoku.org[this.selectedI][this.selectedJ] != 1)
			{
				this.highlightBad = false;
				this.sudoku.data[this.selectedI][this.selectedJ] = val;
			}
		}
	}

	this.mpressed = function()
	{
		if(this.blockInput == false)
		{
			this.firstTouchI = Math.floor((mouseY - this.y) / this.s);
			this.firstTouchJ = Math.floor((mouseX - this.x) / this.s);
			if(this.firstTouchI == 10 && this.firstTouchJ >= 0 && this.firstTouchJ < 9)
			{
				this.rightSelectedIndex = this.firstTouchJ;
				this.selectDelayTimer = this.selectDelay;
				this.putValueOnSelected(this.firstTouchJ + 1);
			}
			else
			{
				if(this.firstTouchI >= 0 && this.firstTouchI < 9 && this.firstTouchJ >= 0 && this.firstTouchJ < 9)
				{
					this.selectedI = this.firstTouchI;
					this.selectedJ = this.firstTouchJ;
				}
				//else selectedI = -1;
				if(!this.mobile && mouseButton != 0)
				{
					this.selectedI = -1;
				}
			}
		}
	}

	this.mdragged = function()
	{

	}

	this.mreleased = function()
	{
		
	}

	this.kpressed = function()
	{
		if(this.blockInput == false)
		{
			if(keyCode >= '0'.charCodeAt(0) && keyCode <= '9'.charCodeAt(0) || keyCode == 8 || keyCode == ' '.charCodeAt(0))
			{
				var k = keyCode - '0'.charCodeAt(0);
				if(keyCode == 8 || keyCode == ' '.charCodeAt(0))
					k = 0;
				this.putValueOnSelected(k);
				return true;
			}
			else if(keyCode >= LEFT_ARROW && keyCode <= DOWN_ARROW)
			{
				if(this.selectedI != -1)
				{
					if(keyCode == LEFT_ARROW && this.selectedJ > 0) this.selectedJ--;
					if(keyCode == RIGHT_ARROW && this.selectedJ < 8) this.selectedJ++;
					if(keyCode == UP_ARROW && this.selectedI > 0) this.selectedI--;
					if(keyCode == DOWN_ARROW && this.selectedI < 8) this.selectedI++;
				}
				return true;
			}
			else if(keyCode == ENTER_KEY)
			{
				this.selectedI = 4;
				this.selectedJ = 4;
				return true;
			}
			return false;
		}
		return false;
	}

	this.render = function()
	{
		this.textColor.setFill();
		prepareText();
		setFont(this.s * this.fontScale, "Calibri");
		if(this.blockInput == false)
		{
			var n = performance.now();
			this.lastTime = Math.floor((n - this.startTimer) / 1000);
			if(this.lastTime >= 60)
			{
				ctx.fillText("Timp scurs: " + Math.floor(this.lastTime / 60) + "m " + (this.lastTime % 60) + "s", this.x + 4 * this.s + this.s / 2, this.y + 14.5 * this.s + this.s / 2);	
			}
			else 
			{
				ctx.fillText("Timp scurs: " + (this.lastTime % 60) + "s", this.x + 4 * this.s + this.s / 2, this.y + 14.5 * this.s + this.s / 2);	
			}
		}
		else
		{
			if(this.lastTime >= 60)
			{
				ctx.fillText("Timp final: " + Math.floor(this.lastTime / 60) + "m " + (this.lastTime % 60) + "s", this.x + 4 * this.s + this.s / 2, this.y + 14.5 * this.s + this.s / 2);	
			}
			else 
			{
				ctx.fillText("Timp final: " + (this.lastTime % 60) + "s", this.x + 4 * this.s + this.s / 2, this.y + 14.5 * this.s + this.s / 2);	
			}
		}
		rect(this.backColor, this.x, this.y + this.s * 10, this.s * 9, this.s);
		rect(this.backColor, this.x, this.y, this.s * 9, this.s * 9);

		var hi = Math.floor((mouseY - this.y) / this.s);
		var hj = Math.floor((mouseX - this.x) / this.s);
		if(((hi >= 0 && hi < 9 && hj >= 0 && hj < 9) || (hi == 10 && hj >= 0 && hj < 9)) && !this.mobile)
		{
			this.hoverI = hi;
			this.hoverJ = hj;
		}
		else this.hoverI = -1;
		if((this.hoverI != this.selectedI || this.hoverJ != this.selectedJ) && this.hoverI != -1)
		{
			rect(this.hoverColor, this.x + this.s * this.hoverJ, this.y + this.s * this.hoverI, this.s, this.s);
		}
		if(this.selectedI != -1)
		{
			rect(this.selectedColor, this.x + this.s * this.selectedJ, this.y + this.s * this.selectedI, this.s, this.s);	
		}

		for(i = 0; i < 9; i++)
		{
			for(j = 0; j < 9; j++)
			{
				if(this.sudoku.data[i][j] != 0)
				{
					if(this.sudoku.org[i][j] == 0)
					{
						this.unlockedTextColor.setFill();
						if(this.highlightBad == true && (this.sudoku.data[i][j] != this.sudoku.solution[i][j]) && (this.selectedI != i || this.selectedJ != j))
						{
							rect(this.badColor, this.x + this.s * j, this.y + this.s * i, this.s, this.s);
							this.badTextColor.setFill();
						}
						else if(this.highlightBad == true && (this.sudoku.data[i][j] != this.sudoku.solution[i][j]))
						{
							rect(this.badSelectedColor, this.x + this.s * j, this.y + this.s * i, this.s, this.s);	
							this.badTextColor.setFill();
						}
					}
					else
					{
						this.textColor.setFill();
					}
					ctx.fillText(this.sudoku.data[i][j], this.x + j * this.s + this.s / 2, this.y + i * this.s + this.s / 2);
				}
			}
		}

		this.linesColor.setStroke();
		for(i = 0; i < 10; i++)
		{
			if(i % 3 == 0)
				lineWidth(this.centerLineWeigh);
			else lineWidth(this.lineWeigh);
			line(this.x + i * this.s, this.y, this.x + i * this.s,this. y + this.s * 9);
			line(this.x, this.y + i * this.s, this.x + this.s * 9, this.y + i * this.s);
		}

		if(this.rightSelectedIndex != -1)
		{
			this.selectDelayTimer--;
			rect(this.selectedColor, this.x + this.s * this.rightSelectedIndex, this.y + this.s * 10, this.s, this.s);
			if(this.selectDelayTimer <= 0)
			{
				this.rightSelectedIndex = -1;
			}
		}

		this.linesColor.setStroke();
		lineWidth(this.lineWeigh);
		line(this.x, this.y + this.s * 10, this.x + this.s * 9, this.y + this.s * 10);
		line(this.x, this.y + this.s * 11, this.x + this.s * 9, this.y + this.s * 11);
		for(i = 0; i < 10; i++)
		{
			line(this.x + this.s * i, this.y + 10 * this.s, this.x + this.s * i, this.y + this.s * 11);
		}

		this.textColor.setFill();
		for(i = 1; i < 10; i++)
		{
			ctx.fillText(i, this.x + this.s * i - this.s / 2, this.y + 10 * this.s + this.s / 2);
		}
		
	}

	this.update = function()
	{
		var win = true;
		for(i = 0; i < 9 && win == true; i++)
		{
			for(j = 0; j < 9 && win == true; j++)
			{
				if((this.sudoku.data[i][j]) != (this.sudoku.solution[i][j]))
				{
					win = false;
				}
			}
		}
		if(win == true && this.blockInput == false)
		{
			this.blockInput = true;
			this.selectedI = -1;
			alert("Ai castigat!");
			this.onWin();
		}
	}

	this.getWrong = function()
	{
		var w = 0;
		for(i = 0; i < 9; i++)
		{
			for(j = 0; j < 9; j++)
			{
				if((this.sudoku.data[i][j] != this.sudoku.solution[i][j]) && this.sudoku.org[i][j] == 0 && this.sudoku.data[i][j] != 0)
				{
					w++;
				}
			}
		}
		return w;
	}

	this.hint = function()
	{
		this.highlightBad = true;
		var w = this.getWrong();
		return w;
	}

	return this;
}