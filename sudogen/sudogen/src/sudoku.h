#pragma once

#include <random>
#include <vector>
#include <cstring>
#include <cstdlib>
#include <algorithm>

enum SudokuSolveCase
{
	IMPOSSIBLE,
	SOLVABLE,
	MULTIPLE_SOLUTIONS
};

class Sudoku
{
public:
	Sudoku();
	SudokuSolveCase Solve();
	void RandomGen();
private:
	void ScanPos(int i, int j, int index);
	void ScanAll();
	void Init(int);
	int Succ(int);
	int Valid(int);
	int Solution(int);
	void Show(int);
	SudokuSolveCase Back();
public:
	int data[9][9];
	int solution[9][9];
private:
	bool ap[10];
	int n;
	int v[81];
	std::vector<int> pos[81];
	std::pair<int, int> loc[81];

	std::mt19937 randEngine;
};