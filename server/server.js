import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();


// ========================================
// CORS
// Development / Codespaces
// ========================================

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    credentials: false
  })
);


// ========================================
// CORS
// Development / Codespaces
// ========================================

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
    credentials: false
  })
);


// ========================================
// JSON BODY
// ========================================

app.use(express.json());


// ========================================
// HOME
// ========================================

app.get("/", (req, res) => {

  res.json({
    message: "Poxy Bot server is running 🤖"
  });

});


// ========================================
// API TEST
// ========================================

app.get("/api/test", (req, res) => {

  res.json({
    success: true,
    message: "Poxy API connection is working! 🤖"
  });

});


// ========================================
// CHAT API
// ========================================

app.post("/api/chat", async (req, res) => {

  try {

    const { message } = req.body;


    if (
      !message ||
      !message.trim()
    ) {

      return res.status(400).json({
        error: "Message is required"
      });

    }


    console.log(
      "User message:",
      message
    );


    // Temporary reply
    // Real AI will be connected later

    return res.json({

      reply:
        "Poxy Bot AI connection is almost ready! 🤖"

    });


  } catch (error) {

    console.error(
      "Poxy Bot Error:",
      error
    );


    return res.status(500).json({

      error:
        "Something went wrong"

    });

  }

});


// ========================================
// 404
// ========================================

app.use(
  (req, res) => {

    res.status(404).json({

      error:
        "Route not found"

    });

  }
);


// ========================================
// ERROR HANDLER
// ========================================

app.use(
  (error, req, res, next) => {

    console.error(
      "Server Error:",
      error
    );


    res.status(500).json({

      error:
        error.message ||
        "Internal server error"

    });

  }
);


// ========================================
// START SERVER
// ========================================

const PORT = 3001;

app.listen(
  PORT,
  () => {

    console.log(
      `🤖 Poxy Bot server running on http://localhost:${PORT}`
    );

  }
);