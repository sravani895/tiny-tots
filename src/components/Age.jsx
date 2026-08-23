import toddler from "../assets/2-4-boy.png";
import child46 from "../assets/4-6-girl.png";
import child68 from "../assets/6-8-boy.png";
import child810 from "../assets/8-10-girl.png";

const ageGroups = [
  {
    id: 1,
    title: "Tiny\nExplorers",
    age: "2 - 4 Years",
    image: toddler,
    bg: "bg-[#EAF4FF]",
    text: "text-[#1D4E89]",
    arrow: "text-[#6EA8FF]",
  },
  {
    id: 2,
    title: "Little\nDreamers",
    age: "4 - 6 Years",
    image: child46,
    bg: "bg-[#FFF0F5]",
    text: "text-[#E98AA9]",
    arrow: "text-[#F39AB8]",
  },
  {
    id: 3,
    title: "Junior\nAdventurers",
    age: "6 - 8 Years",
    image: child68,
    bg: "bg-[#FFF6E8]",
    text: "text-[#E59A2E]",
    arrow: "text-[#F4B247]",
  },
  {
    id: 4,
    title: "Growing\nStars",
    age: "8 - 10 Years",
    image: child810,
    bg: "bg-[#F4FAE8]",
    text: "text-[#76A84F]",
    arrow: "text-[#95C86D]",
  },
];

const ShopByAge = () => {
  return (
   <section className="py-5 pt-0 bg-white">
  <div className="container">

    {/* Heading */}
    <div className="row">
      <div className="col-12 text-center mb-5">
        <h2
          className="fw-bold"
          style={{
            color: "#1e3a8a",
            fontSize: "clamp(24px, 5vw, 38px)",
            fontFamily: "Baloo 2",
          }}
        >
          🌿 Shop By Age 🌿
        </h2>
      </div>
    </div>

    {/* Cards */}
    <div className="row g-4">
      {ageGroups.map((item) => (
        <div
          key={item.id}
          className="col-12 col-sm-6 col-lg-3"
        >
          <div
            className={`${item.bg} rounded-4 shadow-sm position-relative overflow-hidden h-100`}
            style={{
              minHeight: "270px",
              transition: "0.3s",
              cursor: "pointer",
            }}
          >
            {/* Content */}
            <div className="p-4 position-relative" style={{ zIndex: 2 }}>
              <h3
                className="fw-bold lh-sm"
                style={{
                  color: item.textColor,
                  fontSize: "clamp(24px, 5vw, 30px)",
                  fontFamily: "Baloo 2",
                }}
              >
                {item.title.split("\n").map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </h3>

              <p
                className="mt-3 text-secondary"
                style={{
                  fontSize: "clamp(15px, 4vw, 18px)",
                  whiteSpace: "pre-line",
                }}
              >
                {item.age}
              </p>

              <button
                className="btn rounded-circle bg-white shadow d-flex align-items-center justify-content-center mt-4"
                style={{
                  width: "42px",
                  height: "42px",
                  color: item.arrowColor,
                  fontSize: "20px",
                  fontWeight: "700",
                }}
              >
                →
              </button>
            </div>

            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="position-absolute"
              style={{
                right: "10px",
                bottom: "0",
                height: "200px",
                objectFit: "contain",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>
      ))}
    </div>

  </div>
</section>
  );
};

export default ShopByAge;