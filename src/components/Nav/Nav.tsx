import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
              <div>
            <div><FontAwesomeIcon icon={faArrowRight}/> About</div>
            <div>Experience</div>
            <div>Project</div>
            <div>Article</div>
          </div>
  )
}

export default Nav