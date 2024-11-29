import { CONTACT } from "../constants";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Added address icon
import { animate, motion } from "framer-motion";

const handlePhoneClick = () => {
  window.location.href = `tel:${CONTACT.phoneNo}`;
};

const handleEmailClick = () => {
  window.location.href = `mailto:${CONTACT.email}`;
};

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-4xl"
      >
        Get In Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="my-4 flex items-center justify-center gap-2"
        >
          <FaMapMarkerAlt className="text-xl" /> {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="my-4 flex items-center justify-center gap-2 cursor-pointer"
          onClick={handlePhoneClick}
        >
          <FaPhoneAlt className="text-xl" /> {CONTACT.phoneNo}
        </motion.p>
        <motion.a
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5, delay: 1 }}
          href="#"
          className="border-b flex items-center justify-center gap-2 cursor-pointer"
          onClick={handleEmailClick}
        >
          <FaEnvelope className="text-xl" /> {CONTACT.email}
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
