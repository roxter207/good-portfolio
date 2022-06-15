import React from 'react';
import "./about.css"
import shoe2 from "../../img/wildoak.jpg"


export default function About() {
  return (
      <div className="a">
          <div className="a-left">
              <div className="a-card bg"></div>
              <div className="a-card">
                  <img src={shoe2} alt="" className="a-img" />
              </div>
          </div>
          <div className="a-right">
              <div className="a-title">About Me</div>
              <p className="a-sub">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate esse est molestiae commodi exercitationem explicabo aliquam eum sunt consequuntur laudantium, velit impedit magni dicta!
              </p>
              <p className="a-desc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis libero iure repellat explicabo? Quibusdam sunt nostrum tempore voluptatibus, expedita sint, nulla praesentium modi nam alias quis numquam eius? Enim magnam, perspiciatis nesciunt aspernatur nemo dolorem ea modi officiis minima mollitia, facilis ullam cum itaque. Suscipit.
              </p>
              <div className="a-award">
                  <img src="" alt="" className="a-award-img" />
              </div>
          </div>
      </div>
  );
}
