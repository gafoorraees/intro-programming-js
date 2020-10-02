function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
    console.log('Sorry, your input is not an integer'); 
    return;
    
  }
  
  if (number % 2 === 0) {
  console.log('even');
  } else {
  console.log('odd');
  }
}
