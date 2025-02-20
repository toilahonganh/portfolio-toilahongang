'use client'
import Link from "next/link";
import Image from "next/image";
import { ImageShared } from "../shared";

const projects = [
  {
    name: "travel-saigon-360-and-3d",
    title: "Sai Gon 360 Panorama with 3D model AI",
    image: ImageShared.Projects.SaiGon360
  },
  {
    name: "riode-ecommerce",
    title: "Riode Ecommerce Website",
    image: ImageShared.Projects.Riode.Product
  },
  {
    name: "leaves-disease-detection",
    title: "Leaves Disease Detection with YOLOv8",
    image: ImageShared.Projects.PotatoDesease
  },
];

export default function Blogs() {
  return (
    <section className="flex flex-col w-full items-center text-center">
      <div className="mt-8 w-full p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-xl md:text-2xl font-semibold mb-10 text-headingColor text-left">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link key={project.name} href={`/projects/${project.name}`} passHref>
              <div className="cursor-pointer hover:scale-105">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={500}
                  className="rounded-t-xl object-cover w-full h-[250px] group-hover:opacity-90"
                />
                <div className="p-4">
                  <h2 className="text-sm text-headingColor font-light transition duration-300 group-hover:text-primary">
                    {project.title}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
