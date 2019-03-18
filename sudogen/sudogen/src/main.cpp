#include "sudoku.h"
#include <iostream>
#include <chrono>
#include <fstream>

char getCharForInd(int ind)
{
	if (ind < 26)
		return 'A' + ind;
	return 'a' + (ind - 26);
}

int main()
{
	Sudoku sud;
	std::ofstream fout("sudoku3.js");
	int numSuds = 100;
	int v[81], n, s[81];
	fout << "var numSudokus = " << numSuds << ";\nvar sudokus = \"";
	std::chrono::high_resolution_clock::time_point gstart = std::chrono::high_resolution_clock::now();
	for (int k = 0; k < numSuds; k++)
	{
		std::chrono::high_resolution_clock::time_point st = std::chrono::high_resolution_clock::now();
		
		sud.RandomGen();
		n = 0;
		for (int i = 0; i < 9; i++)
		{
			for (int j = 0; j < 9; j++)
			{
				v[n] = sud.data[i][j];
				s[n++] = sud.solution[i][j];
			}
		}
		for (int i = 0; i < 81; i += 3)
		{
			int code = v[i] + v[i + 1] * 10 + v[i + 2] * 100;
			fout << getCharForInd(code / 52);
			fout << getCharForInd(code % 52);
		}
		for (int i = 0; i < 81; i += 3)
		{
			int code = s[i] + s[i + 1] * 10 + s[i + 2] * 100;
			fout << getCharForInd(code / 52);
			fout << getCharForInd(code % 52);
		}

		std::chrono::high_resolution_clock::time_point nd = std::chrono::high_resolution_clock::now();
		std::chrono::duration<double> d = std::chrono::duration_cast<std::chrono::duration<double>>(nd - st);
		std::cout << k << ": " << d.count() << " s\n";

	}
	fout << "\";";
	std::chrono::high_resolution_clock::time_point gend = std::chrono::high_resolution_clock::now();
	std::chrono::duration<double> d = std::chrono::duration_cast<std::chrono::duration<double>>(gend - gstart);
	std::cout << "Final time: " << d.count() << " s\n";
	fout.close();
	std::cin.get();
	return 0;
}