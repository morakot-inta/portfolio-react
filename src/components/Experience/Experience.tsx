import { faGithub, faReact, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Experience = () => {
  return (
    <div className="grid gap-y-8">
      <div>Experience</div>
      <div className="grid grid-cols-[1fr_3fr]">
        <div>
          <div>2022-2023</div>
          <div>image</div>
        </div>
        <div className="grid gap-y-4">
          <div>Portfolio</div>
          <div className="flex gap-2 text-2xl">
            <FontAwesomeIcon icon={faGithub}  />
            <FontAwesomeIcon icon={faYoutube}  />
          </div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique harum nesciunt consectetur sit deleniti assumenda nisi dicta nam neque voluptatum. Odio obcaecati voluptate praesentium quasi nostrum repellendus nobis nam esse.</div>
          <div className="flex gap-2 text-sm">
            <span className="bg-primary-title text-primary-background p-2 rounded-xl">React</span>
            <span className="bg-primary-title text-primary-background p-2 rounded-xl">TailwindCSS</span>
            <span className="bg-primary-title text-primary-background p-2 rounded-xl">TypeScript</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
