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

   // Greetings
if (greetings.some((word) => msg.includes(word))) {
  return "Hello! 👋 Welcome to Shambhavi Technovation. We're here to help with website development, software solutions, mobile apps, and digital services. How may I assist you today?";
}
if (
  msg.includes("who are you") ||
  msg.includes("about company") ||
  msg.includes("about shambhavi") ||
  msg.includes("what is this")
) {
  return "Shambhavi Technovation is a technology company specializing in custom website development, software solutions, mobile applications, UI/UX design, and digital transformation services. We help businesses build scalable and modern digital products. For more details, please contact us at (+91) 91047 11572.";
}

// Services
if (
  msg.includes("services") ||
  msg.includes("what do you do")
) {
  return "Our services include Website Development, Custom Software Development, Mobile App Development, UI/UX Design, E-Commerce Solutions, SEO, and Digital Marketing. We provide end-to-end solutions tailored to business needs. For a detailed consultation, call us at (+91) 91047 11572.";
}

// Software Development
if (
  msg.includes("software") ||
  msg.includes("custom software")
) {
  return "We develop custom software solutions tailored to your business requirements, including management systems, CRM solutions, ERP platforms, and automation tools.";
}

// Mobile Apps
if (
  msg.includes("mobile app") ||
  msg.includes("android") ||
  msg.includes("ios")
) {
  return "We create high-performance mobile applications for Android and cross-platform environments with a focus on user experience, performance, and scalability.";
}

// UI/UX
if (
  msg.includes("ui") ||
  msg.includes("ux") ||
  msg.includes("design")
) {
  return "Our UI/UX design process focuses on creating visually appealing, intuitive, and user-friendly interfaces that improve customer engagement and business conversions.";
}

// Project Duration
if (
  msg.includes("how long") ||
  msg.includes("timeline") ||
  msg.includes("time required")
) {
  return "Project timelines depend on complexity. A basic website usually takes 1-2 weeks, while custom software and advanced web applications may require several weeks or months. Contact us for an accurate estimate.";
}

// Pricing
if (
  msg.includes("price") ||
  msg.includes("cost") ||
  msg.includes("quotation")
) {
  return "Project pricing depends on the scope, features, and complexity of the solution. We would be happy to discuss your requirements and provide a customized quotation. Call us at (+91) 91047 11572.";
}

// Team
if (msg.includes("team")) {
  return "Our team consists of experienced developers, designers, and technology consultants dedicated to delivering high-quality digital solutions.";
}

// Portfolio
if (
  msg.includes("portfolio") ||
  msg.includes("projects")
) {
  return "You can explore our portfolio section to view recent projects, software solutions, and websites developed by our team.";
}

// Office Hours
if (
  msg.includes("timing") ||
  msg.includes("office hours") ||
  msg.includes("opening hours")
) {
  return "Our office is open Monday to Saturday from 10:00 AM to 7:00 PM. We are available during these hours to assist with inquiries and project discussions.";
}

// Contact
if (
  msg.includes("contact") ||
  msg.includes("phone") ||
  msg.includes("email")
) {
  return "📞 Phone: (+91) 91047 11572\n📧 Email: info@shambhavitechnovation.com\n🕒 Office Hours: 10:00 AM - 7:00 PM\n\nFeel free to contact us for project discussions or support.";
}

// Location
if (
  msg.includes("location") ||
  msg.includes("address") ||
  msg.includes("where are you")
) {
  return "Shambhavi Technovation is located in Ahemdabad, Gujarat, India. Please contact us for exact office details or directions.";
}

// Number Input
if (/^\d+$/.test(msg)) {
  return "It looks like you've entered a number. If you're looking for our contact details, you can reach us at (+91) 9104711572.";
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
        style={{ zIndex: 99999 }}
        aria-label={open ? "Close chat" : "Open chat"}
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {open && (
        <div className="chat-box" style={{ zIndex: 99998 }}>
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
