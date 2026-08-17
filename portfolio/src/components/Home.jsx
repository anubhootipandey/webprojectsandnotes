import React from "react";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>Hi, I'm <span>Anubhooti Pandey</span></h1>
        <div className="text">
          <h3>Front-end Developer</h3>
        </div>
      </div>
      <div className="home-icon">
        <a href="#"><i className='bx bxl-linkedin' ></i></a>
        <a href="#"><i className='bx bxl-github' ></i></a>
        <a href="#"><i className='bx bxl-instagram' ></i></a>
      </div>
    </section>
  );
};

export default Home;
