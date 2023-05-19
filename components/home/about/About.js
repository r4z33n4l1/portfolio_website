import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
        <Reveal>
  <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
    Hey there! I'm Razeen, a student at the University of Toronto. I've been coding for 6 years and I'm passionate about creating automation tools and web apps. Lately, I've been diving into developing web3 apps on the Solana blockchain ecosystem.
  </p>
</Reveal>
<Reveal>
  <p className={styles.aboutText}>
    I love sharing what I learn with others, especially teaching kids Python and robotics for FIRST Lego League. I also host workshops on various topics because I enjoy helping out on projects and learning new things. Oh, and Leetcode is my guilty pleasure!
  </p>
</Reveal>
<Reveal>
  <p className={styles.aboutText}>
    Outside of work and studies, you'll find me staying active with running, hitting the gym, playing tennis, and cycling. I'm also a cooking enthusiast who loves inventing new recipes. When I need some downtime, you'll catch me gaming—Valorant and Chess are my go-to favorites.
  </p>
</Reveal>
<Reveal>
  <p className={styles.aboutText}>
    Currently, I'm on the lookout for an internship to further grow as a developer and gain more experiences. I'm open to exciting opportunities, so let's chat!
  </p>
</Reveal>
<Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
