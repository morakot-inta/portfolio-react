import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="grid gap-y-4">
      <div className="text-3xl text-primary-title font-semibold">
        Morakot Inta
      </div>
      <div className="text-primary-context font-semibold">
        Cloud Solution Architecture - between jobs
      </div>
      <div className="text-primary-subcontent text-sm w-5/6">
        From concept to reality, bridging the gap between business and
        technology.
      </div>
      <div className="">
        <button className="font-semibold  rounded-xl bg-primary-title p-3 text-primary-background">
          View Resume{" "}
          <FontAwesomeIcon icon={faArrowLeft} className="animate-bounce" />
        </button>
      </div>
    </div>
  );
}

export default Header;
