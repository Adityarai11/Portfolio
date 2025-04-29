import logo from "../assets/logo.webp";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  // Define the social media URLs
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/aditya-rai2003",
    github: "https://github.com/Adityarai11",
    twitter: "https://x.com/Adityarai1111?t=TINKufCtaRqtzqeVdIJr7w&s=09",
    instagram: "https://www.instagram.com/adirai_adi/profilecard/?igsh=MWRub2UzdTYyNWJraw==",
    whatsapp: "https://wa.me/919354180635", // WhatsApp link in international format
  };

  // Function for handling logo click to refresh the page
  const handleLogoClick = () => {
    window.location.reload();
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center cursor-pointer" onClick={handleLogoClick}>
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>

      {/* Social Icons */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
