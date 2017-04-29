function Validate_Tase_file(date) {
  var d = new Date();
  //if (date !== undefined) {
  //}
  var day_of_the_month = d.getDate();
  var day_of_the_week = d.getDay(); //  (from 0 to 6) Sunday is 0, Monday is 1, and so on.
  var full_year = d.getFullYear();
  var month = d.getMonth()+1;
  var day_to_download;
  
  // Tase data only on week days
  switch(day_of_the_week) {
    case 6: // Saturday
        day_to_download = day_of_the_month-2;  
        break;
    case 5: // Friday 
        day_to_download = day_of_the_month-1;  
        break;
    default:
        day_to_download = day_of_the_month;  
  }
  // Validate data file
  var all_data_file 
  var link_verifed = false
  while (!link_verifed)  {
    var date_string=(day_to_download > 9 ? "" + day_to_download: "0" + day_to_download);
    all_data_file = "https://www.tase.co.il/_layouts/Tase/Public/PackTarget/Full"+ full_year +(month > 9 ? "" + month: "0" + month) +  date_string +"0.zip";
    link_verifed =check_url(all_data_file);
    day_to_download=day_to_download-1;
  }
  Logger.log(day_to_download+1);
  return day_to_download+1;
}
