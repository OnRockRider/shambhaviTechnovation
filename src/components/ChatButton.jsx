import { MessageCircle, X } from "lucide-react";
import "../css/Chat.css";
import { useState, useEffect, useRef } from "react";

function ChatButton() {
  const [open, setOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello 👋 Welcome to Shambhavi Technovation.",
    },
  ]);

  const [input, setInput] = useState("");

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const getReply = (message) => {
    const msg = message.toLowerCase();

    const greetings = [
      "hi",
      "hello",
      "hey",
      "good morning",
      "good afternoon",
      "good evening",
    ];

    if (greetings.some((word) => msg.includes(word))) {
      return "Hello! 👋 How can I help you today?";
    }

    if (
      msg.includes("who are you") ||
      msg.includes("what is this")
    ) {
      return "I am Shambhavi AI, your virtual assistant for all things related to Shambhavi Technovation.";
    }

    if (msg.includes("services")) {
      return "We provide Web Development, Mobile App Development, UI/UX Design and SEO services.";
    }

    if (msg.includes("contact")) {
      return "You can contact us through the Contact section on our website.";
    }

    if (/^\d+$/.test(msg)) {
      return "Are you looking for our contact number? Please visit the Contact section of our website.";
    }

    if (msg.includes("react")) {
      return "Yes, our team develops modern React applications.";
    }

    if (
      msg.includes("price") ||
      msg.includes("cost")
    ) {
      return "Project cost depends on requirements. Please contact us for a quotation.";
    }

    if (msg.includes("website")) {
      return "Yes, we develop modern and responsive websites.";
    }

    if (msg.includes("mobile app")) {
      return "We develop Android and cross-platform mobile applications.";
    }

    if (msg.includes("portfolio")) {
      return "You can explore our projects in the Featured Projects section.";
    }

    if (msg.includes("team")) {
      return "We have experienced developers, designers and consultants.";
    }

    if (msg.includes("location")) {
      return "Shambhavi Technovation is based in Surat, Gujarat.";
    }

    return "Thank you for contacting Shambhavi Technovation. How can I help you?";
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = input;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userMessage,
      },
    ]);

    setInput("");

    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: getReply(userMessage),
        },
      ]);

      setIsTyping(false);
    }, 1200);
  };

  return (
    <>
      <button
        type="button"
        className="chat-btn"
        aria-label={open ? "Close chat" : "Open chat"}
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {open && (
        <div className="chat-box">
          <div className="chat-header">
            Shambhavi AI
          </div>

          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.sender === "bot"
                    ? "bot-msg"
                    : "user-msg"
                }
              >
                {msg.text}
              </div>
            ))}

            {isTyping && (
              <div className="bot-msg typing">
                <span>.</span>
                <span>.</span>
                <span>.</span>
              </div>
            )}

            <div ref={messagesEndRef}></div>
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
              onKeyDown={(e) =>
                e.key === "Enter" && sendMessage()
              }
            />

            <button onClick={sendMessage}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ChatButton;