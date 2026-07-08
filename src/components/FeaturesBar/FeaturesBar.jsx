import "./FeaturesBar.css";
import { features } from "./data";

const FeaturesBar = () => {
  return (
    <section className="features">
      <div className="features-container">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div className="feature-card" key={index}>
              <div className="feature-icon">
                <Icon />
              </div>

              <div className="feature-text">
                <h4>{feature.title}</h4>
                <p>{feature.subtitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturesBar;