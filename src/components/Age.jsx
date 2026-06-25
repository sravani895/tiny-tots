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
    <section className="py-10 bg-white">
        {/* Heading */}
        <h2 className="text-center text-3xl font-bold text-blue-900 mb-8">
        🌿 Shop By Age 🌿
      </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ageGroups.map((item) => (
            <div
              key={item.id}
              className={`
                ${item.bg}
                rounded-3xl
                h-67.5
                relative
                overflow-hidden
                shadow-sm
                hover:shadow-md
                transition-all
                duration-300
              `}
            >
              {/* Text */}
              <div className="p-6 relative z-10">
                <h3
                  className={`text-3xl font-bold leading-tight ${item.text}`}
                >
                  {item.title.split("\n").map((line, index) => (
                    <div key={index}>{line}</div>
                  ))}
                </h3>

                <p className="mt-4 text-gray-600 text-lg">
                  {item.age}
                </p>

                <button
                  className={`
                    mt-6
                    w-10
                    h-10
                    rounded-full
                    bg-white
                    shadow
                    flex
                    items-center
                    justify-center
                    text-xl
                    font-bold
                    ${item.arrow}
                  `}
                >
                  →
                </button>
              </div>

              {/* Child Image */}
              <img
                src={item.image}
                alt={item.title}
                className="
                  absolute
                  bottom-0
                  right-2
                  h-50
                  object-contain
                  pointer-events-none
                "
              />
            </div>
          ))}
        </div>
    </section>
  );
};

export default ShopByAge;