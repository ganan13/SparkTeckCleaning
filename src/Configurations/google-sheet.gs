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
      data.fname || '',
      data.lname || '',
      data.email || '',
      data.phone || '',
      cleaningServiceType.filter(i => i.value == data.serviceType)[0]?.name || '',
      useOfService.filter(i => i.value == data.useService)[0]?.name || '',
      purposeOfInquiry.filter(i => i.value == data.purpose)[0]?.name || '',
      data.siteLocation || '',
      data.promoCode || '',
      data.membershipNumber || '',
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

const cleaningServiceType = [
    {
        name: "Service type A",
        value: 1
    },
    {
        name: "Service type B",
        value: 2
    },
    {
        name: "Service type c",
        value: 3
    },
    {
        name: "Service type D",
        value: 4
    },
    {
        name: "Service type E",
        value: 5
    },
]

const useOfService = [
    {
        name: "Use type A",
        value: 1
    },
    {
        name: "Use type B",
        value: 2
    },
    {
        name: "Use type c",
        value: 3
    },
    {
        name: "Use type D",
        value: 4
    },
    {
        name: "Use type E",
        value: 5
    },
]

const purposeOfInquiry = [
    {
        name: "Inquiry type A",
        value: 1
    },
    {
        name: "Inquiry type B",
        value: 2
    },
    {
        name: "Inquiry type c",
        value: 3
    },
    {
        name: "Inquiry type D",
        value: 4
    },
    {
        name: "Inquiry type E",
        value: 5
    },
]

