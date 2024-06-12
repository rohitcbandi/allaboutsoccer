import React from "react";
import {useState, useEffect} from 'react'

// import images
import jennaalsukhni from "../images/jennaalsukhni.jpeg";
import rohitbandi from "../images/rohitbandi.jpg";
import jihwanpark from "../images/jihwanpark.jpeg";
import mohammedmehboob from "../images/mohammedmehboob.jpg";
import kaceyna from "../images/kaceyna.jpg";

// unit test results
import unit_test_coverage_report from "../images/unit_test_coverage_report.png"

const About = () => {

  const [unitTestImage, setUnitTestImage] = useState("")

  // runs unit tests from test.py when button is clicked
  function runTests() {
    console.log('Run TEST!');
    // testing with my picture, will change later to coverage image (or do it on the fly)
    setUnitTestImage(unit_test_coverage_report)
  }

  return (
    
    <>
    <br />
    <h1 style={{ textAlign: "center" }}>About Team AllAboutSoccer</h1>
    <br />
    {/*GRID FOR ENTIRE PAGE*/}
    <div className="row row-cols-1 row-cols-md-2 g-4">

      {/*MEMBERS SECTION*/}
      <div className="card mx-auto border-0" style={{ width: "70rem"}}>
        <h2 className="card-title text-left">Members</h2>
        <br />

        {/*GRID FOR MEMBER CARDS*/}
        <div className="row row-cols-1 row-cols-md-3 g-4">
          
          {/*JENNA*/}
          <div className="col">
            <div className="card mx-auto" style={{ width: "18rem" }}>
              <img
                className="card-img-top"
                src= {jennaalsukhni}
                alt="Jenna"
              />
              <div className="card-body">
                <h3 className="card-title">Jenna Alsukhni</h3>
                <p className="card-text">3rd year Accounting</p>
                <p>
                  <em>Major Responsibilities: </em>
                  Creating Phase 1 and 2 Technical Report and diagrams, creating Git Wiki, getting website domain name on NameCheap, 
                  starting Canva presentation slides
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">6 Commits</li>
                <li className="list-group-item">6 Issues</li>
                <li className="list-group-item">1 Unit Tests</li>
              </ul>
            </div>
          </div>

          {/*ROHIT*/}
          <div className="col">
            <div className="card mx-auto" style={{ width: "18rem", textAlign: "center"  }}>
              <img
                className="card-img-top "
                src={rohitbandi}
                alt="Rohit"
              />
              <div className="card-body">
                <h3 className="card-title">Rohit Bandi</h3>
                <p className="card-text">3rd year Mathematics</p>
                <p>
                  <em>Major Responsibilities: </em>
                  Scraping APIs and creating backend databases, deploying on GCP, created backend api for React, creating Restful API on Postman
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">40 Commits</li>
                <li className="list-group-item">12 Issues</li>
                <li className="list-group-item">2 Unit Tests</li>
              </ul>
            </div>
          </div>

          {/*MOHAMMAD*/}
          <div className="col">
            <div className="card mx-auto" style={{ width: "18rem", textAlign: "center" }}>
              <img
                className="card-img-top"
                src={mohammedmehboob}
                alt="Mohammed"
              />
              <div className="card-body">
                <h3 className="card-title">Mohammed Mehboob</h3>
                <p className="card-text">3rd year Psychology</p>
                <p>
                  <em>Major Responsibilities: </em>
                  Scraping APIs for data and making the data look presentable (clean/neat), working on frontend to make the site interactable, working on backend  
                  to create tables used to access data, working on instance pages and linking between pages for models
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">20 Commits</li>
                <li className="list-group-item">14 Issues</li>
                <li className="list-group-item">1 Unit Tests</li>
              </ul>
            </div>
          </div>

          {/*KACEY*/}
          <div className="col">
            <div className="card mx-auto" style={{ width: "18rem", textAlign: "center" }}>
              <img
                className="card-img-top"
                src={kaceyna}
                alt="Kacey"
              />
              <div className="card-body">
                <h3 className="card-title">Kacey Na</h3>
                <p className="card-text">
                  3rd year Arts and Entertainment Technologies
                </p>
                <p>
                  <em>Major Responsibilities: </em>
                  Creating "About Page" with html and formatting with Bootstrap, helping migrating site to React, writing unit tests on external and internal databases,
                  creating search capability for each page
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">21 Commits</li>
                <li className="list-group-item">9 Issues</li>
                <li className="list-group-item">2 Unit Tests</li>
              </ul>
            </div>
          </div>

          {/*JI HWAN*/}
          <div className="col">
            <div className="card mx-auto" style={{ width: "18rem", textAlign: "center" }}>
              <img
                className="card-img-top"
                src={jihwanpark}
                alt="Ji Hwan"
              />
              <div className="card-body">
                <h3 className="card-title">Ji Hwan Park</h3>
                <p className="card-text">3rd year Mechanical Engineering</p>
                <p>
                  <em>Major Responsibilities: </em>
                  Phase I Leader. and in charge of frontend/splash page, navigation, migrating site to React, pagination, 
                  working on instance pages and linking between pages for models
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">66 Commits</li>
                <li className="list-group-item">11 Issues</li>
                <li className="list-group-item">1 Unit Tests</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/*SIDEBAR*/}
      <div className="card mx-auto border-0" style={{ width: "35rem" }}>

        {/*STATS*/}
        <h2 className="card-title text-center">Stats</h2>
        <div className="card mx-auto text-center" style={{ width: "25rem" }}>
          <div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">153 Total Commits</li>
              <li className="list-group-item">56 Total Issues</li>
              <li className="list-group-item">7 Total Unit Tests</li>
              <li className="list-group-item">
                <div>
                  <a
                    className="card-link"
                    href="https://gitlab.com/jihwan98/cs331e/-/issues"
                  >
                    Gitlab Issue Tracker
                  </a>
                  <a
                    className="card-link"
                    href="https://gitlab.com/jihwan98/cs331e"
                  >
                    GitLab Repo
                  </a>
                  <a
                    className="card-link"
                    href="https://gitlab.com/jihwan98/cs331e/-/wikis/Technical-Report-Phase-3"
                  >
                    GitLab Wiki
                  </a>
                </div>
              </li>
              <li className="list-group-item">
                <a className="card-link" href="https://speakerdeck.com/mohamfur/all-about-soccer">Speaker Deck Presentation</a>
              </li>
            </ul>
          </div>
        </div>
        <br /> <br />
        {/*DATA*/}
        <h2 className="card-title text-center">Data</h2>
        <div className="card mx-auto text-center" style={{ width: "25rem" }}>
          <div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div>
                    <a className="card-link" href="https://www.api-football.com/">
                      API-Football
                    </a>
                    <br></br>
                    <p>
                      The data was scraped using HTTP Client GET requests using the API Football interface. All the API calls returned JSON
                      files that were then stored into folders with the corresponding pillar that it was associated with.
                    </p>
                  </div>
                </li>
                <li className="list-group-item">
                  <a className="card-link" href="https://documenter.getpostman.com/view/26765102/2s93RZL93h">
                    Postman Documentation
                  </a>
                </li>
              </ul>
            
          </div>
        </div>
        <br /> <br />
        
        {/*TOOLS*/}
        <h2 className="card-title text-center">Tools</h2>
        <div className="card mx-auto text-center" style={{ width: "25rem" }}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Bootstrap</li>
            <li className="list-group-item">Coverage</li>
            <li className="list-group-item">Discord</li>
            <li className="list-group-item">Flask</li>
            <li className="list-group-item">Git</li>
            <li className="list-group-item">GitLab</li>
            <li className="list-group-item">Google Cloud Platform (GCP)</li>
            <li className="list-group-item">Namecheap</li>
            <li className="list-group-item">PlanningPoker</li>
            <li className="list-group-item">Postman</li>
            <li className="list-group-item">PostgreSQL</li>
            <li className="list-group-item">React</li>
            <li className="list-group-item">Speaker Deck</li>
            <li className="list-group-item">SQLAlchemy</li>
            <li className="list-group-item">unittest</li>
            <li className="list-group-item">Visual Studio Code</li>
          </ul>
        </div>

        <br /> <br />
        <h2 className="card-title text-center">Unit Tests</h2>
        <div className="card mx-auto text-center" style={{ width: "25rem" }}>
          <button type="button" className="btn btn-primary" onClick={runTests}>Click to Run Unit Tests</button>
          <img src={unitTestImage} alt="(Unit Test Results)"></img>
        </div>
      </div>
    </div>
    <br />
  </>


  );
};

export default About;
