
// You should implement your task here.


module.exports = function towelSort (matrix) {
  let result = [];
  console.log(matrix);
  if(matrix === undefined || matrix.length === 0 ) result;
  else {
    let status = 0;
    for (i=0;i<matrix.length;i++){
      for(j=0;j<matrix[i].length;j++){
        if (i%2 === 0){
          status = j;
        }
        else{
          status = (matrix[i].length - 1 - j);
        }
        result.push(matrix[i][status]);
      }
    }
        
  }
  return result;
}
