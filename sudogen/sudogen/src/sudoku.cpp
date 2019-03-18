#include "sudoku.h"
#include <iostream>

void Sudoku::Init(int k)
{
	v[k] = -1;
}

int Sudoku::Succ(int k)
{
	if (v[k] < int(pos[k].size()) - 1)
	{
		v[k]++;
		return 1;
	}
	return 0;
}

int Sudoku::Valid(int k)
{
	for (int i = 0; i < k; i++)
	{
		if ((
			(loc[i].first == loc[k].first) ||
			(loc[i].second == loc[k].second) ||
			((loc[i].first / 3 == loc[k].first / 3) && (loc[i].second / 3 == loc[k].second / 3))) &&
			(pos[i][v[i]] == pos[k][v[k]]))
			return 0;
	}
	return 1;
}

int Sudoku::Solution(int k)
{
	return k == n - 1;
}

void Sudoku::Show(int k)
{
	memcpy(solution, data, sizeof(data));
	for (int i = 0; i <= k; i++)
	{
		solution[loc[i].first][loc[i].second] = pos[i][v[i]];
	}
}

SudokuSolveCase Sudoku::Back()
{
	SudokuSolveCase c = IMPOSSIBLE;
	int i, k = 0;
	Init(k);
	while (k >= 0)
	{
		i = 0;
		while (i == 0)
		{
			if (Succ(k) == 0) i = 1;
			else if (Valid(k) == 1) i = 2;
		}
		if (i == 1)
			k--;
		else
		{
			if (Solution(k))
			{
				if (c == IMPOSSIBLE)
				{
					Show(k);
					c = SOLVABLE;
				}
				else
				{
					c = MULTIPLE_SOLUTIONS;
					break;
				}
			}
			else
			{
				k++;
				Init(k);
			}
		}
	}
	return c;
}

Sudoku::Sudoku()
{
	memset(data, 0, sizeof(data));
	memset(solution, 0, sizeof(solution));
	std::random_device dev;
	randEngine = std::mt19937(dev());
}

SudokuSolveCase Sudoku::Solve()
{
	SudokuSolveCase c;
	ScanAll();
	if (n == 0)
		return SOLVABLE;
	c = Back();
	return c;
}

void Sudoku::RandomGen()
{
	memset(data, 0, sizeof(data));
	ScanAll();
	for (int i = 0; i < n; i++)
	{
		std::shuffle(pos[i].begin(), pos[i].end(), randEngine);
	}
	Back();
	memcpy(data, solution, sizeof(data));
	std::vector< std::pair<int, int> > p;
	p.reserve(81);
	for (int i = 0; i < 9; i++)
	{
		for (int j = 0; j < 9; j++)
		{
			p.push_back(std::make_pair(i, j));
		}
	}
	std::shuffle(p.begin(), p.end(), randEngine);
	for (int k = 0; k < 81; k++)
	{
		int i = p[k].first;
		int j = p[k].second;
		int old = data[i][j];
		data[i][j] = 0;
		SudokuSolveCase sc = Solve();
		if (sc == MULTIPLE_SOLUTIONS)
			data[i][j] = old;
	}
	Solve();
}

void Sudoku::ScanPos(int i, int j, int index)
{
	loc[index].first = i;
	loc[index].second = j;
	memset(ap, 0, sizeof(ap));
	for (int k = 0; k < 9; k++)
	{
		ap[data[k][j]] = 1;
		ap[data[i][k]] = 1;
		ap[data[(i / 3) * 3 + k / 3][(j / 3) * 3 + k % 3]] = 1;
	}
	pos[index].clear();
	for (int k = 1; k <= 9; k++)
		if(ap[k] == 0)
			pos[index].push_back(k);
}

void Sudoku::ScanAll()
{
	n = 0;
	for (int i = 0; i < 9; i++)
	{
		for (int j = 0; j < 9; j++)
		{
			if (data[i][j] == 0)
				ScanPos(i, j, n++);
		}
	}
}