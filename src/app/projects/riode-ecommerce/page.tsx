'use client'
import { useState } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

const riodeImages = [
    // Authentication
    { name: "User-Friendly Login Page for Secure Access", src: "/assets/images/projects/Riode/Login.png" },
    { name: "Easy and Fast Registration Process", src: "/assets/images/projects/Riode/Register.png" },

    // Product Display & Quick View
    { name: "Detailed Product Page with High-Quality Images", src: "/assets/images/projects/Riode/ProductPage.png" },
    { name: "Quick View Feature for Instant Product Insights", src: "/assets/images/projects/Riode/QuichView.png" },

    // Cart & Shopping Process
    { name: "Seamless Add to Cart Experience", src: "/assets/images/projects/Riode/AddToCart.png" },
    { name: "Comprehensive Shopping Cart Overview", src: "/assets/images/projects/Riode/ShoppingCart.png" },

    // Search & Blog
    { name: "Advanced Search Functionality for Better Navigation", src: "/assets/images/projects/Riode/Search.png" },
    { name: "Engaging and Informative Blog Section", src: "/assets/images/projects/Riode/Blog.png" },
];



export default function Riode() {
    const [selectedImage, setSelectedImage] = useState<{ name: string; src: string } | null>(null);

    return (
        <section className="flex flex-col items-center text-center p-8">
            <h2 className="text-3xl font-bold mb-6 text-headingColor">Riode Ecommerce Website Overview</h2>
            <p className="text-gray-600 mb-10 max-w-2xl text-base">
                Riode is a modern and responsive eCommerce platform designed to enhance the shopping experience.
                Below are some key pages and features of the website.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {riodeImages.map((image) => (
                    <div
                        key={image.name}
                        className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform hover:scale-105 hover:shadow-xl"
                        onClick={() => setSelectedImage(image)}
                    >
                        <Image
                            src={image.src}
                            alt={image.name}
                            width={400}
                            height={250}
                            className="object-cover w-full h-60 rounded-t-lg"
                        />
                        <div className="p-4 bg-gray-100">
                            <h3 className="text-base font-light text-headingColor">{image.name}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* MODAL */}
            <Transition appear show={!!selectedImage} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={() => setSelectedImage(null)}>
                    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="relative bg-white rounded-lg shadow-xl p-6 max-w-3xl w-full">
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedImage(null)}
                                    className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-full p-2 transition"
                                >
                                    <XMarkIcon className="w-6 h-6" />
                                </button>

                                {/* Image Display */}
                                {selectedImage && (
                                    <div className="flex flex-col items-center">
                                        <Image
                                            src={selectedImage.src}
                                            alt={selectedImage.name}
                                            width={800}
                                            height={500}
                                            className="object-contain max-h-[70vh] w-auto rounded-lg"
                                        />
                                        <h3 className="text-base font-light text-headingColor mt-4">{selectedImage.name}</h3>
                                    </div>
                                )}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </section>
    );
}
