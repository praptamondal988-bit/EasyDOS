// ==========================================
// EasyDOS Google Sheet Database
// Videos + PDFs
// ==========================================


// ==========================================
// VIDEOS CSV
// ==========================================

const VIDEO_CSV =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQtM9NfHU4WN9hS97s49_j-9bQ9kC4XwPnpJt3EnmyVAOicQ9YnHB0oiX4FaKf0HcIzsP0i4P248wJW/pub?output=csv";


// ==========================================
// PDFS CSV
// ==========================================

const PDF_CSV =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQtM9NfHU4WN9hS97s49_j-9bQ9kC4XwPnpJt3EnmyVAOicQ9YnHB0oiX4FaKf0HcIzsP0i4P248wJW/pub?gid=1320108543&single=true&output=csv";


// ==========================================
// GET VIDEOS
// ==========================================

export async function getVideos() {

  try {

    const response = await fetch(VIDEO_CSV);

    if (!response.ok) {
      throw new Error("Failed to fetch Videos");
    }

    const text = await response.text();

    const rows = text
      .trim()
      .split("\n");

    const data = rows
      .slice(1)
      .map((row) => {

        const cols = row
          .split(",")
          .map((item) =>
            item
              .replace(/^"|"$/g, "")
              .trim()
          );

        return {
          className: cols[0],
          subject: cols[1],
          chapter: cols[2],
          title: cols[3],
          teacher: cols[4],
          duration: cols[5],
          youtubeId: cols[6]
        };

      })
      .filter(
        (video) =>
          video.className &&
          video.subject &&
          video.chapter &&
          video.youtubeId
      );

    console.log("Videos Loaded:", data);

    return data;

  } catch (error) {

    console.error(
      "Video Loading Error:",
      error
    );

    return [];

  }

}


// ==========================================
// GET PDFS
// ==========================================

export async function getPDFs() {

  try {

    const response = await fetch(PDF_CSV);

    if (!response.ok) {
      throw new Error("Failed to fetch PDFs");
    }

    const text = await response.text();

    const rows = text
      .trim()
      .split("\n");

    const data = rows
      .slice(1)
      .map((row) => {

        const cols = row
          .split(",")
          .map((item) =>
            item
              .replace(/^"|"$/g, "")
              .trim()
          );

        return {
          className: cols[0],
          subject: cols[1],
          chapter: cols[2],
          title: cols[3],
          file: cols[4]
        };

      })
      .filter(
        (pdf) =>
          pdf.className &&
          pdf.subject &&
          pdf.chapter &&
          pdf.file
      );

    console.log("PDFs Loaded:", data);

    return data;

  } catch (error) {

    console.error(
      "PDF Loading Error:",
      error
    );

    return [];

  }

}