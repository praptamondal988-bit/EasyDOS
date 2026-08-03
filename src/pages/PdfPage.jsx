import poxyBotLogo from "../assets/poxy-bot-logo.png";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { getPDFs } from "../services/googleSheet";

function PdfPage() {

  const {
    className,
    subjectName,
    chapterId
  } = useParams();

  const [pdf, setPdf] = useState(null);

  const [loading, setLoading] = useState(true);


  // ==========================================
  // LOAD PDF
  // ==========================================

  useEffect(() => {

    async function loadPDF() {

      try {

        const data = await getPDFs();

        console.log(
          "Current Page:",
          className,
          subjectName,
          chapterId
        );

        console.log(
          "All PDFs:",
          data
        );


        const foundPDF = data.find(
          (item) =>

            item.className
              ?.trim()
              .toLowerCase() ===
            className
              ?.trim()
              .toLowerCase()

            &&

            item.subject
              ?.trim()
              .toLowerCase() ===
            subjectName
              ?.trim()
              .toLowerCase()

            &&

            item.chapter
              ?.trim() ===
            chapterId
              ?.trim()
        );


        console.log(
          "Found PDF:",
          foundPDF
        );


        setPdf(
          foundPDF || null
        );


      } catch (error) {

        console.error(
          "PDF Loading Error:",
          error
        );

        setPdf(null);

      } finally {

        setLoading(false);

      }

    }


    loadPDF();

  }, [
    className,
    subjectName,
    chapterId
  ]);


  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {

    return (

      <div
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "100px"
        }}
      >

        <h2>
          Loading PDF...
        </h2>

      </div>

    );

  }


  // ==========================================
  // PDF NOT FOUND
  // ==========================================

  if (!pdf) {

    return (

      <div
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "100px"
        }}
      >

        <h2>
          📄 PDF Not Found
        </h2>

        <p
          style={{
            color: "#94a3b8"
          }}
        >
          এই Chapter-এর PDF এখনো যোগ করা হয়নি।
        </p>


        <Link
          to={`/class/${className}/${subjectName}`}
          style={{
            color: "#60a5fa",
            textDecoration: "none",
            fontSize: "18px",
            fontWeight: "600"
          }}
        >
          ← Back to {subjectName}
        </Link>

      </div>

    );

  }


  // ==========================================
  // PDF VIEWER
  // ==========================================

  return (

    <div
      style={{
        width: "95%",
        margin: "30px auto",
        color: "white"
      }}
    >


      {/* BACK BUTTON */}

      <Link
        to={`/class/${className}/${subjectName}`}
        style={{
          color: "#60a5fa",
          textDecoration: "none",
          fontSize: "18px",
          fontWeight: "600"
        }}
      >
        ← Back
      </Link>


      {/* TITLE */}

      <h1
        style={{
          margin: "20px 0"
        }}
      >
        📄 {pdf.title}
      </h1>


      {/* PDF VIEWER */}

      <div
        style={{
          borderRadius: "20px",
          overflow: "hidden",
          background: "#111827",
          boxShadow:
            "0 20px 50px rgba(0,0,0,.35)"
        }}
      >

        <iframe
          src={pdf.file}
          width="100%"
          height="900"
          title={pdf.title}
          style={{
            border: "none",
            display: "block"
          }}
        />

      </div>

    </div>

  );

}

export default PdfPage;