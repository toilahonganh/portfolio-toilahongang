'use client'
import Link from "next/link";
import Image from "next/image";
import { ImageShared } from "../component/shared";


const projects = [
  {
    name: "travel-saigon-360-and-3d",
    title: "Sai Gon 360 Panorama with 3D model AI",
    image: ImageShared.Projects.SaiGon360
  },
  {
    name: "project-2",
    title: "Sai Gon 360 Panorama with 3D model AI",
    image: ImageShared.Projects.SaiGon360
  },
  {
    name: "project-1",
    title: "Sai Gon 360 Panorama with 3D model AI",
    image: ImageShared.Projects.SaiGon360
  },
];

export default function Blogs() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link key={project.name} href={`/projects/${project.name}`} passHref>
            <div className="cursor-pointer">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={500}
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{project.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
