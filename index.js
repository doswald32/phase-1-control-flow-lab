function scuberGreetingForFeet(feet){
  let replyOne = 'This one is on me!';
  let replyTwo = 'That will be twenty bucks.';
  let replyThree = 'I will gladly take your thirty bucks.';
  let replyFour = 'No can do.';
  if(feet <=400) {
    return replyOne;
  } else if(feet >=400 && feet <=2000) {
    return replyTwo;
  } else if(feet > 2000 && feet <= 2500) {
    return replyThree;
  } else if(feet >2500) {
    return replyFour;
  }
}

function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  let tipResponse;
  switch (tip) {
    case tip = 'generous':
      return tipResponse = 'Thank you so much.';
      break;
    case tip = 'not as generous':
      return tipResponse = 'Thank you.';
      break;
    default:
      return tipResponse = 'Bye.';
  }
}
