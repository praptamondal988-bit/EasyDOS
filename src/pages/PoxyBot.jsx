import { useState } from "react";
import { Link } from "react-router-dom";
import poxyBotLogo from "../assets/poxy-bot-logo.png";
import "./PoxyBot.css";

function PoxyBot() {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "bot",
      text:
        "Hi! I'm Poxy Bot 👋\nYour AI companion inside EasyDOS. What would you like to talk about?"
    }
  ]);

  const [sending, setSending] = useState(false);


  // ========================================
  // SEND MESSAGE
  // ========================================

  const sendMessage = async () => {
    const text = message.trim();

    // Empty message prevent
    if (!text || sending) {
      return;
    }


    // ========================================
    // SHOW USER MESSAGE
    // ========================================

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        role: "user",
        text: text
      }
    ]);


    // Clear input

    setMessage("");


    // Start loading

    setSending(true);


    try {

      // ========================================
      // VITE PROXY REQUEST
      // ========================================

      const response = await fetch(
        "/api/chat",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            message: text
          })
        }
      );


      // Get response

      const data = await response.json();


      console.log(
        "Poxy Bot response:",
        data
      );


      // Check response

      if (!response.ok) {

        throw new Error(
          data.error ||
          `Server error: ${response.status}`
        );

      }


      // ========================================
      // SHOW BOT RESPONSE
      // ========================================

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "bot",
          text:
            data.reply ||
            "Poxy Bot kono reply dite pareni 😕"
        }
      ]);


    } catch (error) {

      console.error(
        "POXY BOT CONNECTION ERROR:",
        error
      );


      // ========================================
      // ERROR MESSAGE
      // ========================================

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "bot",
          text:
            "Sorry 😕 Poxy Bot server-er sathe connect korte parchi na."
        }
      ]);


    } finally {

      // Stop loading

      setSending(false);

    }

  };


  // ========================================
  // ENTER KEY
  // ========================================

  const handleKeyDown = (e) => {

    if (
      e.key === "Enter" &&
      !e.shiftKey
    ) {

      e.preventDefault();

      sendMessage();

    }

  };


  // ========================================
  // NEW CHAT
  // ========================================

  const newChat = () => {

    setMessages([
      {
        id: Date.now(),
        role: "bot",
        text:
          "New chat started! 👋 What would you like to talk about?"
      }
    ]);

    setMessage("");

  };


  // ========================================
  // QUICK PROMPT
  // ========================================

  const usePrompt = (text) => {

    setMessage(text);

  };


  // ========================================
  // PAGE
  // ========================================

  return (

    <div className="poxybot-page">


      {/* ========================================
          NAVBAR
      ======================================== */}

      <nav className="poxybot-navbar">


        {/* BACK TO EASYDOS */}

        <Link
          to="/"
          className="poxybot-back"
        >

          <span>
            ←
          </span>

          <span>
            EasyDOS
          </span>

        </Link>


        {/* POXY BRAND */}

        <div className="poxybot-brand">


          <img
            src={poxyBotLogo}
            alt="Poxy Bot"
          />


          <div>

            <strong>
              Poxy Bot
            </strong>


            <small>

              <span className="poxybot-online-dot"></span>

              AI Companion

            </small>

          </div>


        </div>


        {/* NEW CHAT */}

        <button
          className="poxybot-new-chat"
          onClick={newChat}
        >

          <span>
            ＋
          </span>

          New Chat

        </button>


      </nav>


      {/* ========================================
          CHAT AREA
      ======================================== */}

      <main className="poxybot-chat-area">


        {/* ========================================
            WELCOME SCREEN
        ======================================== */}

        {messages.length === 1 && (

          <section className="poxybot-welcome">


            {/* POXY LOGO */}

            <div className="poxybot-hero-logo">

              <img
                src={poxyBotLogo}
                alt="Poxy Bot"
              />

            </div>


            {/* TITLE */}

            <div className="poxybot-title">

              <h1>

                Meet{" "}

                <span>
                  Poxy Bot
                </span>

              </h1>


              <p>

                Your friendly AI companion
                inside EasyDOS.

                <br />

                Study, chat, explore,
                or just have fun.

              </p>

            </div>


            {/* ========================================
                QUICK PROMPTS
            ======================================== */}

            <div className="poxybot-prompts">


              {/* INTERESTING FACT */}

              <button
                onClick={() =>
                  usePrompt(
                    "Amake ekta interesting fact bolo"
                  )
                }
              >

                <span>
                  💡
                </span>


                <div>

                  <strong>
                    Tell me something
                  </strong>


                  <small>
                    Give me an interesting fact
                  </small>

                </div>


              </button>


              {/* CASUAL CHAT */}

              <button
                onClick={() =>
                  usePrompt(
                    "Amar sathe ektu golpo koro"
                  )
                }
              >

                <span>
                  💬
                </span>


                <div>

                  <strong>
                    Let's chat
                  </strong>


                  <small>
                    Have a casual conversation
                  </small>

                </div>


              </button>


              {/* RIDDLE */}

              <button
                onClick={() =>
                  usePrompt(
                    "Amake ekta interesting riddle dao"
                  )
                }
              >

                <span>
                  🧩
                </span>


                <div>

                  <strong>
                    Give me a riddle
                  </strong>


                  <small>
                    Challenge my brain
                  </small>

                </div>


              </button>


              {/* STUDY HELP */}

              <button
                onClick={() =>
                  usePrompt(
                    "Amake ekta difficult topic easy kore bujhao"
                  )
                }
              >

                <span>
                  📚
                </span>


                <div>

                  <strong>
                    Help me study
                  </strong>


                  <small>
                    Explain something simply
                  </small>

                </div>


              </button>


            </div>


          </section>

        )}


        {/* ========================================
            MESSAGES
        ======================================== */}

        <section className="poxybot-messages">


          {messages.map((msg) => (


            <div
              key={msg.id}
              className={`poxybot-message-row ${
                msg.role === "user"
                  ? "poxybot-user-row"
                  : "poxybot-bot-row"
              }`}
            >


              {/* BOT AVATAR */}

              {msg.role === "bot" && (

                <div className="poxybot-avatar">

                  <img
                    src={poxyBotLogo}
                    alt="Poxy Bot"
                  />

                </div>

              )}


              {/* MESSAGE */}

              <div
                className={`poxybot-message ${
                  msg.role === "user"
                    ? "poxybot-user-message"
                    : "poxybot-bot-message"
                }`}
              >

                {msg.text}

              </div>


            </div>


          ))}


          {/* ========================================
              THINKING
          ======================================== */}

          {sending && (

            <div className="poxybot-message-row">


              <div className="poxybot-avatar">

                <img
                  src={poxyBotLogo}
                  alt="Poxy Bot"
                />

              </div>


              <div className="poxybot-message poxybot-bot-message">

                Poxy Bot is thinking... 🤔

              </div>


            </div>

          )}


        </section>


      </main>


      {/* ========================================
          INPUT AREA
      ======================================== */}

      <footer className="poxybot-input-area">


        <div className="poxybot-input-box">


          <textarea
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            onKeyDown={handleKeyDown}
            placeholder="Ask Poxy anything..."
            rows="1"
          />


          <button
            className="poxybot-send"
            onClick={sendMessage}
            disabled={
              !message.trim() ||
              sending
            }
          >

            <span>
              ➤
            </span>

          </button>


        </div>


        <p className="poxybot-note">

          Poxy Bot can make mistakes.
          Check important information.

        </p>


      </footer>


    </div>

  );

}

export default PoxyBot;