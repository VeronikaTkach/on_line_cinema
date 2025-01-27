export const SocialIconsLogin = () => {
  const clLink =
    "w-10 h-10  bg-grays-input rounded-lg flex items-center justify-center hover:bg-blues-cobalt transition-all duration-300 ease-in-out";

  return (
    <div className="flex justify-start gap-2 mb-11">
      <a className={clLink} href="#" target="_blank" rel="noopener noreferrer">
        <img className="brightness-0 invert w-6 h-6" src="./src/assets/images/vk.svg" alt="VK" />
      </a>

      <a className={clLink} href="#" target="_blank" rel="noopener noreferrer">
        <img
          className="brightness-0 invert w-5 h-6"
          src="./src/assets/images/facebook.svg"
          alt="Facebook"
        />
      </a>
      <a className={clLink} href="#" target="_blank" rel="noopener noreferrer">
        <img
          className="w-5 h-6"
          src="./src/assets/images/google.svg"
          alt="Google"
        />
      </a>
      <a className={clLink} href="#" target="_blank" rel="noopener noreferrer">
        <img
          className="brightness-0 invert w-6 h-6"
          src="./src/assets/images/twitter.svg"
          alt="Twitter"
        />
      </a>
    </div>
  );
};


