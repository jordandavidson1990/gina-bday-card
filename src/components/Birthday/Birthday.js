import React, { useState } from "react";
import Confetti from "react-dom-confetti";
import { css, injectGlobal } from "emotion";

const Birthday = () => {
  const [item, setItem] = useState("🎁");
  const [confetti, setConfetti] = useState(false);
  const [hint, setHint] = useState("(don't forget to open your present!)");
  // state = {
  //   item: "",
  //   confetti: false,
  //   hint: "(don't forget to open your present!)",
  // };
  const openPresent = () => {
    let presents = [
      "😺",
      "🐈",
      "🎊",
      "🎈",
      "🎉",
      "✨",
      "🎇",
      "🎆",
      "🎙",
      "🍾",
      "☕️",
      "🎂",
    ];
    setItem(presents[Math.floor(Math.random() * Math.floor(presents.length))]);
    setConfetti(true);
    setHint("");
  };

  const handleSubmit = () => {
    window.open("https://www.youtube.com/watch?v=9rhadTURsrw&ab_channel=NFL");
  };

  const handlePrince = () =>
    window.open(
      "https://drive.google.com/file/d/10jOgS3hllpndoPQHSRuDvIpRk-94INVG/view?usp=sharing"
    );

  // render() {
  const style = {
    fontFamily: "Fredoka One",
  };
  const config = {
    angle: 90,
    spread: 45,
    startVelocity: 45,
    elementCount: 50,
    decay: 0.9,
  };

  return (
    <div>
      <div className={titleContainer}>
        <div style={style} className={title}>
          Happy Birthday Gina!
        </div>
        <div style={style} className={hint}>
          {hint}
        </div>
      </div>
      <div className={presentContainer}>
        <Confetti active={confetti} config={config} />
        <button className={presentButton} onClick={openPresent}>
          {item}
        </button>
      </div>
      <div
        style={{
          display: "flex",
          margin: "auto",
          width: "80%",
          justifyContent: "space-between",
        }}
      >
        <button className="glow-on-hover" type="button" onClick={handleSubmit}>
          Tuesday 15th 2022
        </button>
        <button className="glow-on-hover" type="button" onClick={handlePrince}>
          IWD4U 💜
        </button>
      </div>
    </div>
  );
};

export default Birthday;

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Fredoka+One');
  body {}
  body { color: black; }
`;
const titleContainer = css`
  display: flex;
  justify-content: center;
  margin-top: 300px;
  text-align: center;
  flex-direction: column;
  @media only screen and (max-width: 600px) {
    margin-top: 250px;
  }
`;
const presentContainer = css`
  display: flex;
  justify-content: center;
`;
const presentButton = css`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 50px;

  &:focus {
    outline: 0;
  }

  @media only screen and (max-width: 600px) {
    @keyframes opacity-change {
      0% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(20deg);
      }
      50% {
        transform: rotate(-20deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }

    animation: opacity-change 1s infinite;
  }
  &:hover {
    @keyframes opacity-change {
      0% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(20deg);
      }
      50% {
        transform: rotate(-20deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }

    animation: opacity-change 1s infinite;
  }
`;
const title = css`
  font-size: 50px;
`;
const hint = css`
  font-size: 10px;
`;
