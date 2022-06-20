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
          My name is Antonio Shivers. I'm a full stack software engineer, I am
          currently a pursuit fellow enrolled in the 8.3 cohort. My interests
          include: Computer programming, playing video games, watching anime and
          cartoons. A long term goal of mine is to transition into video game
          engineering after I have gained more experience as a software
          engineer. If you would like to see some of the stuff I have worked on
          feel free to check out my GitHub!
        </p>
        <p className="firstNames">
          <strong>Abdullah</strong>
          <br />
          My name is Abdullah Tasfiek. I'm a software engineer from the 8.3
          cohort at Pursuit. Other than programming, I enjoy going on hikes,
          weight lifting, and playing video games. I goal of mine is to get a
          work from home software engineering job so I can travel more often. I
          don't want to be a programmer that stays inside all day. I encourage
          software engineers to be more active and adventurous! If you would
          like to know more about me, check out my Github!
        </p>
        <p className="firstNames">
          <strong>Cesar</strong>
          <br />
          My name is Cesar Ortiz. I'm a full stack software engineer currently
          enrolled in the pursuit fellowship. Pursuit is a 12 month training
          program with a 9% acceptance rate.
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
        <section id="description">
          <p>
            This application was created by the GitHub organization{" "}
            <strong>GalaticGamingBros</strong>
          </p>
          <p>
            This is our youtube app. This app allows you to search for videos
            that are currently on youtube. You can then click on any of the
            video's thumbnail and watch that video.
          </p>
          <p>
            While you're on the video's page you can fill out a comment form
            which you can then submit in order to leave a comment which will be
            shown immediately.
          </p>
        </section>
        <ul id="techList">
          <strong>Technologies</strong>
          <li>HTML</li>
          <li>SCSS</li>
          <li>Javascript</li>
          <li>ReactJs</li>
          <li>Netlify</li>
          <li>Youtube API</li>
        </ul>
      </section>
      <footer id="aboutFooter">
        Youtube Clone{" "}
        <a
          href="https://github.com/GalaticGamingBros"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="dark" id="galaticButton">
            ©GalaticGamingBros
          </Button>
        </a>
      </footer>
    </section>
  );
};

export default About;
