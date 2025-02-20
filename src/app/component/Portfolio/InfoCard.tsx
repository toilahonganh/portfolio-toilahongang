"use client"; // Cần thiết khi sử dụng state trong Next.js (App Router)

import { useState } from "react";
import Image from "next/image";

interface InfoCardProps {
  title: string;
  description: string;
  duration: string;
  imageUrl: string;
  gallery: string[];
  reviewCount: number;
}

export default function InfoCard({
  title,
  description,
  duration,
  imageUrl,
  gallery,
  reviewCount,
}: InfoCardProps) {
  const [mainImage, setMainImage] = useState(imageUrl);

  return (
    <div className="flex flex-col mt-10 mx-2 md:flex-row md:mx-40 bg-white shadow-lg rounded-xl overflow-hidden p-6">
      {/* Left Section */}
      <div className="md:w-2/5 p-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">{title}</h2>
        <p className="mt-2 text-sm md:text-base text-gray-700">{description}</p>
        <p className="mt-3 text-sm md:text-base text-gray-600 flex items-center">
        <span className="ml-2">{duration}</span>
        </p>
        <button className="mt-4 bg-black text-white px-6 py-2 rounded-full text-sm font-medium">
          See options
        </button>
      </div>

      {/* Right Section */}
      <div className="md:w-3/5 relative">
        <div className="w-[600px] h-[350px] relative">
          <Image
            src={mainImage}
            alt="Location Image"
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="absolute bottom-3 right-3 bg-black text-white text-xs px-3 py-1 rounded-full">
          📷 {reviewCount}
        </div>

        {/* Gallery */}
        <div className="flex space-x-2 mt-3 overflow-hidden">
          {gallery.map((img, index) => (
            <button key={index} onClick={() => setMainImage(img)}>
              <div className="w-[80px] h-[100px] relative">
                <Image
                  src={img}
                  alt="Gallery Image"
                  fill
                  className="rounded-md object-cover cursor-pointer hover:opacity-75 transition"
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
