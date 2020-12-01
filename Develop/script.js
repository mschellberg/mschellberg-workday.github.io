// Current Date In Header
function currentDate() {
    var date = new Date().toDateString();
    document.getElementById('currentDay').innerHTML = date;
};
// Setting Past, Present, Future Colors
function setBoxes() {
    var date = new Date();

    var hours =  [9, 10 ,11, 12, 13, 14, 15, 16, 17];
        for(idx in hours) {
            var hour = hours[idx];
    var idName = "#row-" + hour;
    var className = " ";
    
    if(hour == date.getHours()) {
        className = "present";
    } else if(hour < date.getHours())
        className = "past";
    else {
        className = "future";
    } 
    $( idName ).toggleClass(className);
    var events = getEvent(hour);
    $(idName).val(events);
}
}

function getEvent(hour) {
  var myStorage=window.localStorage;
  var idName = "#row-" + hour;
  var events = myStorage.getItem(hour); 
    if(events != null) {
        return events;
    } else {
        return "";
    }

};

function saveEvent(hour) {
    var myStorage=window.localStorage;
  var idName = "#row-" + hour;
  var textArea = document.getElementById(idName);
  var events = $( idName).val();
    myStorage.setItem(hour, events); 
};


// Call Functions
currentDate();
setBoxes();

