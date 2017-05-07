
var counting=0;
var dt = new Date();
var minutes = dt.getMinutes();
var minutes_st ="00";
if(minutes<10){
  minutes_st="0"+minutes;
}
else{
  minutes_st=minutes;
}
var time = dt.getHours() + ":" + minutes_st;
var preset_work_time = 1500;
var work_time = preset_work_time;
var preset_break_time = 300;
var break_time = preset_break_time
var time_remaining = work_time;
$(document).ready(function(){
  console.log("jquery is running");
  interval_time=setInterval(function(){
    $("#current_time_number").text(time);
  }, 1000);

  $("#work_time_number").text(seconds_to_string(preset_work_time));
  $("#break_time_number").text(seconds_to_string(preset_break_time));
  $("#time_remaining p").text(seconds_to_string(time_remaining));

});
$( ".sm_display_box" ).on( "click", function() {
  alert("You clicked on "+this.id);
});

$( "#start_button").on( "click", function() {
  if(counting===0){
    counting=1;
    interval_count_down=setInterval(function(){
    time_remaining=time_remaining-1;
    $("#time_remaining p").text(seconds_to_string(time_remaining));
  }, 1000);}
});

$( "#stop_button").on( "click", function() {
  if(counting===1){
  counting=0;
  time_remaining = work_time;
  clearInterval(interval_count_down);
  $("#time_remaining p").text(seconds_to_string(work_time));}
  });




function seconds_to_string(seconds){
  //convert_seconds_minutes converts seconds to minutes
  var convert_seconds_minutes = seconds/60;
  //convert_minutes_hours converts seconds to minutes
  var convert_minutes_hours = Math.floor(convert_seconds_minutes%60);
  //finds the minute in the hour
  var minutes_of_hour = Math.floor(convert_seconds_minutes/60);
  var formatted_hours="";
  var formatted_minutes="";
  var formatted_seconds="";
  //format Hours
  if(minutes_of_hour<10){
    formatted_hours = "0"+minutes_of_hour;
  }
  else{
    formatted_hours = ""+minutes_of_hour;
  }
  //format minutes
  if(convert_minutes_hours<10){
    formatted_minutes = "0"+convert_minutes_hours;
  }
  else{
    formatted_minutes = ""+convert_minutes_hours;
  }
  //format seconds
  if((seconds%60)<10){
    formatted_seconds = "0"+seconds%60;
  }
  else{
    formatted_seconds = ""+seconds%60;
  }

  if(minutes_of_hour>0){
    return formatted_hours+":"+formatted_minutes+":"+formatted_seconds;
  }
  else{
    return formatted_minutes+":"+formatted_seconds;
  }

}
