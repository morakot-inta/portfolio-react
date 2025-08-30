import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Link = () => {
  return (
    <div className="flex space-x-4 text-4xl text-primary-subcontent">
      <FontAwesomeIcon icon={faFacebook} className="hover:text-primary-title" />
      <FontAwesomeIcon icon={faGithub} className="hover:text-primary-title" />
      <FontAwesomeIcon icon={faLinkedin} className="hover:text-primary-title" />
    </div>
  );
};

export default Link;
