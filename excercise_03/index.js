var day;

// function isCheckDays (day){
//      if(day){
//           if(is_string(day)){
//                day = day.toLowerCase();
//                if(day === 'monday'){
//                     return true;
//                }else if (day ==='saturday'){
//                     return true;
//                } else if (day === 'wednesday'){
//                     return true;
//                } else if (day === 'sunday') {
//                     return true;
//                } else {
//                     return false;
//                }
//           } else{
//                return false;
//           }
//      } else {
//           return false;
//      }
// }

//idea 1
function isCheckDays1(day) {
  if (day) {
    //in php: is_string()
    //in js: toString()

    if (toString(day)) {
      day = day.toLowerCase();
      switch (day) {
        case "monday":
          return true;
        case "wednesday":
          return true;
        case "saturday":
          return true;
        case "sunday":
          return true;
        default:
          return false;
      }
    }
  }
}
// console.log(isCheckDays1('123'));

// idea 2
function isCheckDays2(day) {
  const checkday = {
    monday: true,
    wednesday: true,
    saturday: true,
    sunday: true,
  };
  
  if (day) {
    if (toString(day)) {
      return checkday[day.toLowerCase()] ?? false;
    }
  } else {
    return false;
  }
}
console.log(isCheckDays2('sunday'));

