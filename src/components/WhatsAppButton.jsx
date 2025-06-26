// "use client"; 
import React, { useState, useEffect } from "react";

const WhatsAppButton = () => {
  const [showChatBubble, setShowChatBubble] = useState(true);

  // Close the bubble after a few seconds or on scroll
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChatBubble(false);
    }, 8000); // Hide after 8 seconds

    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Hide after scrolling down 50px
        setShowChatBubble(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        // Using global for fixed position and animations
        .whatsapp-container {
          position: fixed;
          bottom: 75px;
          right: 20px;
          z-index: 1000;
          font-family: Arial, sans-serif;
        }

        .chat-bubble {
          background: white;
          color: #1c1c1c;
          padding: 12px 16px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          margin-bottom: 10px;
          max-width: 240px;
          animation: fadeInUp 0.5s ease-out;
          position: relative;
        }

        .chat-bubble .close-btn {
          position: absolute;
          top: 6px;
          right: 10px;
          font-size: 14px;
          color: #999;
          cursor: pointer;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .whatsapp-float {
          height: 60px;
          width: 60px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          animation: pulse 2s infinite;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .whatsapp-float:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.6);
          }
          70% {
            transform: scale(1.05);
            box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }
      `}</style>

      <div className="whatsapp-container">
        {showChatBubble && (
          <div className="chat-bubble">
            Hi there! How can we help you?
            <br />
            Tap here to start chat with us.
            <span
              className="close-btn"
              onClick={() => setShowChatBubble(false)}
            >
              ×
            </span>
          </div>
        )}
        <a
          href="https://wa.me/+919327777854"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/color/96/000000/whatsapp--v1.png"
            alt="WhatsApp Chat"
            className="whatsapp-float"
            loading="lazy"
          />
        </a>
      </div>
    </>
  );
};

export default WhatsAppButton;
