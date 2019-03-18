function Sudoku()
{
	
	this.data = [
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0]];
	
	this.org = [
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0]];
	
	/*this.data = [
		[5, 3, 0, 0, 7, 0, 0, 0, 0],
		[6, 0, 0, 1, 9, 5, 0, 0, 0],
		[0, 9, 8, 0, 0, 0, 0, 6, 0],
		[8, 0, 0, 0, 6, 0, 0, 0, 3],
		[4, 0, 0, 8, 0, 3, 0, 0, 1],
		[7, 0, 0, 0, 2, 0, 0, 0, 6],
		[0, 6, 0, 0, 0, 0, 2, 8, 0],
		[0, 0, 0, 4, 1, 9, 0, 0, 5],
		[0, 0, 0, 0, 8, 0, 0, 7, 9]];*/
	

	/*this.data = [
		[5, 3, 0, 0, 7, 0, 0, 0, 0],
		[6, 7, 2, 1, 9, 5, 3, 4, 8],
		[1, 9, 8, 3, 4, 2, 5, 6, 7],
		[8, 5, 9, 7, 6, 1, 4, 2, 3],
		[4, 2, 6, 8, 5, 3, 7, 9, 1],
		[7, 1, 3, 9, 2, 4, 8, 5, 6],
		[9, 6, 1, 5, 3, 7, 2, 8, 4],
		[2, 8, 7, 4, 1, 9, 6, 3, 5],
		[3, 4, 5, 2, 8, 6, 1, 7, 9]];*/

	//this.pos = [];
	//this.v = [];
	this.solution = [
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0]];
	// 0 = unsolved, 1 = solved, 2 = impossible, 3 = multiple solutions
	//this.solutionCase = 0;

	/*this.analizPos = function(i, j)
	{
		var alt = [];
		alt.push(0);
		for(k = 1; k <= 9; k++)
			alt.push(1);
		var ci = Math.floor(i / 3);
		var cj = Math.floor(j / 3);
		for(var k = 0; k < 9; k++)
		{
			alt[this.data[i][k]] = 0;
			alt[this.data[k][j]] = 0;
			alt[this.data[ci * 3 + Math.floor(k / 3)][cj * 3 + (k % 3)]] = 0;
		}
		var fin = [];
		for(k = 1; k <= 9; k++)
		{
			if(alt[k] == 1)
				fin.push(k);
		}
		return fin;
	}

	this.canPut = function(i, j, val)
	{
		var ci = Math.floor(i / 3);
		var cj = Math.floor(j / 3);
		for(var k = 0; k < 9; k++)
		{
			if(this.data[i][k] == val) return false;
			if(this.data[k][j] == val) return false;
			if(this.data[ci * 3 + Math.floor(k / 3)][cj * 3 + (k % 3)] == false) return false;
		}
		return true;
	}

	this.analiz = function()
	{
		this.pos = [];
		this.v = [];
		for(i = 0; i < 9; i++)
		{
			for(j = 0; j < 9; j++)
			{
				if(this.data[i][j] == 0)
				{
					var p = this.analizPos(i, j);
					this.pos.push( {pos: p, i: i, j: j } );
					this.v.push(0);
				}
			}
		}
	}

	this.resetData = function()
	{
		this.data = [
			[0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0]];
	}

	this.resetSolution = function()
	{
		this.solution = [
			[this.data[0][0], this.data[0][1], this.data[0][2], this.data[0][3], this.data[0][4], this.data[0][5], this.data[0][6], this.data[0][7], this.data[0][8]],
			[this.data[1][0], this.data[1][1], this.data[1][2], this.data[1][3], this.data[1][4], this.data[1][5], this.data[1][6], this.data[1][7], this.data[1][8]],
			[this.data[2][0], this.data[2][1], this.data[2][2], this.data[2][3], this.data[2][4], this.data[2][5], this.data[2][6], this.data[2][7], this.data[2][8]],
			[this.data[3][0], this.data[3][1], this.data[3][2], this.data[3][3], this.data[3][4], this.data[3][5], this.data[3][6], this.data[3][7], this.data[3][8]],
			[this.data[4][0], this.data[4][1], this.data[4][2], this.data[4][3], this.data[4][4], this.data[4][5], this.data[4][6], this.data[4][7], this.data[4][8]],
			[this.data[5][0], this.data[5][1], this.data[5][2], this.data[5][3], this.data[5][4], this.data[5][5], this.data[5][6], this.data[5][7], this.data[5][8]],
			[this.data[6][0], this.data[6][1], this.data[6][2], this.data[6][3], this.data[6][4], this.data[6][5], this.data[6][6], this.data[6][7], this.data[6][8]],
			[this.data[7][0], this.data[7][1], this.data[7][2], this.data[7][3], this.data[7][4], this.data[7][5], this.data[7][6], this.data[7][7], this.data[7][8]],
			[this.data[8][0], this.data[8][1], this.data[8][2], this.data[8][3], this.data[8][4], this.data[8][5], this.data[8][6], this.data[8][7], this.data[8][8]]];
	}

	this.setDataToSolution = function()
	{
		this.data = [
			[this.solution[0][0], this.solution[0][1], this.solution[0][2], this.solution[0][3], this.solution[0][4], this.solution[0][5], this.solution[0][6], this.solution[0][7], this.solution[0][8]],
			[this.solution[1][0], this.solution[1][1], this.solution[1][2], this.solution[1][3], this.solution[1][4], this.solution[1][5], this.solution[1][6], this.solution[1][7], this.solution[1][8]],
			[this.solution[2][0], this.solution[2][1], this.solution[2][2], this.solution[2][3], this.solution[2][4], this.solution[2][5], this.solution[2][6], this.solution[2][7], this.solution[2][8]],
			[this.solution[3][0], this.solution[3][1], this.solution[3][2], this.solution[3][3], this.solution[3][4], this.solution[3][5], this.solution[3][6], this.solution[3][7], this.solution[3][8]],
			[this.solution[4][0], this.solution[4][1], this.solution[4][2], this.solution[4][3], this.solution[4][4], this.solution[4][5], this.solution[4][6], this.solution[4][7], this.solution[4][8]],
			[this.solution[5][0], this.solution[5][1], this.solution[5][2], this.solution[5][3], this.solution[5][4], this.solution[5][5], this.solution[5][6], this.solution[5][7], this.solution[5][8]],
			[this.solution[6][0], this.solution[6][1], this.solution[6][2], this.solution[6][3], this.solution[6][4], this.solution[6][5], this.solution[6][6], this.solution[6][7], this.solution[6][8]],
			[this.solution[7][0], this.solution[7][1], this.solution[7][2], this.solution[7][3], this.solution[7][4], this.solution[7][5], this.solution[7][6], this.solution[7][7], this.solution[7][8]],
			[this.solution[8][0], this.solution[8][1], this.solution[8][2], this.solution[8][3], this.solution[8][4], this.solution[8][5], this.solution[8][6], this.solution[8][7], this.solution[8][8]]];
	}*/

	/*this.init = function(k)
	{
		this.v[k] = -1;
	}

	this.succ = function(k)
	{
		if(this.v[k] < this.pos[k].pos.length - 1)
		{
			this.v[k]++;
			return true;
		}
		return false;
	}

	this.valid = function(k)
	{
		for(i = 0; i < k; i++)
		{
			if(((this.pos[i].i == this.pos[k].i) || 
				(this.pos[i].j == this.pos[k].j) || 
				((Math.floor(this.pos[i].i / 3) == Math.floor(this.pos[k].i / 3)) && (Math.floor(this.pos[i].j / 3) == Math.floor(this.pos[k].j / 3)))) && 
				this.pos[i].pos[this.v[i]] == this.pos[k].pos[this.v[k]])
			{
				return false;
			}
			
		}
		return true;
	}

	this.sol = function(k)
	{
		return (k == this.pos.length - 1);
	}

	this.afis = function(k)
	{
		if(this.solutionCase == 0)
		{
			this.solutionCase = 1;
			this.resetSolution();
			for(i = 0; i <= k; i++)
			{
				this.solution[this.pos[i].i][this.pos[i].j] = this.pos[i].pos[this.v[i]];
			}
		}
		else if(this.solutionCase == 1)
		{
			this.solutionCase = 3;
		}
	}

	this.back = function()
	{
		var i = 0;
		var k = 0;
		this.solutionCase = 0;
		this.init(k);
		while(k >= 0)
		{
			i = 0;
			while(i == 0)
			{
				if(this.succ(k) == false) { i = 1; break; }
				if(this.valid(k) == true) { i = 2; break; }
			}
			if(i == 1)
			{
				k--;
			}
			else
			{
				if(this.sol(k) == true)
				{
					this.afis(k);
					if(this.solutionCase == 3)
						break;
				}
				else
				{
					k++;
					this.init(k);
				}
			}
		}
		if(this.solutionCase == 0)
			this.solutionCase = 2;
	}

	this.solve = function()
	{
		this.analiz();
		this.back();
	}*/

	this.setAtIndex = function(ind, val, dest)
	{
		dest[Math.floor(ind / 9)][ind % 9] = val;
		//if(val != 0)
		//	this.org[Math.floor(ind / 9)][ind % 9] = 1;
	}	

	this.decodeGame = function(ps, dest)
	{
		var v1 = 0, v2 = 0, v3 = 0;
		var ch1 = '0', ch2 = '0';
		var c1 = 0, c2 = 0, cf = 0;
		for(i = 0; i < 54; i += 2)
		{
			var poz = i / 2 * 3;
			ch1 = sudokus[i + ps].charCodeAt(0);
			ch2 = sudokus[i + 1 + ps].charCodeAt(0);
			if(ch1 >= 65 && ch1 <= 90) c1 = ch1 - 65;
			else c1 = (ch1 - 97) + 26;
			if(ch2 >= 65 && ch2 <= 90) c2 = ch2 - 65;
			else c2 = (ch2 - 97) + 26;
			cf = c1 * 52 + c2;
			this.setAtIndex(poz, cf % 10, dest);
			this.setAtIndex(poz + 1, Math.floor(cf / 10) % 10, dest);
			this.setAtIndex(poz + 2, Math.floor(cf / 100) % 10, dest);
		}
	}

	this.randomSelect = function(toAdd)
	{
		var sind = Math.floor(Math.random() * numSudokus);
		var ps = sind * 54 * 2;
		
		this.decodeGame(ps, this.data);
		this.decodeGame(ps + 54, this.solution);
		for(i = 0; i < 9; i++)
		{
			for(j = 0; j < 9; j++)
			{
				if(this.data[i][j] != 0) this.org[i][j] = 1;
				else this.org[i][j] = 0;
			}
		}

		if(toAdd > 0)
		{
			this.makeEasier(toAdd);
		}
	}

	/*this.randomGen = function(toAdd)
	{
		this.org = [
			[0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0]];	
		this.resetData();
		this.pos = [];
		this.v = [];
		for(i = 0; i < 9; i++)
		{
			for(j = 0; j < 9; j++)
			{
				var vec = [1, 2, 3, 4, 5, 6, 7, 8, 9];
				shuffle(vec);
				this.pos.push( {pos: vec, i: i, j: j } );
				this.v.push(0);
			}
		}
		this.back();
		this.setDataToSolution();
		var rv = [];
		for(i = 0; i < 81; i++)
		{
			rv.push(i);
		}
		shuffle(rv);
		var elim = 0;
		for(k = 0; k < 81; k++)
		{
			var i = Math.floor(rv[k] / 9);
			var j = rv[k] % 9;
			var old = this.data[i][j];
			this.data[i][j] = 0;
			this.solve();
			if(this.solutionCase == 3)
			{
				this.data[i][j] = old;
				this.org[i][j] = 1;
			}
			else
			{
				elim++;
				if(elim >= 61)
					break;
			}
		}
		this.solve();
		if(toAdd > 0)
		{
			this.makeEasier(toAdd);
		}
	}*/

	this.makeEasier = function(toAdd)
	{
		rv = [];
		for(i = 0; i < 81; i++)
		{
			rv.push(i);
		}
		shuffle(rv);
		for(k = 0; toAdd > 0 && k < 81; k++)
		{
			var i = Math.floor(rv[k] / 9);
			var j = rv[k] % 9;
			if(this.data[i][j] == 0)
			{
				this.data[i][j] = this.solution[i][j];
				toAdd--;
				this.org[i][j] = 1;
			}
		}
	}

	return this;
}