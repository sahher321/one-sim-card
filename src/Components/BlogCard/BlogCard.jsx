// components/BlogCard.jsx
import { ArrowUpRight } from "lucide-react";

export default function BlogCard({ image, author, date, title }) {
  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer">
      {/* Image Section */}
      <div className="relative w-full h-56 sm:h-60 bg-gray-100">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-[url('/placeholder-image.png')] bg-center bg-cover opacity-20" />
        )}
        <div className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-md">
          <ArrowUpRight className="w-4 h-4 text-[#455E86]" />
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="text-sm text-gray-500 font-medium mb-1">
          <span className="text-[#08080C] font-semibold">{author}</span> • {date}
        </div>
        <p className="text-[#08080C] text-base font-normal leading-relaxed">
          {title}
        </p>
      </div>
    </div>
  );
}
