import { useState } from "react";
import { createUseStyles } from "react-jss";

interface SmallNewsProps {
  image: string;
  date: string;
  description: string;
  title: string;
}

export function SmallNews({ image, date, description, title }: SmallNewsProps) {
  const [hovered, setHovered] = useState(false);
  const classes = useStyles();

  return (
    <div
      className={classes.newsItem}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={image} alt={title} className={classes.image} />
      <div className={`${classes.overlay} ${hovered ? classes.hovered : ""}`}>
        <h3 className={classes.date}>{date}</h3>
        <p className={classes.description}>{description}</p>
      </div>
      <div
        className={`${classes.buttonOverlay} ${
          hovered ? classes.buttonVisible : ""
        }`}
      >
        <button className={classes.button}>Читать новость</button>
      </div>
    </div>
  );
}

const useStyles = createUseStyles({
  newsItem: {
    position: "relative",
    borderRadius: "10px",
    overflow: "hidden",
    cursor: "pointer",
    width: "180px",
    height: "129px",
    "@media (min-width: 426px)": {
      width: "206px",
      height: "150px",
    },

    "@media (min-width: 1024px)": {
      width: "206px",
      height: "150px",
    },

    "@media (min-width: 1440px)": {
      width: "254px",
      height: "182px",
    },
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  date: {
    color: "#ffffff",
    fontFamily: `"Qanelas", san-serif,`,
    fontSize: "12px",
    fontWeight: "bold",
    "@media (min-width: 426px)": {
      fontSize: "13px",
    },
    "@media (min-width: 1440px)": {
      fontSize: "15px",
    },
  },
  description: {
    color: "#ffffff",
    fontFamily: `"Qanelas", san-serif,`,
    fontSize: "13px",
    fontWeight: "900",
    "@media (min-width: 1024px)": {
      fontSize: "15px",
    },
    "@media (min-width: 1440px)": {
      fontSize: "18px",
    },
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "space-between",
    padding: "0.70em 0 1.5em 1.1em",
  },
  buttonOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(54, 87, 203, 0.52)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "opacity 0.3s",
    opacity: 0,
  },
  button: {
    width: "10em",
    height: "3em",
    color: "#ffffff",
    fontFamily: `"Qanelas", san-serif,`,
    fontSize: "1em",
    fontWeight: "700",
    // padding: "10px 20px",
    backgroundColor: "transparent",
    borderRadius: "10px",
    border: "1px solid #ffffff",
    boxShadow: "none",
    cursor: "pointer",
    outline: "none",
  },
  hovered: {
    opacity: 0,
  },
  buttonVisible: {
    opacity: 1,
  },
});
