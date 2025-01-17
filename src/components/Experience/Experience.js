import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="section scrollspy">
      <h3 className="page-title white-text teal">Experience</h3>
      <div className="container">
        <div className="card">
          <div className="card-content">
            <div className="row">
              <div className="col s12 m2">
                <a href="https://home.iitd.ac.in/">
                  <img
                    alt="GFOSS Logo"
                    src="https://avatars.githubusercontent.com/u/2427173?s=200&v=4"
                    className="responsive-img center-block"
                  />
                </a>
              </div>
              <div className="col s12 m10">
                <p>
                  <span className="card-title">
                    <a
                      href="https://summerofcode.withgoogle.com/projects/#4980672680165376"
                      className="teal-text hoverline"
                    >
                      GFOSS Open Alliance - GSoC'21
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div className="role brown-text">Open Source Contributor</div>
            <p>
              <em className="grey-text">
                Part Time Contribution to MediaCMS project under Google Summer
                of Code 2021
              </em>
            </p>
          </div>
          <div className="card-action">
            <span>June 2021 - Ongoing | Kota, IN (Remote)</span>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="row">
              <div className="col s12 m2">
                <a href="https://home.iitd.ac.in/">
                  <img
                    alt="IITD Logo"
                    src="https://www.latestlaws.com/media/2020/05/1590760739.png"
                    className="responsive-img center-block"
                  />
                </a>
              </div>
              <div className="col s12 m10">
                <p>
                  <span className="card-title">
                    <a
                      href="https://home.iitd.ac.in/"
                      className="teal-text hoverline"
                    >
                      Indian Institute of Technology, Delhi
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div className="role brown-text">Research Intern</div>
            <p>
              <em className="grey-text">
                Research Internship under Dr.Tapan Kumar Gandhi
              </em>
            </p>
          </div>
          <div className="card-action">
            <span>January 2021 - Ongoing | Kota, IN (Remote)</span>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="row">
              <div className="col s12 m2">
                <a href="https://fellowship.mlh.io/">
                  <img
                    alt="MLH Logo"
                    src="https://mlh.io/assets/logos/mlh-facebook-ae6144c0a3605f15992ee2970616db8d.jpg"
                    className="responsive-img center-block"
                  />
                </a>
              </div>
              <div className="col s12 m10">
                <p>
                  <span className="card-title">
                    <a
                      href="https://fellowship.mlh.io/"
                      className="teal-text hoverline"
                    >
                      Major League Hacking
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div className="role brown-text">Fellowship</div>
            <p>
              <em className="grey-text">
                OpenSource Contributor in MLH Fellowship
              </em>
            </p>
            <ul>
              <li>Contributed to Julia Language</li>
              <li>
                Created julia package named WellIO.jl which is useful for
                exploration and processing of ASCII LAS (Oil Well Drilling
                Data)files.
              </li>
            </ul>
          </div>
          <div className="card-action">
            <span>Oct 2020 - Dec 2020 | Kota, IN (Remote)</span>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <div className="row">
              <div className="col s12 m2">
                <a href="https://www.iiita.ac.in/">
                  <img
                    alt="IIIT Allahabad"
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Indian_Institute_of_Information_Technology%2C_Allahabad_Logo.png/220px-Indian_Institute_of_Information_Technology%2C_Allahabad_Logo.png"
                    className="responsive-img center-block"
                  />
                </a>
              </div>
              <div className="col s12 m10">
                <p>
                  <span className="card-title">
                    <a
                      href="https://www.iiita.ac.in/"
                      className="teal-text hoverline"
                    >
                      IIIT Allahabad
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div className="role brown-text">Research Intern</div>
            <p>
              <em className="grey-text">
                Research Intern in Center of Cognitive Computing under
                Dr.Pritish Varadwaj
              </em>
            </p>
            <ul>
              <li>
                Development of fruit ripeness multi-class classification system,
                which included the collection of data as well as it's training.
                The data collection was non-invasive in nature.
              </li>
              <li>
                Collected and curated biological dataset showing relation
                between various chemical compounds and their percieced smell.
              </li>
            </ul>
          </div>
          <div className="card-action">
            <span>May 2019 - July 2019 | Allahabad, IN</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
