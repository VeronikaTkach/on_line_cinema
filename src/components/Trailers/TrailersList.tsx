import { useRef, useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { Trailer } from "./Trailer";
import { fakeDatabase } from "../../Redux/FakeBD";
import { Scrollbar } from "react-scrollbars-custom";
import { TrailerSocials } from "./TraillersSocials";
import { LikeDislike } from "./LikeDislike";
import { MovieType } from "../../Redux/FakeBD";
import { Link } from "react-router-dom";
import RightArrow from "../../assets/images/ArrowRight.svg";
import Container from "../../layouts/Container/Container";

export const NewTrailers: React.FC = () => {
  const classes = useStyles();
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollbarRef = useRef<any>(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState<MovieType | null>(
    fakeDatabase.movies[0]
  );

  useEffect(() => {
    if (contentRef.current) {
      setScrollWidth(contentRef.current.scrollWidth);
    }
  }, [fakeDatabase.movies]);

  const handleScroll = (values: any) => {
    if (contentRef.current) {
      contentRef.current.scrollLeft = values.scrollLeft;
    }
  };
  const handleOverlayClick = (movie: MovieType) => {
    setSelectedMovie(movie);
  };

  return (
    <Container>
      <div className={classes.treilersHead}>
        <h2>Новые трейлеры</h2>
        <Link to="/media" className={classes.linkToMedia}>
          Перейти на другую страницу
          <img src={RightArrow} alt="Right arrow" />
        </Link>
      </div>
      {selectedMovie && (
        <Trailer
          title={selectedMovie.title}
          image={selectedMovie.image}
          className={classes.selectedTrailer}
          overlayButton={classes.selectedOverlayButton}
          trailerContainer={classes.selectedTrailerContainer}
          showTitle={false}
        />
      )}
      <div className={classes.selectedInfo}>
        <h3>{selectedMovie?.title}</h3>
        <div className={classes.socials}>
          <TrailerSocials />
        </div>
        <div className={classes.likeDislike}>
          <LikeDislike movieId={selectedMovie?.id ?? null} />
        </div>
      </div>

      <div className={classes.container}>
        <Scrollbar
          ref={scrollbarRef}
          className={classes.scrollbar}
          noScrollY
          onScroll={handleScroll}
          thumbXProps={{
            style: {
              backgroundColor: "#3657CB",
              borderRadius: "10px",
              height: "7px",
            },
          }}
          trackXProps={{
            style: {
              backgroundColor: "#1B2133",
              borderRadius: "10px",
              height: "7px",
            },
          }}
        >
          <div style={{ width: scrollWidth, height: "1px" }} />
        </Scrollbar>
        <div ref={contentRef} className={classes.content}>
          {fakeDatabase?.movies?.map((movie) => (
            <div key={movie.id} className={classes.movieCard}>
              <Trailer
                title={movie.title}
                image={movie.image}
                className={classes.trailer}
                overlayButton={classes.overlayButton}
                trailerContainer={classes.trailerContainer}
                onClick={() => handleOverlayClick(movie)}
                showTitle={true}
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

const useStyles = createUseStyles({
  container: {
    position: "relative",
    width: "100%",
    marginBottom: "78px",
    
  },
  content: {
    display: "flex",
    gap: "20px",
    overflowX: "auto",
    maxWidth: "100%",
    scrollbarWidth: "none",
   
  },
  scrollbar: {
    width: "100%",
    marginBottom: "16px",
    background: "transparent",
    alignItems: "center",
    display: "none",
    "@media (min-width: 768px)": {
      display: "flex",
    },
    "@media (min-width: 1920px)": {
      marginBottom: "23px",
    },
  },

  movieCard: {
    flex: "0 0 calc(50% - 10px)",
    maxWidth: "calc(50% - 10px)",
    "@media (min-width: 768px)": {
      flex: "0 0 calc(25.1% - 20px)",
      maxWidth: "calc(25.1% - 20px)",
    },
  },
  trailer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",

    "& img": {
      borderRadius: "10px",
      width: "100%",
      height: "113px",
      objectFit: "cover",
      "@media (min-width: 768px)": {
        height: "133px",
      },
      "@media (min-width: 1024px)": {
        height: "145px",
      },
      "@media (min-width: 1920px)": {
        height: "245px",
      },
    },

    "& h3": {
      marginTop: "10px",
      fontSize: "13px",
      fontWeight: "700",
      color: "#ffffff",
      "@media (min-width: 1024px)": {
        fontSize: "15px",
      },
      "@media (min-width: 1920px)": {
        fontSize: "20px",
      },
    },
  },
  overlayButton: {
    position: "absolute",
    top: 0,
    left: 0,
    padding: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3657CB",
    opacity: 0.65,
    transition: "background-color 0.3s ease-in-out",
    borderRadius: "10px",
    zIndex: 1,
    cursor: "pointer",
    border: "none",
    "& img": {
      width: "18px",
      height: "16px",
      color: "white",
      opacity: 1,
      objectFit: "contain",
      "@media (min-width: 768px)": {
        width: "16px",
        height: "14px",
      },
      "@media (min-width: 1024px)": {
        width: "20px",
        height: "18px",
      },
      "@media (min-width: 1920px)": {
        width: "35px",
        height: "31px",
      },
    },
  },
  trailerContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
  },

  selectedOverlayButton: {
    position: "absolute",
    top: 0,
    left: 0,
    padding: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3657CB",
    opacity: 0.65,
    transition: "background-color 0.3s ease-in-out",
    borderRadius: "10px",
    zIndex: 1,
    cursor: "pointer",
    border: "none",
    "& img": {
      maxWidth: "5%",

      objectFit: "contain",
    },
  },

  selectedTrailerContainer: {
    position: "relative",
    width: "100%",
    height: "auto",
  },

  selectedTrailer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "start",

    "& img": {
      borderRadius: "10px",
      width: "100%",
      height: "auto",
      objectFit: "cover",
    },
  },
  selectedInfo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    margin: "17px 0 24px 0",
    "& h3": {
      color: "#ffffff",
      fontSize: "25px",
      fontWeight: "900",

      "@media (min-width: 768px)": {
        fontSize: "30px",
      },
      "@media (min-width: 1024px)": {
        fontSize: "35px",
      },
      "@media (min-width: 1920px)": {
        fontSize: "45px",
      },
    },
    "@media (max-width: 768px)": {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr",
      "& h3": {
        justifySelf: "start",
      },
    },
  },
  socials: {
    alignSelf: "center",
    marginLeft: "34px",
    "@media (max-width: 768px)": {
      gridRow: "2",
      gridColumn: "1",
      justifySelf: "start",
      alignSelf: "start",
      margin: "0",
    },
  },
  likeDislike: {
    marginLeft: "auto",
  },
  treilersHead: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: "79px",
    "& h2": {
      fontSize: "32px",
      fontWeight: "bold",
    },

    "@media (min-width: 768px)": {
      flexDirection: "row",
      "& h2": {
        fontSize: "40px",
        fontWeight: "bold",
      },
    },

    "@media (min-width: 1920px)": {
      fontSize: "65px",
    },
  },
  linkToMedia: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "27px",
    fontSize: "18px",
    fontWeight: "700",
    "@media (min-width: 1920px)": {
      fontSize: "22px",
    },
  },
});
