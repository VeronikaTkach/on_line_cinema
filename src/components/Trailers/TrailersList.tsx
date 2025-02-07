import { useRef, useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { Trailer } from "./Trailer";
import { fakeDatabase } from "../../Redux/FakeBD";
import { Scrollbar } from "react-scrollbars-custom";
import Container from "../../layouts/Container/Container";

export const TrailersList: React.FC = () => {
  const classes = useStyles();
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollbarRef = useRef<any>(null);
  const [scrollWidth, setScrollWidth] = useState(0);

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

  return (
    <Container>
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
          {fakeDatabase.movies.map((movie) => (
            <div key={movie.id} className={classes.movieCard}>
              <Trailer
                title={movie.title}
                image={movie.image}
                className={classes.trailer}
                overlayButton={classes.overlayButton}
                trailerContainer={classes.trailerContainer}
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
    //
  },
  content: {
    display: "flex",
    gap: "20px",
    overflowX: "auto",
    maxWidth: "100%",
    scrollbarWidth: "none",
    //
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
  //
  movieCard: {
    flex: "0 0 calc(50% - 10px)",
    maxWidth: "calc(50% - 10px)",
    "@media (min-width: 768px)": {
      flex: "0 0 calc(25.1% - 20px)",
      maxWidth: "calc(25.1% - 20px)",
    },
    //
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
      width: "2em",
      height: "2em",
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
  },
});
