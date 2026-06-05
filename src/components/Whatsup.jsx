import React from "react";
import { motion } from "framer-motion";

const WhatsAppFloat = () => {
    const phoneNumber = "919104711572";
    const message = "Hi! I'd like to know more about your services.";
    // const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={url}
            target="_self"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: 1,
                scale: 1,
                y: [0, -10, 0],
            }}
            transition={{
                opacity: { duration: 0.4 },
                scale: { duration: 0.4 },
                y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-3 left-6 z-50"
            aria-label="Chat on WhatsApp"
        >
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-12 h-12"
            />
        </motion.a>
    );
};

export default WhatsAppFloat;