import Image from "next/image";
import { InfoSection, ImagePanorama, InfoCard } from "@/app/component/Portfolio"
import { ImageShared } from "../../component/shared";

export default function Page() {
    const mapUrl = "https://www.google.com/maps/search/?api=1&query=Nguyen+Van+Binh+Street,+Ben+Nghe,+District+1,+Ho+Chi+Minh+City";

    return (
        <>
            {/* Banner */}
            <div className="md:px-40">
                <ImagePanorama
                    images={[
                        ImageShared.NhaSach.duongsach1,
                        ImageShared.NhaSach.duongsach2,
                        ImageShared.NhaSach.duongsach3,
                        ImageShared.NhaSach.duongsach4,
                        ImageShared.NhaSach.duongsach5,
                        ImageShared.NhaSach.duongsach6,
                    ]}
                    text="Ho Chi Minh City's Book Street"
                    address="Nguyen Van Binh Street, Ben Nghe, District 1, Ho Chi Minh City"
                />
            </div>

            <InfoCard
                title="About"
                description="Located in the heart of the city, this charming street is lined with bookstores, coffee shops, and cultural events, making it a paradise for readers and literary enthusiasts.
Whether you're looking for the latest bestsellers or rare editions, Book Street offers a diverse collection of books in various languages."
                duration="< 1 hour"
                imageUrl={ImageShared.NhaSach.duongsach1}
                gallery={[
                    ImageShared.NhaSach.duongsach1,
                    ImageShared.NhaSach.duongsach2,
                    ImageShared.NhaSach.duongsach3,
                    ImageShared.NhaSach.duongsach4,
                    ImageShared.NhaSach.duongsach5,
                    ImageShared.NhaSach.duongsach6,
                ]}
                reviewCount={9738}
            />

            {/* Info Section */}

            <InfoSection
                title="Ho Chi Minh City's Book Street"
                openTime="Open now 8:00 AM - 4:00 PM"
                subtitle="A vibrant hub for book lovers, Ho Chi Minh City's Book Street is a must-visit destination."
                content={[
                    "Located in the heart of the city, this charming street is lined with bookstores, coffee shops, and cultural events, making it a paradise for readers and literary enthusiasts.",
                    "Whether you're looking for the latest bestsellers or rare editions, Book Street offers a diverse collection of books in various languages.",
                ]}
            />

            {/* Image Gallery */}
            {[
                {
                    image: ImageShared.NhaSach.duongsach1,
                    description: "📖 The welcoming entrance to Nguyen Van Binh Book Street is a vibrant and inviting space that immediately captivates visitors. The street is lined with tall trees providing shade, while decorative book-themed displays create a unique literary ambiance. Right from the entrance, you can feel the passion for books as people stroll around, exploring different bookstores and enjoying the peaceful yet lively environment. On weekends, you might even find pop-up book fairs and art performances happening right at the entrance, making it a must-visit destination for book lovers.",
                },
                {
                    image: ImageShared.NhaSach.duongsach2,
                    description: "📚 A row of charming bookstores showcases a diverse selection of books in multiple languages, from Vietnamese literature to international bestsellers. Each bookstore has its own unique style—some focus on academic books, others on fiction, history, or even manga and graphic novels. The beautifully arranged bookshelves and cozy interiors invite visitors to take their time and browse through an endless collection. Many of these stores also sell stationery, bookmarks, and literary-themed souvenirs, making it a perfect place to find a thoughtful gift.",
                },
                {
                    image: ImageShared.NhaSach.duongsach3,
                    description: "🌳 A peaceful outdoor reading area allows visitors to immerse themselves in a book while enjoying the fresh air. The wooden benches and small tables scattered around the area create a cozy atmosphere, perfect for readers who want to take a break and dive into their favorite stories. On some days, authors host book signings or casual discussion sessions right in these open spaces, making it an ideal spot for literary enthusiasts to engage with like-minded people. Whether you’re a solo reader or with friends, this quiet corner of Book Street is a haven of tranquility amid the bustling city.",
                },
                {
                    image: ImageShared.NhaSach.duongsach4,
                    description: "🎭 Live book readings, author meet-ups, and cultural events frequently bring Book Street to life. The small open-air stage often hosts poetry readings, storytelling sessions for kids, and discussions with well-known authors. Visitors can participate in writing workshops, book swaps, and interactive art installations inspired by literature. During special occasions such as Tet (Lunar New Year) or the Mid-Autumn Festival, the street is decorated with colorful lanterns, adding to its charm. These cultural activities help promote reading culture and foster a sense of community among book lovers.",
                },
                {
                    image: ImageShared.NhaSach.duongsach5,
                    description: "☕ A cozy coffee shop nestled between bookstores offers the perfect retreat for book lovers who want to enjoy a warm drink while reading. The café’s atmosphere is peaceful, with soft background music and shelves filled with books that customers can borrow while they sip their coffee. Some cafés have literary-themed décor, featuring vintage typewriters, book quotes painted on the walls, and small reading corners designed for maximum comfort. It’s common to see people engaged in deep conversations about literature over a cup of Vietnamese coffee or tea.",
                },
                {
                    image: ImageShared.NhaSach.duongsach6,
                    description: "🎨 Artistic street displays featuring literary themes and Vietnamese culture add a unique charm to Book Street. The walls along the street are adorned with beautifully painted murals showcasing famous Vietnamese writers and their works. Some sections even have interactive exhibits where visitors can leave their own book recommendations on community boards. These artistic elements make the street not only a paradise for book lovers but also a great place for photography and cultural appreciation. Every corner of Nguyen Van Binh Book Street tells a story, making it an unforgettable experience for anyone who visits.",
                },
            ].map((item, index) => (
                <div key={index} className="mx-10 py-5 md:mx-40 md:py-10">
                    <Image
                        src={item.image}
                        layout="responsive"
                        width={10}
                        height={5}
                        alt="Image"
                        className="shadow-lg mb-6 rounded-lg"
                    />
                    <p className="text-sm md:text-base text-gray-600 mt-2">{item.description}</p>
                </div>
            ))}




            {/* Krpano */}
            <div className="md:pt-24 px-4 md:px-40">
                <div className="w-full md:h-auto">
                    <iframe
                        src="/assets/panoramas/nha-sach/tour.html"
                        title="Con Dao 360 Tour"
                        className="w-full shadow-lg rounded-lg"
                        style={{ height: "calc(100vh - 96px)" }}
                    />
                </div>
            </div>

            {/* Google Map Section */}
            <div className="flex mx-40 py-10 space-x-10">
                <div>
                    <span className="font-roboto font-bold text-md">Location</span>
                    <br />
                    <span>Nguyen Van Binh Street, Ben Nghe, District 1, Ho Chi Minh City</span>
                </div>
                <div className="relative w-96 h-96 rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4019882227885!2d106.6996368!3d10.7804921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f37d724e605%3A0xb6a917ebe263b6b9!2zxJAuIE5ndXnhu4VuIFbEg24gQsOsbmgsIELhur9uIE5naMOpLCBRdeG6rW4gMSwgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1739117586917!5m2!1svi!2s"
                        className="w-full h-full border-0"
                        loading="lazy"
                    ></iframe>
                    <a
                        href={mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 text-white text-lg font-semibold transition-opacity duration-300 hover:bg-opacity-20"
                    >
                        Open in Google Maps
                    </a>
                </div>
            </div>
        </>
    );
}
