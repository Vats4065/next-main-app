"use client"
import React, { useEffect } from "react";
import styles from "../../styles/common.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const page = async ({ params }) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const getLogin = localStorage.getItem("login");
    const router = useRouter();

    useEffect(() => {
      if (getLogin) {
        router.push("/");
      } else {
        router.push("/login");
      }
    }, []);
  const id = params.id;

  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c02fbc68bcmshbcf86db29a2c655p12007cjsn9adea8d51505",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data[0].details;

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.movie_title}>
          Netflix \ <span> {main_data.type} </span>{" "}
        </h2>
        <div className={styles.card_section}>
          <div>
            <img
              src={main_data.backgroundImage.url}
              alt={main_data.title}
              width={600}
              height={300}
            />
          </div>
          <div>
            <h1>{main_data.title}</h1>
            <p>{main_data.synopsis}</p>
            <Link href="/movies">
              <button className="btn btn-dark rounded">Back</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
