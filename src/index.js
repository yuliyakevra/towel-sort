
// You should implement your task here.

module.exports = function towelSort (matrix) {
 let newArr=[];
if (matrix == undefined || matrix.length == 0){
  return newArr;
}
  else{
    for (let i=0; i<matrix.length; i++){
    if (i % 2){
      newArr.push(matrix[i].reverse())
    }
    else {
      newArr.push(matrix[i])
    }
  
}

  return newArr.flat();
  }
  }
