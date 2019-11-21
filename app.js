const express = require('express');
const sudoku = require('sudoku');
const app = express();
const port = 8080;
const arr = [];
let s = [];
var exports = module.exports = {};

for (var i = 0; i < 81; i++) arr.push(null);

app.get('/sudoku/board', (req, res) => {
	
	s = sudoku.solvepuzzle(arr);
	res.send(JSON.stringify(s));
});

app.listen(port, () => console.log(`Sudoku API listening on port ${port}!`));

exports.closeServer = function () {
	server.close();
};