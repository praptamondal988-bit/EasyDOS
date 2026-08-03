// ======================================================
// EasyDOS Google Sheet Data Connection
// ======================================================

const GOOGLE_SHEET_CSV_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQtM9NfHU4WN9hS97s49_j-9bQ9kC4XwPnpJt3EnmyVAOicQ9YnHB0oiX4FaKf0HcIzsP0i4P248wJW/pub?output=csv";


// ======================================================
// CSV Parser
// ======================================================

function parseCSV(csv) {
  const rows = [];
  let row = [];
  let value = "";
  let insideQuotes = false;

  for (let i = 0; i < csv.length; i++) {
    const char = csv[i];
    const nextChar = csv[i + 1];

    if (char === '"' && insideQuotes && nextChar === '"') {
      value += '"';
      i++;
    }

    else if (char === '"') {
      insideQuotes = !insideQuotes;
    }

    else if (char === "," && !insideQuotes) {
      row.push(value.trim());
      value = "";
    }

    else if (
      (char === "\n" || char === "\r") &&
      !insideQuotes
    ) {
      if (char === "\r" && nextChar === "\n") {
        i++;
      }

      row.push(value.trim());

      if (row.some((item) => item !== "")) {
        rows.push(row);
      }

      row = [];
      value = "";
    }

    else {
      value += char;
    }
  }


  // Last value
  if (value || row.length > 0) {
    row.push(value.trim());

    if (row.some((item) => item !== "")) {
      rows.push(row);
    }
  }


  if (rows.length === 0) {
    return [];
  }


  // First row = headers
  const headers = rows[0].map((header) =>
    header.trim()
  );


  // Convert rows into objects
  return rows
    .slice(1)
    .map((row) => {

      const item = {};

      headers.forEach((header, index) => {
        item[header] = row[index] || "";
      });

      return item;

    });
}


// ======================================================
// Fetch Google Sheet Data
// ======================================================

export async function getGoogleSheetData() {

  try {

    const response = await fetch(
      GOOGLE_SHEET_CSV_URL
    );


    if (!response.ok) {
      throw new Error(
        `Google Sheet request failed: ${response.status}`
      );
    }


    const csv = await response.text();


    const data = parseCSV(csv);


    console.log(
      "EasyDOS Google Sheet Data:",
      data
    );


    return data;

  }

  catch (error) {

    console.error(
      "Google Sheet Connection Error:",
      error
    );


    return [];

  }

}


// ======================================================
// Export URL
// ======================================================

export {
  GOOGLE_SHEET_CSV_URL
};