import { motion } from "framer-motion";

const Footer = () => {
  const navItems = [
    { number: "1", label: "Work" },
    { number: "2", label: "About" },
    { number: "3", label: "Education" },
    { number: "4", label: "Contact" },
  ];

  return (
    <motion.footer 
      className="py-16 px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Bottom Navigation */}
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={`#${item.label.toLowerCase()}`}
              className="flex items-center gap-3 text-mono text-sm text-foreground/70 hover:text-foreground transition-colors duration-200"
            >
              <span className="text-foreground/50">{item.number}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-foreground/10">
          <p className="text-mono text-xs text-foreground/50">© Maya Chen 2024</p>
          <p className="text-mono text-xs text-foreground/50">Made in California</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
