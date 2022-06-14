import { Button } from "react-bootstrap";
import "./About.scss";

const About = () => {
  return (
    <section id="aboutSection">
      <h1 id="aboutHeader">About</h1>
      <section id="bioSection">
        <h3 className="headerTitles">Bios</h3>
        <p className="firstNames">
          <strong>Antonio</strong>
          <br />
          lorem ipsum lolodsfbdsfffbdsfsdfsdfff sfsddfdsfdsfsdfsdfsf
          sfdsfsdfsdfsdfsdfds fsfdsfdsfsfsfds
        </p>
        <p className="firstNames">
          <strong>Abdullah</strong>
          <br />
          lorem ipsum lolodsfbdsfffbdsfsdfsdfff sfsddfdsfdsfsdfsdfsf
          sfdsfsdfsdfsdfsdfds fsfdsfdsfsfsfds
        </p>
        <p className="firstNames">
          <strong>Cesar</strong>
          <br />
          lorem ipsum lolodsfbdsfffbdsfsdfsdfff sfsddfdsfdsfsdfsdfsf
          sfdsfsdfsdfsdfsdfds fsfdsfdsfsfsfds
        </p>
      </section>

      <section id="githubSection">
        <h3 className="headerTitles">GitHubs</h3>

        <div className="githubButton">
          <a
            href="https://github.com/gitlep1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="dark">Antonio Shivers</Button>
          </a>
        </div>

        <div className="githubButton">
          <a
            href="https://github.com/Abdullah-Tasfiek"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="dark">Abdullah Tasfiek</Button>
          </a>
        </div>

        <div className="githubButton">
          <a
            href="https://github.com/CeazTheMoment"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="dark">Cesar Ortiz</Button>
          </a>
        </div>
      </section>

      <section id="descriptionSection">
        <h3 className="headerTitles" id="descriptionTitle">
          Description
        </h3>
        <p id="description">
          This application was created by the GitHub organization{" "}
          <strong>GalaticGamingBros</strong>
        </p>
        <ul id="techList">
          <strong>Technologies Used:</strong>
          <li>HTML</li>
          <li>SCSS</li>
          <li>ReactJs</li>
          <li>Netlify</li>
        </ul>
      </section>
    </section>
  );
};

export default About;
