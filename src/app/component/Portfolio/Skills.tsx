// 'use client';

// import {SkillShared} from "@/app/component/shared";

// const education = [
//     {
//         degree: 'Major: Information Technology - Senior Student ',
//         school: 'Thuy Loi University',
//         year: '2021 - 2025',
//     },
// ];

// export default function Skills() {
//     return (
//         <section className="flex flex-col w-full items-center text-center">
//             <div className="mt-8 w-full p-8 bg-white rounded-lg shadow-lg">
//                 <h2 className="text-2xl font-semibold mb-10 text-gray-700 text-left">
//                     Skills
//                 </h2>
//                 <ul className="space-y-10">
//                     {SkillShared.map((skill, index) => (
//                         <li key={index}>
//                             <div className="flex items-center gap-3 mb-5">
//                                 <span className="text-sm text-blue-500">
//                                     {skill.icon}
//                                 </span>
//                                 <h3 className="text-sm font-medium text-gray-800">
//                                     {skill.category}
//                                 </h3>
//                             </div>
//                             <div className="flex flex-wrap gap-2">
//                                 {skill.items.map((item, idx) => (
//                                     <span
//                                         key={idx}
//                                         className="text-sm px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
//                                         {item}
//                                     </span>
//                                 ))}
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             <div className="mt-8 w-full bg-white rounded-lg shadow-lg">
//                 {/* Education */}
//                 <div className="w-full p-8 mx-auto text-left">
//                     <h2 className="text-2xl font-semibold mb-4 text-gray-700 text-left">
//                         Education
//                     </h2>
//                     <div className="flex flex-col gap-2">
//                         {education.map((edu, index) => (
//                             <div
//                                 key={index}
//                                 className="bg-white text-[16px]">
//                                 <h3 className="text-gray-600">
//                                     {edu.degree}
//                                 </h3>
//                                 <p className="text-gray-600">
//                                     {edu.school}
//                                 </p>
//                                 <p className="text-gray-500">
//                                     {edu.year}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }


'use client';
import { SkillShared } from "@/app/component/shared";

export default function Skills() {
    const education = [
        {
            degree: 'Major: Information Technology - Senior Student ',
            school: 'Thuy Loi University',
            year: '2021 - 2025',
            GPA: 3.7
        },
    ];
    return (
        <section className="flex flex-col w-full items-center text-center">
            <div className="mt-8 w-full p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-xl md:text-2xl font-semibold mb-10 text-headingColor text-left">
                    Skills
                </h2>
                <ul className="space-y-10">
                    {SkillShared.map((skill, index) => (
                        <li key={index}>
                            <div className="flex items-center gap-3 mb-5">
                                <span className="text-sm text-headingColor">
                                    {skill.icon}
                                </span>
                                <h3 className="text-sm font-medium text-headingColor">
                                    {skill.category}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item, idx) => (
                                    <span
                                        key={idx}
                                        className="text-sm px-2 py-1 bg-bannerBgColor text-headingColor rounded-full">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>


            <div className="mt-8 w-full p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-xl md:text-2xl font-semibold mb-10 text-headingColor text-left">
                    Education
                </h2>
                <ul className="space-y-10 text-left">
                    {education.map((edu, index) => (
                        <div
                            key={index}
                            className="bg-white text-sm md:text-[16px] space-y-5">
                            <h3 className="text-gray-600">
                                {edu.degree}
                            </h3>
                            <p className="text-gray-600">
                                {edu.school}
                            </p>
                            <p className="text-gray-500">
                                {edu.year}
                            </p>
                            <p className="text-gray-500">
                                GPA: {edu.GPA}
                            </p>
                        </div>
                    ))}
                </ul>
            </div>
        </section>
    );
}