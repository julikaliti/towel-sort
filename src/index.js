
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let oneDimArr;
	if (typeof matrix !== 'undefined' && matrix.length > 0) {
		for (let i = 0; i <= matrix.length - 2; i++){
			if ((2*i < matrix.length)&&(2*i+1 < matrix.length)) {
				matrix[2*i].sort(function(a,b){return a-b;});	
				matrix[2*i+1].sort(function(a,b){ return b-a;});	
			}				
		}
		oneDimArr = matrix.flat(Infinity);
	} else {
		oneDimArr = [];
	}
	return oneDimArr;
}
