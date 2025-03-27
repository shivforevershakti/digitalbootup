import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-blue-100 text-center px-6 md:px-12">
      <motion.h2 
        className="text-4xl font-bold text-blue-600"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        About Us
      </motion.h2>

      <div className="mt-6 max-w-4xl mx-auto">
        {[
          "Welcome to Digital Bootup, your one-stop solution for cutting-edge digital services. We specialize in digital marketing, video editing, graphic designing, and web and application development, helping businesses thrive in the digital world.",
          "Our expert team crafts tailored strategies to boost your online presence, engage your audience, and drive growth. Whether you need stunning visuals, seamless websites, or high-impact marketing campaigns, we’ve got you covered.",
          "Let’s elevate your brand with creativity, innovation, and results-driven solutions. Come meet our dedicated consultants, ready to assist you every step of the way.",
        ].map((text, index) => (
          <motion.p
            key={index}
            className="mt-4 text-gray-700 leading-relaxed text-lg"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {text}
          </motion.p>
        ))}
      </div>
    </section>
  );
};
