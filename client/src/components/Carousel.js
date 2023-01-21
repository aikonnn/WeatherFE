import './Carousel.css';
import { useState } from 'react';

const data = [{
  title: "Save up to $200 on new Surface pro 9",
  subtitle: "The tablet flexibility you want and the laptop performance you need—all in one ultra-portable device. Offer ends 2/2.",
  image: "./example1.png",
  button: "example.com"
}, {
  title: "example 2",
  subtitle: "example 2 sub",
  image: "./example1.png",
  button: "example2.com"
}, {
  title: "example 2",
  subtitle: "example 2 sub",
  image: "./example1.png",
  button: "example2.com"
}]

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const rotate = (direction) => {
    if (direction === "left" && current === 0) {
      setCurrent(data.length - 1);
    } else if (direction === "right" && current === data.length - 1) {
      setCurrent(0);
    } else if (direction === "left") {
      setCurrent(current - 1);
    } else if (direction === "right") {
      setCurrent(current + 1);
    }
  }

  const listRemote = data.map((item, index) =>
    <img onClick={() => setCurrent(index)} className="carousel--controller__icon" src={index === current ? "./filledCircle.png" : "circle.png"} />
  )
  return <div className="carousel--container">

    <div className="carousel--image__container">
      <img className="carousel--background__image" src="./example1.png" />
      <div className="carousel--info__container">
        <div className="carousel--title">
          {data[current].title}
        </div>
        <div className="carousel--subtitle">
          {data[current].subtitle}
        </div>
        <div className="carousel--button">
        </div>
      </div>
    </div>

    <div className="carousel--controller__container">
      <img className="carousel--controller__icon" src="./arrowL.png" onClick={() => rotate("left")} />
      {listRemote}
      <img className="carousel--controller__icon" src="./arrowR.png" onClick={() => rotate("right")} />
    </div>

  </div>
}

export default Carousel