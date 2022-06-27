import React from 'react';
import coverImage from '../../assets/cover/super.JPG';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
        | Class A CDL Holder | Current Student at The Ohio State University | Emerging Software Developer.
        </p>
      </div>
    </section>
  );
}

export default About;
