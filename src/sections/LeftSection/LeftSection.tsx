import Header from "../../components/Header/Header";
import Nav from "../../components/Nav/Nav";
import Link from "../../components/Link/Link";

const LeftSection = () => {
  return (
    <div>
      <div className="sticky top-14 grid grid-rows-[45%_45%_10%] h-[90vh]">
        <Header />
        <Nav />
        <Link />
      </div>
    </div>
  );
};

export default LeftSection;
