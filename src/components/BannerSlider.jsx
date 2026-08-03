import { useEffect, useState } from "react";
import "./BannerSlider.css";
import banners from "../data/bannerData";

function BannerSlider() {

  const [current, setCurrent] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {

      setCurrent((prev) => (prev + 1) % banners.length);

    }, 5000);

    return () => clearInterval(timer);

  }, []);

  const nextSlide = () => {

    setCurrent((prev) => (prev + 1) % banners.length);

  };

  const prevSlide = () => {

    setCurrent((prev) =>
      prev === 0 ? banners.length - 1 : prev - 1
    );

  };

  return (

    <section className="banner-slider">

      {banners.map((banner, index) => (

        <div
          key={banner.id}
          className={`slide ${index === current ? "active" : ""}`}
          style={{
            backgroundImage: `linear-gradient(rgba(15,23,42,.55),rgba(15,23,42,.75)),url(${banner.image})`
          }}
        >

          <div className="slide-content">

            <span>{banner.title}</span>

            <h1>{banner.subtitle}</h1>

            <p>{banner.description}</p>

            <button>{banner.button}</button>

          </div>

        </div>

      ))}

      <button className="prev" onClick={prevSlide}>
        ❮
      </button>

      <button className="next" onClick={nextSlide}>
        ❯
      </button>

      <div className="dots">

        {banners.map((_, index) => (

          <span
            key={index}
            className={index === current ? "dot active-dot" : "dot"}
            onClick={() => setCurrent(index)}
          />

        ))}

      </div>

    </section>

  );

}

export default BannerSlider;