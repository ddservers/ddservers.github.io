function loadData() {
  var spreadsheet = SpreadsheetApp.openById("0Aq4s9w_HxMs7dFVuQ0hDaWl1VVZsQ1RBTVZqM0dHLXc"); // replace with your sheet id
  var html = spreadsheet.getRange("A1").getValue(); // My html is in cell A1
  return HtmlService.createHtmlOutput(html);
}