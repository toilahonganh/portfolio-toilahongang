'use client'
import { ImageShared, TextsShared } from "../shared";
import Image from "next/image";

export default function SideIntroduce() {
    const handleClick = () => {
        window.open(`${TextsShared.SocialMedia.Facebook}`, "_blank");
    };

    const handleOpenGithub = () => {
        window.open(`${TextsShared.SocialMedia.Github}`, "_blank");
    };

    const handleOpenLinkedIn = () => {
        window.open(`${TextsShared.SocialMedia.LinkedIn}`, "_blank");
    };

    const handleOpenInstagram = () => {
        window.open(`${TextsShared.SocialMedia.Instagram}`, "_blank");
    };

    return (
        <div className="flex flex-col items-start">
            <div className="mb-10">
                <p className="font-bold text-orange-500">Hi, I am</p>
                <p
                    className="text-4xl text-headingColor font-semibold relative cursor-pointer"
                    onClick={handleClick}
                >
                    {TextsShared.Name}
                    <span className="block w-full h-1 bg-orange-500 mt-5"></span>

                </p>
            </div>

            <div className="flex space-x-7">
                <div className="hover:opacity-50" onClick={handleOpenLinkedIn}>
                    <Image
                        src={ImageShared.LinkedIn}
                        width={25}
                        height={25}
                        alt="LinkedIn"
                        className="hover:underline"
                    />
                </div>

                <div className="hover:opacity-50" onClick={handleOpenGithub}>
                    <Image
                        src={ImageShared.Github}
                        width={25}
                        height={25}
                        alt="Github"
                    />
                </div>

                <div className="hover:opacity-50" onClick={handleOpenInstagram}>
                    <Image
                        src={ImageShared.Instagram}
                        width={25}
                        height={25}
                        alt="Instagram"
                        className="object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
