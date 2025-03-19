import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { checkLikes } from "../../Redux/MoviesSlice";
import { createUseStyles } from "react-jss";
import { LikeDislikeProps } from "../../types/types";
import LikeButton from "../../assets/images/like.svg";

export const LikeDislike: React.FC<LikeDislikeProps> = ({
  movieId,
  personId,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const movie = useSelector((state: RootState) =>
    state.movies.movies.find((m) => m.id === movieId)
  );

  if (!movie) return null;

  const hasLiked = movie.usersLike.includes(personId);
  const hasDisliked = movie.usersDislike.includes(personId);

  const handleVote = (isLike: boolean) => {
    if ((isLike && !hasLiked) || (!isLike && !hasDisliked)) {
      dispatch(checkLikes({ id: movieId, personId, isLike }));
    }
  };

  return (
    <div className={classes.container}>
      <button onClick={() => handleVote(true)} className={classes.button}>
        <img className={classes.handimage} src={LikeButton} alt="Like" />
      </button>
      <button
        onClick={() => handleVote(false)}
        className={`${classes.button} ${classes.dislikeButton}`}
      >
        <img
          className={classes.handimage}
          style={{ transform: "rotate(180deg) translateY(-10%)" }}
          src={LikeButton}
          alt="Dislike"
        />
      </button>
      <div className={classes.counter}>{movie.likes}</div>
      <div className={classes.counter}>{movie.dislikes}</div>
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
