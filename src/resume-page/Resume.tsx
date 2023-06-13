import ExperienceEntry from "./ExperienceEntry";
import SkillsList from "./SkillsList";
import DownloadIcon from "./DownloadIcon";

import * as styles from "./Resume.css";

export default function Resume() {
  return (
    <main className={styles.main} id="resume">
      <aside className={styles.sidebar}>
        <h1 className={styles.headline}>ryan geyer</h1>
        <h2 className={styles.subheadline}>front-end engineer</h2>
        <h3 className={styles.sectionHeading}>skills</h3>
        <SkillsList
          skills={[
            "JavaScript",
            "TypeScript",
            "React",
            "HTML",
            "CSS",
            "GraphQL",
            "Python",
            "Django",
            "PostgreSQL",
            "Git",
          ]}
        />
        <h3 className={styles.sectionHeading}>education</h3>
        <p className={styles.sidebarSectionParagraph}>
          <strong>B.S. Game Design and Development</strong>
          <br />
          <em>
            Rochester Institute of Technology
            <br />
            Rochester, NY &middot; 2018
            <br />
            Graduated cum laude
          </em>
        </p>
        <a
          href="/Ryan-Geyer-Resume.pdf"
          download="Ryan-Geyer-Resume.pdf"
          title="Download PDF"
          className={styles.downloadLink}
        >
          <DownloadIcon />
        </a>
      </aside>
      <article className={styles.mainArticle}>
        <section>
          <h2 className={styles.sectionHeading}>Summary</h2>
          <p>
            Web developer with a strong passion for building applications that
            are delightful to use. Very detail-oriented and possess strong
            experience with TypeScript, React, and CSS, although I am always
            keeping up with the latest new developments in the front-end tech
            landscape.
          </p>
        </section>
        <section>
          <h2 className={styles.sectionHeading}>Experience</h2>
          <ExperienceEntry
            title="Lead Front-end Engineer"
            subtitle="Waymark, Detroit, MI · July 2018 - Present"
            summaryPoints={[
              "Full-Stack Software Engineer from July 2018 - September 2022.",
              ["Promoted to lead Waymark's newly-formed front-end team"],
              "Led various initiatives to improve infrastructure, developer experience, accessibility, and site performance",
              "Worked on several high value projects as the sole developer, including:",
              [
                "Executed on a full rebuild of the Waymark video editor UI from the ground up",
                "Built out UIs for core Waymark template browser and AI video generator flows",
                "Wrote a Puppeteer web scraper to extract relevant brand info from a website",
              ],
            ]}
            techStack={[
              "TypeScript, React.js, Apollo, Vanilla Extract, Nx",
              "Python, Django, Graphene (GraphQL), PostgreSQL",
            ]}
          />
        </section>
        <section>
          <h2 className={styles.sectionHeading}>Projects</h2>
          <ExperienceEntry
            title="React Hover Video Player"
            subtitle="react-hover-video-player.dev · March 2020 - Present"
            summaryPoints={[
              "An open source React component library for rendering video previews that play on hover",
              "Over 220,000 downloads via npm to date",
              "Also maintain a vanilla web component version of the library",
            ]}
            techStack={["TypeScript, React.js, Playwright, Github Actions"]}
          />
        </section>
      </article>
    </main>
  );
}
