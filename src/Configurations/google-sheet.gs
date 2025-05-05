// google script v3 deployed -Sajeethan-

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      throw new Error("No POST data received");
    }
    
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);
    
    if (!data.fname || !data.lname || !data.email) {
      throw new Error("Missing required fields");
    }
    
    sheet.appendRow([
      new Date(),
      data.name || '',
      data.email || '',
      data.phone || '',
      data.address || '',
      data.city || '',
      data.state || '',
      data.zip || '',
      data.schedule || '',
      useOfService.filter(i => i.value == data.useService)[0]?.name || '',
      data.message || ''
    ]);
    
    const output = ContentService.createTextOutput(
      JSON.stringify({ status: "success", message: "Data saved successfully" })
    );
    output.setMimeType(ContentService.MimeType.JSON);
    return output;
    
  } catch (error) {
    const output = ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: error.message })
    );
    output.setMimeType(ContentService.MimeType.JSON);
    return output;
  }
}

function doOptions(e) {
  const output = ContentService.createTextOutput('');
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}

function doGet(e) {
  const output = ContentService.createTextOutput('GET requests not supported');
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}


const useOfService = [
    {
        name: "Commercial Purpose",
        value: 1
    },
    {
        name: "Residential Cleaning",
        value: 2
    },
    {
        name: "Industrial Cleaning",
        value: 3
    },    
]



