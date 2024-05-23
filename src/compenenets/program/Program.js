import React from "react";
import "./program.css";
import rightArrow from "../../assets/rightArrow.png";
import { programsData } from "../../data/programsData";
const Program = () => {
  return (
    <div className="programs" id="programe">
      <div className="program-header">
   
        <span className="stroke-text">explore our</span>
            <span >programs</span>
        <span className="stroke-text">to shape you</span>
        
      </div>
      <div className="prgram-categories">
          {programsData.map((program) => (
            <div className="category">
             
                {program.image}
                <span>{program.heading}</span>
                <span>{program.details}</span>
                <div className="join-now">
                  <span>Join Now</span>
                  <img src={rightArrow} alt="" />
                </div>
              </div>
           
          ))}
        </div>
    </div>
  );
};

export default Program;
