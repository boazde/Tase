/**
 * Take stocks Data from the Israeli stocks site
 *
 */
function TASE_DATA(tase_struct) {
  // Import the funds data from https://www.tase.co.il/heb/marketdata/rawdata/pages/filedistribution.aspx
  //https://www.tase.co.il/_layouts/Tase/Public/TargetFolder/00241301.tas
  // link for full DB - https://www.tase.co.il/_layouts/Tase/Public/PackTarget/Full201704200.zip
   if (tase_struct == undefined) {
     tase_struct="0024"
  }
  day_to_download = Validate_Tase_file();
  var date_string=(day_to_download > 9 ? "" + day_to_download: "0" + day_to_download);
  
  //Get the data 
  //https://www.tase.co.il/_layouts/Tase/Public/TargetFolder/00242001.tas
  var link = "https://www.tase.co.il/_layouts/Tase/Public/TargetFolder/" + tase_struct +date_string+ "01.tas";
  var response = UrlFetchApp.fetch(link);
  var data = response.getContentText();
  
  var rows = data.split('\n');
  Logger.log(rows);
  return rows;
  
}