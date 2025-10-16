import React from "react";
import '../styles/main.scss'

export default function Home(){
    return(
        <section id="home">
            <div className="home-container">
                <div className="title-container">
                    <AnimatedTitle text="KRISH NANWANI HATHIRAMANI"/>
                </div>
            </div>
        </section>
    )
}

function AnimatedTitle({ text }) {
  return (
    <h1 className="title">
      {text.split("").map((char, i) => (
        <span
          key={i}
          className={char === " " ? "space" : ""}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
}