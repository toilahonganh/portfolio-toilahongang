"use client";
import Image from "next/image";
import { ImageShared } from "../shared";

export default function WhyHireMe() {
  return (
    <section className="bg-headingColor text-w hite py-16 px-20 rounded-md flex items-center gap-10 w-full mx-auto">
      <div className="flex-shrink-0 w-1/2">
        <Image
          src={ImageShared.Hero} 
          alt="Illustration"
          width={400}
          height={400}
          className="rounded-lg"
        />
      </div>

      {/* Text Content */}
      <div className="w-1/2">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Why hire me for your next project?
        </h2>
        <p className="text-gray-300 leading-relaxed">
        I worked with a various background of client and different type of product. 
        I help them to solve their business problem on the technology end.
        </p>
        <p className="text-gray-300 leading-relaxed mt-4">
          I have a principle that is 
          <span className="italic">stay simple and stay humble</span>. 
          I believe, simplicity hides a great deal of complexity and thoroughness. I see every 
          project as a process of solving a problem. Now it is time to solve your problems in detail, 
          in depth, and of course with simplicity.
        </p>
      </div>
    </section>
  );
}
