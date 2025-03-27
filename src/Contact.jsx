import { motion } from "framer-motion";
import { FaEnvelope, FaWhatsapp, FaSkype, FaTelegram } from "react-icons/fa";

const contactOptions = [
  {
    platform: "Email",
    icon: <FaEnvelope className="text-red-500" />,
    link: "mailto:your-email@example.com",
    label: "Send an Email",
  },
  {
    platform: "WhatsApp",
    icon: <FaWhatsapp className="text-green-500" />,
    link: "https://wa.me/your-number",
    label: "Chat on WhatsApp",
  },
  {
    platform: "Skype",
    icon: <FaSkype className="text-blue-500" />,
    link: "skype:your-skype-id?chat",
    label: "Start a Skype Chat",
  },
  {
    platform: "Telegram",
    icon: <FaTelegram className="text-blue-400" />,
    link: "https://t.me/your-telegram-id",
    label: "Message on Telegram",
  },
];

export const Contact = () => {
  return (
    // <section id="contact" className="h-screen flex items-center justify-center ">

    <section id="contact" className="py-20 bg-red-100">
      <div className="container mx-auto text-center">
        <motion.h2 
          className="text-3xl font-bold text-blue-600"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Contact Us
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
          {contactOptions.map((option, index) => (
            <motion.a
              key={index}
              href={option.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center transition transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="text-5xl">{option.icon}</div>
              <h3 className="text-xl font-semibold mt-4">{option.platform}</h3>
              <p className="text-gray-600 mt-2">{option.label}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
