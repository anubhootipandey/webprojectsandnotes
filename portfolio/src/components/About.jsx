import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="heading">About <span>Me</span></h2>
      <div className="about-img">
        <img src="pic.jpg" alt="" />
      </div>
      <div className="about-content">
        <h3>Front-end Developer</h3>
        <p>I am a passionate pre final year computer science and engineering student with a strong foundation in Front-end technologies.
          Looking forward to new opportunities to put to use the skills I have gained and expand my Knowledge for professional growth
          and personal development. Always curious to explore new opportunities.
        </p>
        <div className="btn-box btns">
          <a href="#" className="btn">Read More</a>
        </div>
      </div>
    </section>
  );
};

export default About;
