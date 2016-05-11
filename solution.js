/**
 * @param {number} n
 * @return {string[][]}
 */
function checkValid(columnForRow, row) {
	for (var i = 0; i < row; i++) {
		if (columnForRow[i] == columnForRow[row] || Math.abs(columnForRow[i] - columnForRow[row]) == row - i) {
			return false;
		}
	}
	return true;
}

function helper(res, columnForRow, row, n) {
	if (row == n) {
		var tmp = [];
		for (var i = 0; i < n; i++) {
			var str = '';
			for (var j = 0; j < n; j++) {
				if (columnForRow[i] == j) {
					str += 'Q';
				} else {
					str += '.';
				}
			}
			tmp.push(str);
		}
		res.push(tmp);
		return;
	}

	for (var k = 0; k < n; k++) {
		columnForRow[row] = k;
		if (checkValid(columnForRow, row)) {
			helper(res, columnForRow, row + 1, n);
		}
	}
}

var solveNQueens = function(n) {
	var res = [];
	var columnForRow = new Array(n);
	var row = 0;
	helper(res, columnForRow, row, n);
    return res;  
};