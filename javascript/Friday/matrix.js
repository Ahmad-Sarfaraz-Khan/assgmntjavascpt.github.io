var input = [
    [ 1, 2, 3, 4], 
    [ 5, 6, 7, 8], 
    [ 9,10,11,12], 
    [13,14,15,16]
  ];
  
  let spiral = (mat) => {
  if(mat.length && mat[0].length) {
  mat[0].forEach(entry => { document.write(entry+" ")})
  mat.shift();
  mat.forEach(item => {
    document.write(item.pop()+(" "))
  });
  spiral(reverseMatrix(mat))
  }
  return;
  }
  
  let reverseMatrix = (mat) => { 
  mat.forEach(item => { 
  item.reverse() 
  }); 
  mat.reverse(); 
  return mat; 
  }
  
  document.write("Clockwise Order is : ")
  spiral(input)