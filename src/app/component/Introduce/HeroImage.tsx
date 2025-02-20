import Image from "next/image";

import {ImageShared} from "@/app/component/shared";

export default function HeroImage() {
    return (
        <div className="flex justify-center">
            <Image 
                src={ImageShared.Avatar}
                width={580}
                height={580}
                alt="Avatar"
                className="w-[300px] md:w-[500px] h-auto"
                sizes="(max-width: 640px) 300px, (max-width: 768px) 400px, (max-width: 1024px) 500px, 580px"
            />
        </div>
    );
}

// "use client";

// import { useState } from "react";
// import Image from "next/image";

// import { ImageShared } from "@/app/component/shared";

// export default function HeroImage() {
//     const [imageSrc, setImageSrc] = useState(ImageShared.Avatar);

//     const handleImageClick = () => {
//         setImageSrc(prev => prev === ImageShared.Avatar ? ImageShared.OtherAvatar : ImageShared.Avatar);
//     };

//     return (
//         <Image
//             src={imageSrc}
//             width={580}
//             height={580}
//             alt="Avatar"
//             className="cursor-pointer"
//             onClick={handleImageClick}
//         />
//     );
// }
