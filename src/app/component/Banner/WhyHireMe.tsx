"use client";
import Image from "next/image";
import { ImageShared } from "../shared";

export default function WhyHireMe() {
  return (
    <section className="bg-headingColor text-white py-10 px-6 sm:px-5 md:px-20 rounded-md flex flex-col sm:flex-row items-center gap-8 w-full mx-auto">
      <div className="w-full sm:w-1/2 flex justify-center">
        <Image
          src={ImageShared.Hero} 
          alt="Illustration"
          width={400}
          height={400}
          className="rounded-lg w-[250px] sm:w-[300px] md:w-[400px] h-auto"
        />
      </div>

      <div className="w-full sm:w-1/2 text-center sm:text-left">
        <h2 className="md:text-3xl text-2xl font-bold mb-4 text-white">
          Why hire me for your next project?
        </h2>
        <p className="text-gray-300 md:text-base text-sm leading-relaxed">
          I worked with a various background of clients and different types of products. 
          I help them to solve their business problems on the technology end.
        </p>
        <p className="text-gray-300 md:text-base text-sm leading-relaxed mt-4">
          I have a principle that is 
          <span className="italic"> stay simple and stay humble</span>. 
          I believe, simplicity hides a great deal of complexity and thoroughness. I see every 
          project as a process of solving a problem. Now it is time to solve your problems in detail, 
          in depth, and of course with simplicity.
        </p>
      </div>
    </section>
  );
}
