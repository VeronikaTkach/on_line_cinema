// не получилось переиспользовать компонент SocialIcons, поскольку превалируют стили. Из решений нашел только css с директивой !important:(
// либо код в компоненте SocialIcons менять
// Закопипастил
const SocialIconsLogin = () => {
  const clLink =
    "w-10 h-10  bg-grays-input rounded-lg flex items-center justify-center hover:bg-blues-cobalt transition-all duration-300 ease-in-out";
 
  return (
    <div className="flex justify-start gap-2 mb-11">
      <a
        className={clLink}
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="w-6 h-6" src="./src/assets/images/vkReg.svg" alt="VK" />
      </a>

      <a
        className={clLink}
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="w-6 h-6"
          src="./src/assets/images/facebookReg.svg"
          alt="Facebook"
        />
      </a>
      <a
        className={clLink}
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="w-6 h-6"
          src="./src/assets/images/google.svg"
          alt="Google"
        />
      </a>
      <a
        className={clLink}
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="w-6 h-6"
          src="./src/assets/images/twitterReg.svg"
          alt="Twitter"
        />
      </a>
    </div>
  );
};

export default SocialIconsLogin;


