import React from 'react'
import "./Homepage.css"
import video from "../assets/WhatsApp Video 2025-12-19 at 21.56.54.mp4"

const Homepage = () => {
  return (
    <div className="home">
      <div className="hero">
        <video src={video} autoPlay playsInline muted loop />
      </div>
      <section className="mapSection">
        <h2 className="mapTitle">Find us</h2>
        <div className="mapWrap">
          <iframe
  title="La Kasita location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.9742262448754!2d-4.991679323630617!3d36.484403385436565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd732bcc36fb56ad%3A0xb10ee6020a1d4f87!2sLa%20Kasita%20tapas%20y%20m%C3%A1s!5e1!3m2!1ses!2ses!4v1768208339775!5m2!1ses!2ses"
  width="100%"
  height="450"
  style={{ border: 0 }}
  loading="lazy"
  allowFullScreen
  referrerPolicy="no-referrer-when-downgrade"
/>


        </div>
      </section>
      

      
    </div>
  );
};

export default Homepage
