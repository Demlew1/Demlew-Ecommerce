import { FaSeedling } from "react-icons/fa";
import { TbDatabaseEdit } from "react-icons/tb";
import { MdRebaseEdit } from "react-icons/md";
import { GiAppleSeeds } from "react-icons/gi";
const valuesData = [
  {
    icon: <TbDatabaseEdit className="text-cyan-700 text-2xl" />,
    title: "Fast Delivery",
    desc: "Same-day shipping for orders placed before 3 PM.",
  },
  {
    icon: <MdRebaseEdit className="text-cyan-700 text-2xl" />,
    title: "Secure Payments",
    desc: "100% encrypted transactions for your safety.",
  },
  {
    icon: <FaSeedling className="text-cyan-700 text-2xl" />,
    title: "24/7 Support",
    desc: "Dedicated customer service team always ready to help.",
  },
  {
    icon: <GiAppleSeeds className="text-cyan-700 text-2xl" />,
    title: "Easy Returns",
    desc: "Hassle-free returns within 30 days of purchase.",
  },
];
export default function HomePromotion() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6">
      <h2 className="text-3xl sm:text-4xl font-bold text-cyan-900 font-['Rubik'] text-center mb-12">
        Why Choose <span className="text-cyan-700">Demlew</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {valuesData.map((value, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg border border-cyan-100 hover:bg-cyan-50 transition-all cursor-pointer"
          >
            <div className="bg-cyan-50 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
              {value.icon}
            </div>
            <h3 className="text-xl font-semibold text-center font-['Montserrat'] mb-3 text-cyan-900">
              {value.title}
            </h3>
            <p className="text-gray-600 text-center font-['Montserrat'] text-sm">
              {value.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
