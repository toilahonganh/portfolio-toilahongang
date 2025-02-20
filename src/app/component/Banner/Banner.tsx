import { HeroImage, Introduce, SideIntroduce } from "../Introduce";

export default function Banner() {
    return (
        <div className="flex flex-col md:flex-row w-full min-h-[650px] md:h-[650px] bg-bannerBgColor items-center justify-center mx-5 md:px-20">
            <div className="w-full md:w-2/3 flex mt-0">
                    <SideIntroduce />
                    <HeroImage />
            </div>

            <div className="w-full md:w-1/3">
                <Introduce />
            </div>
        </div>
    );
}
