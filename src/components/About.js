import React from "react";
import AboutCard from "./AboutCard";

const About = ({ info }) => {
  return (
    <main>
      <div className="wrapper">
        {info.map(i => {
          return (
            <div className="exist" key={i._id}>
              <h2>
                {i.title.ar}
              </h2>
              <div className="imgs">
                <AboutCard id={i._id} infoo={i} />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default About;
