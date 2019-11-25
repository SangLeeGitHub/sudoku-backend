const express = require('express');
const sudoku = require('sudoku');
const app = express();
const port = 8080;
const arr = [];
let s = [];
var exports = module.exports = {};
var server = null;

for (var i = 0; i < 81; i++) arr.push(null);

app.get('/sudoku/board', (req, res) => {
	
	s = sudoku.solvepuzzle(arr);
	res.type('json');
	res.send(JSON.stringify(s.map(x => x + 1)));
});

server = app.listen(port, () => console.log(`Sudoku API listening on port ${port}!`));

// To stop the server from the external endpoint.
exports.closeServer = function () {

	server.close();
};
