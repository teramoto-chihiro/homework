ffunction get_achievement(points){
  let sum = 0;
  for(let i=0; i<number; i++){
    sum += points[i];
  }
  if (sum>=number*100*0.8){
    return "A";
  }
  else if (sum>=number*100*0.6){
    return "B";
  }
  else if (sum>=number*100*0.4){
    return "C";
  }
  else {
    return "D";
  }
}
function get_pass_or_failure(points){
  let judge = "合格";
  for(let i=0; i<number; i++){
    if(points[i]<60){
      judge= "不合格";
      break;
    }
  }
  return judge;
}
