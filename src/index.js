module.exports = function towelSort (matrix) {
  if (matrix === undefined) {
    return [];
  }
  
  let spredArr = [];

  if(matrix.length === 0){
    return spredArr;
  } else {
  for (let i = 1; i < matrix.length; i = i + 2){
    matrix[i].sort((a, b) => b - a);
    console.log(matrix[i])
    }
  for (let i = 0; i < matrix.length; i++){
    spredArr.push(...matrix[i]);
    }
  }
  return spredArr;
};
