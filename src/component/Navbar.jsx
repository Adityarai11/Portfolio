import logo from "../assets/adityaRaiProfile.webp";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  // Define the social media URLs
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/your-profile", // Replace with your LinkedIn profile link
    github: "https://github.com/your-profile",           // Replace with your GitHub profile link
    twitter: "https://twitter.com/your-profile",         // Replace with your Twitter profile link
    instagram: "https://www.instagram.com/your-profile"  // Replace with your Instagram profile link
  };

  // Function for handling logo click (if needed)
  const handleLogoClick = () => {
    window.location.href = socialLinks.linkedin;  // Navigate to LinkedIn or any default URL
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
      </div>
    </nav>
  );
}

export default Navbar;
