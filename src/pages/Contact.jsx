import { useState } from "react";
import SectionWrapper from "../components/SectionWrapper";
import Button from "../components/Button";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is the placeholder for EmailJS integration.
    // Replace this logic with your actual EmailJS send function:
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')
    console.log("Form Submitted (Placeholder):", formData);
    alert("Thank you for your message! (Form submission is simulated.)");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactMethods = [
    {
      icon: FaEnvelope,
      label: "Email Me",
      value: "sejwanilakshen@gmail.com",
      href: "mailto:sejwanilakshen@gmail.com",
    },
    {
      icon: FaLinkedinIn,
      label: "Connect on LinkedIn",
      value: "@yourprofile",
      href: "https://linkedin.com/in/yourprofile",
    },
    {
      icon: FaGithub,
      label: "View My Code",
      value: "@yourusername",
      href: "https://github.com/yourusername",
    },
  ];

  return (
    <SectionWrapper id="contact" title="Get In Touch">
      <div className="grid md:grid-cols-3 gap-12">
        {/* Contact Form */}
        <motion.div
          className="md:col-span-2 bg-dark-card p-8 rounded-xl shadow-2xl border border-primary/20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-3 bg-dark-bg border border-gray-700 rounded-lg focus:border-primary focus:outline-none text-white"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-3 bg-dark-bg border border-gray-700 rounded-lg focus:border-primary focus:outline-none text-white"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="6"
                required
                className="w-full p-3 bg-dark-bg border border-gray-700 rounded-lg focus:border-primary focus:outline-none text-white"
              ></textarea>
            </div>
            <Button type="submit" variant="primary">
              Send Message
            </Button>
          </form>
        </motion.div>

        {/* Direct Contact Links */}
        <motion.div
          className="md:col-span-1 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start p-4 bg-dark-card rounded-xl border border-primary/10 transition-colors duration-300 hover:border-primary/50 group"
              whileHover={{ x: 5 }}
            >
              <div className="text-2xl text-primary mr-4 group-hover:scale-110 transition-transform">
                <method.icon />
              </div>
              <div>
                <p className="text-gray-400 text-sm">{method.label}</p>
                <p className="text-white font-semibold">{method.value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

export default Contact;
