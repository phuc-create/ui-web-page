import React from "react";
import { Link } from "react-router-dom";
import VietnamFlag from "../../images/flag.png";
import Map from "../../images/map2.png";
import Icon1 from "../../images/logovn.png";
import Icon2 from "../../images/map.png";
import Icon3 from "../../images/woman.png";
import "./Dashboard.scss";
const Dashboard = () => {
  return (
    <div className="main">
      <HeroD />
      <Concept />
      <ConceptPart2 />
    </div>
  );
};

export default Dashboard;
const HeroD = () => {
  const [currentCount, setCount] = React.useState(0);

  const heroContents = [
    "UI for vietnamese people using",
    "The next generation.",
    "First UI framework in Vietnam.",
  ];
  React.useEffect(() => {
    const timer = () => {
      setCount(currentCount + 1);
    };
    if (currentCount > heroContents.length - 1) {
      setCount(0);
    }
    const id = setInterval(timer, 4500);
    return () => clearInterval(id);
  }, [currentCount, heroContents.length]);

  return (
    <div className="hero">
      <div className="hero__star"></div>
      {heroContents[currentCount]}
      <Link className="hero__linkExplore" to="/docs">
        Explore
      </Link>
    </div>
  );
};
const Concept = () => {
  return (
    <div className="concept">
      <div className="concept__header">vissual ui made by NHP</div>
      <div className="concept__container">
        <div className="concept__container--left">
          <p className="concept--intro">follow the passion of my life</p>
        </div>
        <div className="concept__container--right">
          <div className="concept-head">
            <img src={VietnamFlag} alt="Ui viet nam" />
            <span className="concept-head-title">Vi</span>-
            <span className="concept-head-title2">UI</span>
          </div>
          <div className="concept-middle">
            Did you know somthing about my country ?
          </div>
          <section className="country-introduction">
            <img src={Icon1} alt="My country Viet Nam" />
            <img src={Icon2} alt="My country Viet Nam" />
            <img src={Icon3} alt="My country Viet Nam" />
          </section>
          <div className="country-content">
            Instead of doing like a robot, let make your life meaningful, take
            in spirit from my current work, but just for fun !!!. I was there
            for the crazy things, I never even think about this, I do not have
            chance, conditions, choice, the only thing I have is ...
          </div>
        </div>
      </div>
    </div>
  );
};
const ConceptPart2 = () => {
  return (
    <div className="cc2">
      <div className="cc2__header">
        <span>Powerful</span>
        <span>
          Available in <p className="cc2--highlight">&nbsp;Viet Nam</p>
        </span>
      </div>
      <div className="cc2__container">
        <div className="cc2__container--left">
          <p className="cc2__container--left-title">COLORFUL ❤</p>
          <p className="cc2__container--left-content">
            I have no idea about how to create a UI library, and I put down a
            question why I like to make a new one, for my country, and I don't
            even know where to start.
          </p>
        </div>
        <div className="cc2__container--right">
          <div className="cc2-head">
            <img src={Map} alt="Ui viet nam" />
            <span className="cc2-head-title">COMING SOON...</span>
          </div>
          <div className="cc2-bottom">
            <div className="cc2-bottom--box">
              <img src={VietnamFlag} alt="Ui viet nam" />
              <span className="cc2-head-title">Vi-UI</span>
            </div>
            <div className="cc2-bottom--box">
              <img src={VietnamFlag} alt="Ui viet nam" />
              <span className="cc2-head-title">Vi-UI</span>
            </div>
            <div className="cc2-bottom--box">
              <img src={VietnamFlag} alt="Ui viet nam" />
              <span className="cc2-head-title">Vi-UI</span>
            </div>
          </div>
          <div className="cc2-bottom2">
            <div className="cc2-bottom2--box">
              <img src={VietnamFlag} alt="Ui viet nam" />
              <span className="cc2-head-title">Vi-UI</span>
            </div>
            <div className="cc2-bottom2--box">
              <img src={VietnamFlag} alt="Ui viet nam" />
              <span className="cc2-head-title">Vi-UI</span>
            </div>
            <div className="cc2-bottom2--box">
              <img src={VietnamFlag} alt="Ui viet nam" />
              <span className="cc2-head-title">Vi-UI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
