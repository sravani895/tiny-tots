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
    <section className="py-10 bg-white">
      {/* Title */}
      <h2 className="text-center text-3xl font-bold text-blue-900 mb-8">
        🌿 Shop By Collection 🌿
      </h2>

      {/* Collection Grid */}
      <div className="flex justify-center gap-6 flex-wrap lg:flex-nowrap">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 place-items-center">
          {collections.map((item) => (
            <div
              key={item.id}
              className={`w-40 h-48 ${item.bg} rounded-3xl flex flex-col items-center justify-center shadow-md hover:shadow-lg transition duration-300`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-20 h-20 object-contain"
              />

              <h3 className="text-lg font-bold mt-3">{item.title}</h3>
              <p className="text-sm text-gray-700">Collection</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCollection;