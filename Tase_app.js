/**
 * Take stocks Data from the Israeli stocks site
 *
 * @param {number} input The value to multiply.
 * @return The input multiplied by 2.
 * @customfunction
 */

function TASE_find_data(tase_struct) {
  // Import the funds data from https://www.tase.co.il/heb/marketdata/rawdata/pages/filedistribution.aspx
  //https://www.tase.co.il/_layouts/Tase/Public/TargetFolder/00241301.tas
  // link for full DB - https://www.tase.co.il/_layouts/Tase/Public/PackTarget/Full201704200.zip
  //var day_to_download = Validate_Tase_file();
  var day_to_download = 27
  var date_string=(day_to_download > 9 ? "" + day_to_download: "0" + day_to_download);
  
  
   if (tase_struct == undefined) {
     tase_struct="0024"
  }
  
  //Get the data 
  //https://www.tase.co.il/_layouts/Tase/Public/TargetFolder/00242001.tas
  var link = "https://www.tase.co.il/_layouts/Tase/Public/TargetFolder/" + tase_struct +date_string+ "01.tas";
  var response = UrlFetchApp.fetch(link);
  var data = response.getContentText();
  
  var rows = data.split('\n');
  //rows.unshift("Lemon","Pineapple")
  Logger.log(rows);
  
  var array = [];
  var Header_result = Parse_Tase_Struct(rows[0],"0024","1") 
  // Header
  array.push(["Date", "Version"]);
  array.push([Header_result.Date, Header_result.Version]);
  array.push([Header_result.Fund_ID, Header_result.Price]);
  
  //Parameters 
  var result = Parse_Tase_Struct(rows[1],"0024","1") 
  //return result;
  array.push(Object.keys(result));
  return array;
      //for ( var i in rows){
//    tmp = rows[i].split('\t'); 
    /* Get the range here */
  //  range.setValues([tmp]); 
  //}
  
  
  
  
  //for (var i = 0; i < entries.length; i++) {
    //var title = entries[i].getChild('title', atom).getText();
    //var date = entries[i].getChild('published', atom).getValue();
    //array.push([result.Fund_ID, result.Price]);
  //}
  
  /*
  var outerArray = [],
    thisValue = "",
    innerArray = [];

for (var key in result) {
  innerArray = []; //Reset on every loop
  thisValue = result[key];
  innerArray.push(thisValue);
  outerArray.push(innerArray);
};

var numberOfRowsToWrite = outerArray.length;

SpreadsheetApp
  .getActiveSheet()()
  .getRange(3, 4, numberOfRowsToWrite, 1)
  .setValues(outerArray);
  
  
  */
  
  
    //for ( var i in rows){
//    tmp = rows[i].split('\t'); 
    /* Get the range here */
  //  range.setValues([tmp]); 
  //}
  
  
  
  
/*  
  
   var ss = SpreadsheetApp.getActiveSpreadsheet();
 var sheet = ss.getSheets()[0];

 // The size of the two-dimensional array must match the size of the range.
 var values = [
   [ "2.000", "1,000,000", "$2.99" ]
 ];

 var range = sheet.getRange("B2:D2");
 range.setValues(values);
  */
}