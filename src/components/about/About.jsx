import React from "react";
import "./About.css";
import aboutpic from "../../images/5.png";

const About = () => {

  return (
    <div className="about container">
      <div className="row">
        <div className="col-sm-5">
          <img src={aboutpic} className="img-fluid rounded-3" alt="" />
        </div>
        <div className="col-sm-6">
          <h6>Car Max</h6>
          <h5>We Always With you...</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            officiis obcaecati culpa placeat ratione consequatur possimus <br />{" "}
            mollitia fuga animi inventore quam, voluptatem a, hic dignissimos
            sapiente nisi soluta commodi ea expedita quibusdam minus est! <br />{" "}
            Quod a nihil sed, quis illum facere, cupiditate molestias alias
            beatae animi totam cumque dolor quae?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
