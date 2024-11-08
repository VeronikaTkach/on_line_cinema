const SocialIcons = () => {
  const clLink =
    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-custom-dark";
  const clImg =
    "xl:max-w-7 lg:max-w-6 md:max-w-5 max-w-4 transition-all duration-500 ease-in-out hover:brightness-0 hover:invert hover:saturate-100 hover:sepia-0";

  return (
    <div className="flex justify-center lg:gap-9 md:gap-8 gap-6 xl:mb-11 lg:mb-8 mb-4">
      <a className={clLink} href="#" target="_blank" rel="noopener noreferrer">
        <img className={clImg} src="/vk.svg" alt="VK" />
      </a>
      <a className={clLink} href="#" target="_blank" rel="noopener noreferrer">
        <img className={clImg} src="/instagram.svg" alt="Instagram" />
      </a>
      <a className={clLink} href="#" target="_blank" rel="noopener noreferrer">
        <img className={clImg} src="/facebook.svg" alt="Facebook" />
      </a>
      <a className={clLink} href="#" target="_blank" rel="noopener noreferrer">
        <img className={clImg} src="/twitter.svg" alt="Twitter" />
      </a>
      <a className={clLink} href="#" target="_blank" rel="noopener noreferrer">
        <img className={clImg} src="/youtube.svg" alt="YouTube" />
      </a>
    </div>
  );
};

export default SocialIcons;
