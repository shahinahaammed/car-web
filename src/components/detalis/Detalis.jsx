import React from "react";
import img11 from "../../images/11.png";
import img12 from "../../images/14.png";
import img13 from "../../images/13.png";
import "./Detalis.css";

const Detalis = () => {
  const cars = [
    { imagePath: img11, name: "Car 1" },
    { imagePath: img12, name: "Car 2" },
    { imagePath: img13, name: "Car 3" }
  ];

  return (
    <div className="details container">
      <div className="row">
        {cars.map((car, index) => (
          <div className="col-sm-4" key={index}>
            <div className="box">
              <img src={car.imagePath} alt="" className="img-fluid" />
              <div className="box_content">
                <h6>{car.name}</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptate pariatur aspernatur obcaecati 
                </p>
                <button className="btn">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Detalis;
