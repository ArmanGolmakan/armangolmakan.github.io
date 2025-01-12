import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/arman-pfp.png";
import instagramDark from "../../assets/instagram-dark.svg";
import githubDark from "../../assets/gh.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";

import CV from "../../assets/cv.pdf";

function Hero() {
  const instagramIcon = instagramDark;
  const githubIcon = githubDark;
  const linkedinIcon = linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Arman Golmakan profile picture"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Arman <br /> Golmakan
        </h1>
        <h2>Fullstack Developer</h2>
        <span>
          <a href="https://github.com/ArmanGolmakan" target="_blank">
            <img src={githubIcon} width="50px" alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/arman1996/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://www.instagram.com/arman9g/" target="_blank">
            <img src={instagramIcon} alt="Instagram icon" />
          </a>
        </span>
        <p className={styles.description}>
          Hi there! I'm Arman, a software developer based in Toronto. I enjoy
          building softwares, websites, games, basically anything to do with
          coding.
        </p>
        <a href={CV}>
          <button className="hover" download>
            Resume
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
