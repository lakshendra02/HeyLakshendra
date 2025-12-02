import { useState, useRef } from "react";
import SectionWrapper from "./SectionWrapper";
import Button from "./Button";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedinIn, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function ContactSection() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState({ type: "", message: "" });

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setAlertMessage({ type: "", message: "" });

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log(result.text);
          setAlertMessage({
            type: "success",
            message: "Thank you! Your message has been sent successfully.",
          });
          form.current.reset(); // Clear form fields
        },
        (error) => {
          console.log(error.text);
          setAlertMessage({
            type: "error",
            message: "Failed to send the message. Please try again later.",
          });
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  const contactMethods = [
    {
      icon: FaEnvelope,
      label: "Email Me",
      value: "sejwanilakshen@gmail.com",
      href: "mailto:sejwanlakshen@gmail.com",
    },
    {
      icon: FaLinkedinIn,
      label: "Connect on LinkedIn",
      value: "@Lakshendra Sejwani",
      href: "https://www.linkedin.com/in/lakshendra-sejwani",
    },
    {
      icon: FaGithub,
      label: "View My Code",
      value: "@lakshendra02",
      href: "https://github.com/lakshendra02",
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

          {/* Alert Message Display */}
          {alertMessage.message && (
            <div
              className={`p-4 mb-4 rounded-lg text-white ${
                alertMessage.type === "success" ? "bg-green-600" : "bg-red-600"
              }`}
            >
              {alertMessage.message}
            </div>
          )}

          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="user_name" // MUST MATCH EmailJS template variable (e.g., {{user_name}})
                placeholder="Your Name"
                required
                className="w-full p-3 bg-dark-bg border border-gray-700 rounded-lg focus:border-primary focus:outline-none text-white"
              />
            </div>
            <div>
              <input
                type="email"
                name="user_email" // MUST MATCH EmailJS template variable (e.g., {{user_email}})
                placeholder="Your Email"
                required
                className="w-full p-3 bg-dark-bg border border-gray-700 rounded-lg focus:border-primary focus:outline-none text-white"
              />
            </div>
            <div>
              <textarea
                name="message" // MUST MATCH EmailJS template variable (e.g., {{message}})
                placeholder="Your Message"
                rows="6"
                required
                className="w-full p-3 bg-dark-bg border border-gray-700 rounded-lg focus:border-primary focus:outline-none text-white"
              ></textarea>
            </div>
            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
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

export default ContactSection;
