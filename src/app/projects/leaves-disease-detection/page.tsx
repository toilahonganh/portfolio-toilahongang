'use client'
import { useState } from 'react';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';
import { Code, Database, Globe } from 'lucide-react';



const skills = [
    {
        category: 'Back-end Development (Python - Flask)',
        items: [
            'Develop RESTful APIs following the MVC architecture',
        ],
        icon: <Code size={20} />,
    },
    {
        category: 'Front-end Development (React Native)',
        items: [
            'Design and implement reusable UI components, build screens, and integrate backend APIs',
        ],
        icon: <Globe size={20} />,
    },
    {
        category: 'Database Management',
        items: ['Design and manage relational databases using MySQL'],
        icon: <Database size={20} />,
    },
];



const potatoImages = [
    { name: "Start Screen", src: "/assets/images/projects/PotatoDiseaseClassify/potato2.png" },
    { name: "Main Screen", src: "/assets/images/projects/PotatoDiseaseClassify/potato1.png" },
    { name: "Select Image Screen", src: "/assets/images/projects/PotatoDiseaseClassify/potato5.png" },
    { name: "Option Camera", src: "/assets/images/projects/PotatoDiseaseClassify/potato7.png" },
    { name: "Uploaded Image", src: "/assets/images/projects/PotatoDiseaseClassify/potato6.png" },
    { name: "Detected Screen", src: "/assets/images/projects/PotatoDiseaseClassify/potato4.png" },
    { name: "Detail Screen", src: "/assets/images/projects/PotatoDiseaseClassify/potato9.png" },
    { name: "History Screen", src: "/assets/images/projects/PotatoDiseaseClassify/potato3.png" },
];

export default function Potato() {
    const [selectedImage, setSelectedImage] = useState<{ name: string; src: string } | null>(null);

    return (
        <section className="flex flex-col items-center text-center md:px-20">
            <h2 className="text-xl md:text-3xl font-bold mb-4 text-headingColor">Potato Disease Classification App</h2>
            <div className="rounded-lg p-6 mb-10 w-full text-left">
                <h2 className="text-sm md:text-xl font-semibold mb-10 text-headingColor text-left">
                    My role in this project:
                </h2>
                <ul className="space-y-10">
                    {skills.map((skill, index) => (
                        <li key={index} className="flex items-center">
                            <div className="flex items-center gap-3">
                                <span className="text-sm md:text-sm text-headingColor">
                                    {skill.icon}
                                </span>
                                <h3 className="text-xs md:text-sm font-bold text-headingColor">
                                    {skill.category}:
                                </h3>
                            </div>
                            <div className="gap-2">
                                {skill.items.map((item, idx) => (
                                    <span
                                        key={idx}
                                        className="text-xs md:text-sm px-2 py-1 text-headingColor rounded-full">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="mt-10">
                    <span className="text-sm md:text-xl font-semibold text-headingColor text-left mb-20">Description:</span>
                    <br />
                    <br />
                    <span
                        className="text-xs md:text-sm font-light text-headingColor">
                In agriculture, early detection of plant diseases, especially in potatoes, plays a crucial role in protecting crops and improving yield. PotatoCare is designed to help farmers quickly and accurately identify diseases on potato leaves. The application leverages the deep learning model YOLOv8 to detect four common potato leaf diseases: Early Blight, Late Blight Nematode, Pest. Users simply upload an image of the potato leaf, and the system will automatically analyze it and return disease detection results in real time. With advanced computer vision technology, PotatoCare empowers farmers to make timely decisions for disease prevention and treatment, ultimately enhancing crop productivity and quality🚀🌱
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-10">
                    {potatoImages.map((image) => (
                        <div
                            key={image.name}
                            className="bg-white  cursor-pointer"
                            onClick={() => setSelectedImage(image)}
                        >
                            <Image
                                src={image.src}
                                alt={image.name}
                                width={400}
                                height={400}
                            />
                            <div className="p-4">
                                <h3 className="text-sm md:text-base font-medium text-headingColor">{image.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Popup khi nhấn vào ảnh */}
            {selectedImage && (
                <Dialog open={!!selectedImage} onClose={() => setSelectedImage(null)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 p-10">
                    <div className="relative bg-white rounded-lg p-6 max-w-5xl w-full h-auto">
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl"
                        >
                            &times;
                        </button>
                        <Image
                            src={selectedImage.src}
                            alt={selectedImage.name}
                            width={300}
                            height={300}
                        />
                        <h3 className="text-xl font-medium text-headingColor mt-4">{selectedImage.name}</h3>
                    </div>
                </Dialog>
            )}
        </section>
    );
}
