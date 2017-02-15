
module.exports = function (timestamp) {
  // default unix/natural in case nothing pass flux control
  let result = {
    unix: null,
    natural: null
  }
  let date;

  // parse to int the timestamp from url and convert to Date
  if(!isNaN(parseInt(timestamp))) {
    date = new Date(parseInt(timestamp)); 
  } else {
    date = new Date(timestamp);
  }

  // insert date into json through getTime and call func to get natural date

  if(!isNaN(date.getTime())) {
    result.unix = date.getTime();
    result.natural = getNatural(date);
  }
  
  // return final json to route /:query
  return result;
}

function getNatural(date){
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September', 'October', 'November', 'December'];
  
  // return string for month/date/year and insert into natural json 
  return months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
}


