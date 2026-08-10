import "./BrandStory.css";
// import background from "../../assets/background.png";
import mainBg from "../../assets/meet-tiny-bg.png";

const BrandStory = () => {
  return (
   <section
  className="brand-story mb-2"
  style={{
    backgroundImage: `url(${mainBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* Left Illustration */}
  <div className="brand-story__image">
    {/* <img src={background} alt="Tiny Monkey" /> */}
  </div>

  {/* Right Content */}
  <div className="brand-story__content">
    <h2 className="brand-story__title">
      Meet Tiny,
      <span>Our Little Monkey</span>
    </h2>

    <p className="brand-story__description">
      Tiny loves climbing, exploring and making new friends.
      Every Tiny Tots outfit is designed to inspire imagination,
      comfort and confidence in every child.
    </p>

    <button className="brand-story__button">
      OUR STORY
    </button>
  </div>
</section>
  );
};

export default BrandStory;