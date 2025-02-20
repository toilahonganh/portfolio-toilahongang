
interface InfoSectionProps {
    openTime: string;
    title: string;
    subtitle: string;
    content: string[];
}
  
export default function InfoSection({ title, openTime, subtitle, content }: InfoSectionProps) {
    return (
        <div className="mx-10 py-10 md:mx-40 md:py-20">
            <h2 className="text-xl md:text-2xl font-roboto font-bold text-black border-b pb-2">{title}</h2>
            <p className="text-xs md:text-sm font-roboto font-normal">{openTime}</p>
            <p className="text-sm mt-2 md:text-base font-semibold text-black">{subtitle}</p>
            {content.map((paragraph, index) => (
                <p key={index} className="text-sm md:text-base mt-4 text-black">
                    {paragraph}
                </p>
            ))}
        </div>
    );
}
