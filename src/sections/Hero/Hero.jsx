import styles from "./HeroStyles.module.css";
import heroImage from "../../assets/RostykImg.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import xingLight from "../../assets/xing-light.svg";
import githubLight from "../../assets/github-light.svg";
import linkedInLight from "../../assets/linkedin-light.svg";
import xingDark from "../../assets/xing-dark.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedInDark from "../../assets/linkedin-dark.svg";
import CV from '../../assets/RostykCV.pdf'
import {useTheme} from '../../common/ThemeContext'

function Hero() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const xingIcon = theme === 'light' ? xingLight : xingDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedInIcon = theme === 'light' ? linkedInLight : linkedInDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImage}
          alt="Profile picture of Rostyslav Volos"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Rostyslav
          <br />
          Volos
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a target={'_blank'} href="https://www.xing.com/profile/Rostyslav_Volos/web_profiles?expandNeffi=true">
            <img src={xingIcon} alt="Xing icon" />
          </a>
          <a target={'_blank'} href="https://github.com/rostislavvolos">
            <img src={githubIcon} alt="GitHub icon" />
          </a>
          <a target={'_blank'} href="https://www.linkedin.com/in/rostyslav-volos-892a5b229/">
            <img src={linkedInIcon} alt="LinkedIn icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern React web apps for commercial
          businesses.
        </p>
        <a href={CV} download>
            <button className="hover">
                Resume
            </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
