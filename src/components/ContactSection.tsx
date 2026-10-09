import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

const ContactSection = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const sfTime = now.toLocaleTimeString("en-US", {
        timeZone: "America/Los_Angeles",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setCurrentTime(sfTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const contactLinks = [
    {
      label: "Email",
      text: "hello@mayachen.design",
      href: "mailto:hello@mayachen.design",
      external: false,
    },
    {
      label: "LinkedIn",
      text: "linkedin.com/in/mayachen",
      href: "https://linkedin.com/in/mayachen",
      external: true,
    },
    {
      label: "Dribbble",
      text: "dribbble.com/mayachen",
      href: "https://dribbble.com/mayachen",
      external: true,
    },
  ];

  return (
    <section id="contact" className="max-w-3xl mx-auto px-8 py-24">
      <motion.h3 
        className="section-header mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Contact
      </motion.h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h4 className="heading-display text-xl text-foreground mb-8">Get in touch</h4>
          <div className="flex flex-col gap-4">
            {contactLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="flex items-center justify-between py-3 border-b border-foreground/10 group"
              >
                <span className="text-mono text-sm text-foreground/70 group-hover:text-foreground transition-colors duration-200">
                  {link.text}
                </span>
                {link.external && (
                  <ArrowUpRight className="w-4 h-4 text-foreground/30 group-hover:text-foreground/60 transition-colors duration-200" />
                )}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4 className="heading-display text-xl text-foreground mb-8">Location</h4>
          <div className="space-y-2">
            <p className="text-mono text-sm text-foreground/70 flex items-center gap-2">
              San Francisco, USA <span className="text-lg">🇺🇸</span>
            </p>
            <p className="text-mono text-sm text-foreground/50">
              {currentTime} local time
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
