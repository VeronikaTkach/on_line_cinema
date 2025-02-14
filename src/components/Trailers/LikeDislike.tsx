import { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { fakeDatabase } from "../../Redux/FakeBD";
import LikeButton from "../../assets/images/like.svg";

interface LikeDislikeProps {
  movieId: string | null;
}

export const LikeDislike: React.FC<LikeDislikeProps> = ({ movieId }) => {
  const classes = useStyles();
  const movie = fakeDatabase.movies.find((m) => m.id === movieId);
  if (!movie) return null;

  const [likes, setLikes] = useState<number>(movie.likes);
  const [dislikes, setDislikes] = useState<number>(movie.dislikes);
  const [userVote, setUserVote] = useState<"like" | "dislike" | null>(null);

  useEffect(() => {
    setLikes(movie.likes);
    setDislikes(movie.dislikes);
    setUserVote(null);
  }, [movieId]);

  const handleLike = () => {
    if (userVote === "like") return;
    setLikes(likes + 1);
    if (userVote === "dislike") setDislikes(dislikes - 1);
    setUserVote("like");
  };

  const handleDislike = () => {
    if (userVote === "dislike") return;
    setDislikes(dislikes + 1);
    if (userVote === "like") setLikes(likes - 1);
    setUserVote("dislike");
  };

  return (
    <div className={classes.container}>
      <button onClick={handleLike} className={classes.button}>
        <img className={classes.handimage} src={LikeButton} alt="Like" />
      </button>
      <button
        onClick={handleDislike}
        className={`${classes.button} ${classes.dislikeButton}`}
      >
        <img
          className={classes.handimage}
          style={{ transform: "rotate(180deg) translateY(-10%)" }}
          src={LikeButton}
          alt="Dislike"
        />
      </button>
      <div className={classes.counter}>{likes}</div>
      <div className={classes.counter}>{dislikes}</div>
    </div>
  );
};

const useStyles = createUseStyles({
  container: {   
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
    gap: "8px",
    placeItems: "center",
    width: "65px",
    height: "44px",
    "@media (min-width: 1024px)": {
      width: "83px",
      height: "60px",
    },
    "@media (min-width: 1440px)": {
      width: "125px",
      height: "85px",
    },
  },
  button: {
    width: "13px",
    height: "13px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    backgroundColor: "#1B2133",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "green",
    },
    "@media (min-width: 1024px)": {
      width: "40px",
      height: "40px",
    },
    "@media (min-width: 1440px)": {
      width: "58px",
      height: "58px",
    },
  },
  dislikeButton: {
    "&:hover": {
      backgroundColor: "red",
    },
  },
  handimage: {
    transform: "translateY(-20%)",
    width: "13px",
    height: "13px",

    "@media (min-width: 1024px)": {
      width: "17px",
      height: "17px",
    },
    "@media (min-width: 1440px)": {
      width: "26px",
      height: "26px",
    },
  },
  counter: {
    width: "30px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1E2538",
    borderRadius: "8px",
    fontSize: "9px",
    fontWeight: "400",
    "@media (min-width: 1024px)": {
      fontSize: "11px",
      fontWeight: "400",
    },
    "@media (min-width: 1440px)": {
      fontSize: "15px",
      fontWeight: "400",
    },
  },
});
