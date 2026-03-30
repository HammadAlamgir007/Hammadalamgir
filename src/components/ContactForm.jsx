import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPaperPlane,
  faPhone,
  faCheckCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import BackToTopButton from "./BackToTopButton";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
        console.error('Failed to send email:', data.error);
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-16 bg-background relative"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 via-transparent to-transparent opacity-50 pointer-events-none"></div>

      <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-foreground relative z-10 font-heading">
        Get In Touch
      </h2>

      <div className="flex flex-col md:flex-row gap-10 max-w-5xl mx-auto relative z-10">
        {/* Contact Info Card */}
        <div className="flex-1 bg-card backdrop-blur border border-border rounded-2xl p-8 flex flex-col justify-between shadow-card">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6 font-heading">Contact Information</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm open for freelance projects, full-time opportunities, or just a coffee chat. Feel free to reach out!
            </p>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-foreground/80">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <a href="tel:+923187646051" className="hover:text-primary transition">
                  +92 318-764-6051
                </a>
              </li>
              <li className="flex items-center gap-4 text-foreground/80">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <a href="mailto:hammadalamgir778@gmail.com" className="hover:text-primary transition">
                  hammadalamgir778@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-4 text-foreground/80">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <span>Islamabad, Pakistan</span>
              </li>
            </ul>
          </div>

          <div className="mt-10">
            <h4 className="text-sm text-muted-foreground uppercase tracking-widest mb-4">Follow Me</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/ihammadalamgir"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary hover:bg-secondary/80 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a
                href="https://linkedin.com/in/ihammadalamgir"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-secondary border border-border flex items-center justify-center text-foreground/70 hover:text-primary hover:border-primary hover:bg-secondary/80 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          className="flex-1 bg-card border border-border rounded-2xl p-8 flex flex-col gap-6 shadow-card"
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name" className="block text-muted-foreground text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground focus:outline-none focus:border-primary transition-colors"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-muted-foreground text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground focus:outline-none focus:border-primary transition-colors"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-muted-foreground text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={status === "submitting" || status === "success"}
            className={`w-full py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all duration-300 ${status === "success"
              ? "bg-green-600 text-white cursor-default"
              : status === "error"
              ? "bg-red-600 text-white cursor-default"
              : "bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-lg hover:shadow-primary/25"
              }`}
          >
            {status === "submitting" ? (
              <span>Sending...</span>
            ) : status === "success" ? (
              <>
                <FontAwesomeIcon icon={faCheckCircle} /> Sent Successfully
              </>
            ) : status === "error" ? (
              <>
                <FontAwesomeIcon icon={faExclamationCircle} /> Failed to Send
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faPaperPlane} /> Send Message
              </>
            )}
          </button>
        </form>
      </div>
      <BackToTopButton />
    </section>
  );
};

export default ContactForm;
