function func1() {

    for(let i = 32; i <= 22; i++) {
        if (i % 2 == 0)
        console.log(i)
    }
}

function func2(n) {
    for(let i = 0; i < n.length; i++) {
        return n+i
    }
 
}
console.log()

function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
  } else {
    alert( pow(x, n) );
  }

function summ(num, evenOrOdd) {
    var resultLabel = [];
    var resultValue = 0;
    var numStr = num.toString();
    var numLength = numStr.length;
    var isEven = evenOrOdd === 'even';
  
    for(var i = 0; i < numLength; i++) {
      if ( (isEven && (i % 2 === 1)) || (!isEven && (i % 2 === 0))) {
        resultLabel.push(numStr[i]);
        resultValue += +numStr[i];
      }
    }
    
    console.log(isEven ? 'Парные: ' : 'Непарные: ', resultLabel.join(', '));
    console.log('Сумма: ', resultValue );
  }
  
  summ(12345, 'even')
  summ(12345, 'odd')

function func3 () {
    const longestString = (arr) => {
        if (arr.length === 0) {
            return null
        }
        
        let arrLengths = [] 
        
        for (let i = 0; i < arr.length; i++) {
          arrLengths.push(arr[i].length)
        }
        
        const max = Math.max.apply(null, arrLengths)
      
        
        for (let i = 0; i < arr.length; i++) {
          if (arr[i].length === max){
            return arr[i]
          }  
        }
      }
      
      console.log(longestString(['beautiful', 'major', 'electronic', 'memory']))
}  
