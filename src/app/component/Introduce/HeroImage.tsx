import Image from "next/image";

import {ImageShared} from "@/app/component/shared";

export default function HeroImage() {
    return (
        <Image 
            src={ImageShared.Avatar}
            width={580}
            height={580}
            alt="Avatar"
        />
    )
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
