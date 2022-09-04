//69
function testLogicalOr(val) {
    // Only change code below this line
  
    if (val<10 || val > 20) {
      return "Outside";
    }
    // Only change code above this line
    return "Inside";
  }
  
  testLogicalOr(15);

//70

function testElse(val) {
    let result = "";
    // Only change code below this line
  
    if (val > 5) {
      result = "Bigger than 5";
    } else {
      result = "5 or Smaller";
    }
  
    // Only change code above this line
    return result;
  }
  
  testElse(4);

  //71

  function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    } else if (val < 5) {
      return "Smaller than 5";
    } else {
      return "Between 5 and 10";
    }
  
  }
  
  testElseIf(7);

  //72
  function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }
  
  orderMyLogic(7);

  //73
  function testSize(num) {
    // Only change code below this line
  if(num < 5) {
    return 'Tiny';
  } else if(num < 10) {
    return 'Small';
  } else if(num < 15) {
    return 'Medium';
  } else if(num < 20) {
    return 'Large';
  } else if(num >= 20) {
    return 'Huge'
  }
  
    return "Change Me";
    // Only change code above this line
  }
  
  testSize(7);

  //74
  const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if(strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if(strokes <= par - 1) {
    return names[2];
  } else if( strokes == par) {
    return names[3]
  } else if(strokes >= par + 3) {
    return names[6];
  } else if(strokes >= par + 2) {
    return names[5];
  } else if(strokes >= par + 1) {
    return names[4];
  }

  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);

//75
function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
  switch (val) {
    case 1:
    answer += 'alpha';
    break;
    case 2:
    answer += 'beta';
    break;
    case 3:
    answer += 'gamma';
    break;
    case 4:
    answer += 'delta';
    break;
  } 
  
  
    // Only change code above this line
    return answer;
  }
  
  caseInSwitch(1);

  // html 
 /*  <style>
  h4 {
    text-align: center;
    padding: 10px;
    background-color: rgba(45, 45, 45, 0.1)

  }
  p {
    text-align: justify;
  }
  .links {
    text-align: left;
    color: black;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
  .cardText {
    margin-bottom: 30px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Alphabet</h4>
      <hr>
      <p><em>Google was founded by Larry Page and Sergey Brin while they were <u>Ph.D. students</u> at <strong>Stanford University</strong>.</em></p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a><br><br>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div> */

//76

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
switch(val) {
  case 'a':
  answer = 'apple';
  break;
  case 'b': 
  answer = 'bird';
  break;
  case 'c':
  answer = 'cat';
  break;
  default:
  answer = 'stuff';
}


  // Only change code above this line
  return answer;
}

switchOfStuff(1);

// 77  

function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
switch(val) {
  case 1:
  case 2:
  case 3:
  answer = 'Low';
  break;
  case 4:
  case 5:
  case 6:
  answer = 'Mid';
  break;
  case 7:
  case 8:
  case 9:
  answer = 'High';
  break;


}
  // Only change code above this line
  return answer;
}

sequentialSizes(1);

// 78

function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case 'bob':
      answer = 'Marley';
      break;
    case 42:
      answer = 'The Answer';
      break;
    case 1:
      answer = 'There is no #1';
      break;
    case 99:
      answer = 'Missed me by this much!';
      break;
    case 7:
      answer = 'Ate Nine';
      break;
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);

//79 
