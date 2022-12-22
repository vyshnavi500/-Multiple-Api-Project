import React from 'react'
import { useState, useEffect } from "react";
import "./home.css"

export default function Home() {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const renderContent = () => (
      <>
        <div className="Parallax__content__heading">
          <h1 className="Parallax__content__heading__text">Multiple API's Project</h1>
          <h2 className="Parallax__content__heading__caption">
            using React and React Router DOM
          </h2>
        </div>
        <div className="Parallax__content__cta">
          <h1>API's Included</h1>
          <p>Login Page</p>
          <p>Cryptocurreny API</p>
          <p>Covid API</p>
          <p>Nasa API</p>
        </div>
      </>
    );
  
    return (
      <section className="Parallax">
        <div
          className="Parallax__background"
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
        />
        <div
          className="Parallax__background-triangles"
          style={{ transform: `translateY(${offsetY * 0.8}px)` }}
        />
        <div className="Parallax__content">{renderContent()}</div>
      </section>
    );
}
