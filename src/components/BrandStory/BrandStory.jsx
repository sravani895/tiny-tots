import "./BrandStory.css";

import monkey from "../../assets/monkey-logo-1.png";
import leftLeaf from "../../assets/leaf-left.png";
import rightLeaf from "../../assets/leaf-right.png";

const BrandStory = () => {
  return (
    <section className="brand-story">

      <img
        src={leftLeaf}
        alt=""
        className="leaf left-leaf"
      />

      <div className="brand-image">
        <img
          src={monkey}
          alt="Tiny Monkey"
        />
      </div>

      <div className="brand-content">

        <h2>
          Meet Tiny,
          <span>Our Little Monkey</span>
        </h2>

        <p>
          Tiny loves climbing, exploring and making new friends.
          Every Tiny Tots outfit is designed to inspire imagination,
          comfort and confidence in every child.
        </p>

        <button>
          OUR STORY
        </button>

      </div>

      <img
        src={rightLeaf}
        alt=""
        className="leaf right-leaf"
      />

    </section>
  );
};

export default BrandStory;