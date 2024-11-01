import "./SocialIcons.css";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a
        className="social-icons__link"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="social-icons_svg" src="/vk.svg" alt="VK" />
      </a>
      <a
        className="social-icons__link"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="social-icons_svg"
          src="/instagram.svg"
          alt="Instagram"
        />
      </a>
      <a
        className="social-icons__link"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="social-icons_svg" src="/facebook.svg" alt="Facebook" />
      </a>
      <a
        className="social-icons__link"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="social-icons_svg" src="/twitter.svg" alt="Twitter" />
      </a>
      <a
        className="social-icons__link"
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="social-icons_svg" src="/youtube.svg" alt="YouTube" />
      </a>
    </div>
  );
};

export default SocialIcons;
