import { GoDownload } from "react-icons/go";
import {TextsShared } from "../shared";

export default function Introduce() {
    return (
        <div className="max-w-3xl mx-auto flex flex-col items-start space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold no-underline text-headingColor">
                Web Developer based on Ho Chi Minh, Vietnam
            </h1>

            <p className="text-headingColor font-light text-[16px]">
                {TextsShared.IntroduceMySelf}
            </p>

            <div className="flex space-x-2 px-6 py-3 text-headingColor font-semibold items-center hover:cursor-pointer">
                <GoDownload />
                <a
                    href="/assets/files/CV_Internship_DinhHongAnh.pdf"
                    download="Resume_HongAnh.pdf"
                    className=""
                >
                    Download CV
                </a>
            </div>
        </div>
    );
}
