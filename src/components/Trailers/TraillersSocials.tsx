import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import PointsButton from "../../assets/images/threepoints.svg";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
  },
  socialLink: {
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
  },

  dropdown: {
    display: "flex",
    gap: "8px",
    backgroundColor: "#1B2133",
    border: "1px solid #D1D5DB",
    borderRadius: "8px",
    zIndex: 100,
  },
  icon: {
    width: "24px",
    height: "11px",
    filter:
      "brightness(0) invert(45%) sepia(10%) saturate(300%) hue-rotate(200deg)",
    transition: "filter 0.3s ease",
    "&:hover": {
      filter: "brightness(0) invert(1) saturate(100%) sepia(0)"},
   
    "@media (min-width: 1024px)": {
     
      height: "14px",
    },
    "@media (min-width: 1440px)": {
     
      height: "17px",
  },
}});

const socialIcons = [
  { src: "/src/assets/images/vk.svg", alt: "VK" },
  { src: "/src/assets/images/instagram.svg", alt: "Instagram" },
  { src: "/src/assets/images/facebook.svg", alt: "Facebook" },
  { src: "/src/assets/images/twitter.svg", alt: "Twitter" },
  { src: "/src/assets/images/google.svg", alt: "Google" },
  { src: "/src/assets/images/youtube.svg", alt: "YouTube" },
  { src: "/src/assets/images/yandex.svg", alt: "Yandex" },
];

export const TrailerSocials = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {socialIcons.slice(0, 4).map((icon, index) => (
        <a
          key={index}
          className={classes.socialLink}
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className={classes.icon} src={icon.src} alt={icon.alt} />
        </a>
      ))}
      <DropdownMenu.Root>
        <DropdownMenu.Content
          align="start"
          side="top"
          sideOffset={-50}
          alignOffset={50}
          className={classes.dropdown}
          asChild
        >
          <div>
            {socialIcons.slice(4).map((icon, index) => (
              <DropdownMenu.Item key={index} asChild>
                <a
                  className={classes.socialLink}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className={classes.icon} src={icon.src} alt={icon.alt} />
                </a>
              </DropdownMenu.Item>
            ))}
          </div>
        </DropdownMenu.Content>

        <DropdownMenu.Trigger asChild>
          <button className={classes.socialLink}>
            <img className={classes.icon} src={PointsButton} alt="More" />
          </button>
        </DropdownMenu.Trigger>
      </DropdownMenu.Root>
    </div>
  );
};
