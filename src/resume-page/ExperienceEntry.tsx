import * as styles from "./ExperienceEntry.css";

interface ExperienceEntryProps {
  title: string;
  subtitle: string;
  summaryPoints: Array<string | string[]>;
  techStack: string[];
}

export default function ExperienceEntry({
  title,
  subtitle,
  summaryPoints,
  techStack,
}: ExperienceEntryProps) {
  return (
    <div className={styles.experienceEntry}>
      <h3 className={styles.title}>{title}</h3>
      <div>
        <p className={styles.subtitle}>
          <em>{subtitle}</em>
        </p>
        <p className={styles.techStack}>
          {techStack.map((techStackEntry) => (
            <em key={techStackEntry}>{techStackEntry}</em>
          ))}
        </p>
        <ul>
          {summaryPoints.map((pointOrSubpointsArray) => {
            if (typeof pointOrSubpointsArray === "string") {
              return (
                <li key={pointOrSubpointsArray}>{pointOrSubpointsArray}</li>
              );
            } else {
              return (
                <ul key={pointOrSubpointsArray[0]}>
                  {pointOrSubpointsArray.map((nestedPoint) => (
                    <li key={nestedPoint}>{nestedPoint}</li>
                  ))}
                </ul>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}
