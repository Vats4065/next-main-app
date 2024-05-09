import React from "react";
import MovieCard from "../_components/MovieCard";
import styles from "../styles/common.module.css";
import Link from "next/link";

const Movies = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const url =
    "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b3ad37b96dmsh80aae36e29a4b60p1a2313jsn210825642fd1",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  const mainData = result.titles;
  console.log(mainData);

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <div className="d-flex  justify-content-between">
            <h1>Series & Movie</h1>
            <Link href="/">
              <button className="btn btn-dark">Back To Home</button>
            </Link>
          </div>
          <div className={styles.card_section}>
            {mainData.map((curElem) => {
              return <MovieCard key={curElem.id} {...curElem} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movies;
