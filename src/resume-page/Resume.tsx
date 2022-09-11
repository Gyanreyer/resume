import ExperienceEntry from "./ExperienceEntry";
import SkillsList from "./SkillsList";
import DownloadIcon from "./DownloadIcon";

import * as styles from "./Resume.css";

export default function Resume() {
  return (
    <main className={styles.main} id="resume">
      <aside className={styles.sidebar}>
        <h1 className={styles.headline}>ryan geyer</h1>
        <h2 className={styles.subheadline}>creative web developer</h2>
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
            title="Full-Stack Software Developer"
            subtitle="Waymark, Detroit, MI · July 2018 - Present"
            summaryPoints={[
              "Primarily work on the product team to build new features for the user-facing portion of the Waymark web app",
              "Led various initiatives to improve infrastructure, developer experience, and site performance",
              [
                "Implemented progressive image loading to improve page load times",
                "Started migrating the existing codebase to TypeScript",
                "Researched and established new best practices for global state management",
              ],
              "Worked on several high value projects as the sole developer, including implementing a complete re-design of the site's video editor UI",
            ]}
            techStack={[
              "TypeScript, React.js, Apollo, Emotion (CSS-in-JS)",
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
              "An open source React component library for rendering videos that play on hover, including support for mouse and touch events and a simple API for adding thumbnails and loading states",
              "Over 100,000 downloads via npm to date",
            ]}
            techStack={["TypeScript, React.js, Cypress, CircleCI"]}
          />
        </section>
      </article>
    </main>
  );
}
