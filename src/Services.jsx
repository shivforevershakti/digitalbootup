import { motion } from "framer-motion";

// Service data
const services = [
  {
    title: "Web & App Development",
    description: "We build high-performance websites and applications tailored to your business needs.",
    icon: "🌐",
  },
  {
    title: "Graphics Designing",
    description: "Creative and eye-catching graphic designs to elevate your brand’s visual identity.",
    icon: "🎨",
  },
  {
    title: "Video Editing",
    description: "Professional video editing services to create engaging and high-quality content.",
    icon: "🎥",
  },
  {
    title: "Performance Marketing",
    description: "Boost your business with data-driven marketing strategies for maximum ROI.",
    icon: "📈",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <motion.h2 
          className="text-3xl font-bold text-blue-600"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="text-5xl">{service.icon}</div>
              <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
