import * as styles from "./SkillsList.css";

interface SkillsListProps {
  skills: string[];
}
export default function SkillsList({ skills }: SkillsListProps) {
  return (
    <ul className={styles.skillsList}>
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  );
}
