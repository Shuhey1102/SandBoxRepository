const fizzBuzzFunc = () => {

  let output = ""
  for (let cnt = 1; cnt<= 100; cnt++){

    output += "No." + cnt + " : "
    if (cnt % 3 === 0 && cnt % 5 === 0 ){
      output += "FizzBuzz"
    }
    else if(cnt % 3 === 0 ){
      output += "Fizz"
    }
    else if(cnt % 5 === 0 ){
      output += "Buzz"
    }
    else{
      output += cnt
    }
    
    output += "<br>"

  }
  return output
}


document.getElementById("testOutputContent").innerHTML = fizzBuzzFunc()