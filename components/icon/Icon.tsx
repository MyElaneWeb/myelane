import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../icon/Icon.module.scss";

interface Props {
  iconChoice: any;
  heading: string;
  text: string;
}

const Icon: React.FC<Props> = ({ iconChoice, heading, text }) => {
  return (
    <div className={styles.icon}>
      <FontAwesomeIcon icon={iconChoice} />
      <h3>{heading}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Icon;
