import React from "react";
import "./Plan.css";
import whiteTick from "../../assets/whiteTick.png";
import { plansData } from "../../data/plansData";
const Plan = () => {
  return (
    <div className="plans-container"id="plans">
      <div className="blur hero-blur"></div>
      <div className="blur plan-blur"></div>

      <div className="program-header" style={{ gap: "3rem" }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>
      {/* plans card*/}
      <div className="plans">
        {plansData.map((plan, key) => (
          <div className="plan" key={key}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>${plan.price}</span>
            <div className="features">
              {plan.features.map((feature, key) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={key}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>see more benefits -></span>
            </div>
            <button className="btn">join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plan;
