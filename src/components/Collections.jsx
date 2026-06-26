import butterfly from "../assets/butterfly.jpg";
import rainbow from "../assets/rainbow.jpg";
import dino from "../assets/dino.jpg";
import flower from "../assets/flower.jpg";
import car from "../assets/car.jpg";
import star from "../assets/star.png";

const collections = [
  { id: 1, title: "Butterfly", img: butterfly, bg: "bg-pink-100" },
  { id: 2, title: "Rainbow", img: rainbow, bg: "bg-yellow-100" },
  { id: 3, title: "Dino", img: dino, bg: "bg-green-100" },
  { id: 4, title: "Floral", img: flower, bg: "bg-purple-100" },
  { id: 5, title: "Adventure", img: car, bg: "bg-blue-100" },
  { id: 6, title: "Everyday", img: star, bg: "bg-orange-100" },
];

const ShopByCollection = () => {
  return (
    <section className="py-5 bg-white">
  <div className="container">

    {/* Title */}
    <div className="row">
      <div className="col-12 text-center mb-3">
        <h2
          className="fw-bold"
          style={{
            color: "#1e3a8a",
            fontSize: "38px",
            fontFamily: "Baloo 2",
          }}
        >
          🌿 Shop By Collection 🌿
        </h2>
      </div>
    </div>

    {/* Collection Grid */}
    <div className="row justify-content-center g-4">
      {collections.map((item) => (
        <div
          key={item.id}
          className="col-6 col-md-4 col-lg-2 d-flex justify-content-center"
        >
          <div
            className={`${item.bg} rounded-4 shadow-sm text-center d-flex flex-column justify-content-center align-items-center`}
            style={{
              width: "195px",
              height: "210px",
              transition: "0.3s",
              cursor: "pointer",
            }}
          >
            <img
              src={item.img}
              alt={item.title}
              className="img-fluid"
              style={{
                width: "80px",
                height: "80px",
                objectFit: "contain",
              }}
            />

            <h5
              className="fw-bold mt-3 mb-1"
              style={{ fontFamily: "Baloo 2" }}
            >
              {item.title}
            </h5>

            <p className="text-muted mb-0">
              Collection
            </p>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>
  );
};

export default ShopByCollection;