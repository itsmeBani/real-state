import {Marquee, MarqueeContent, MarqueeFade, MarqueeItem} from "@/components/ui/shadcn-io/marquee";


function MarqueeGallery() {
    const logos = [
        "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/BIG%20CIRCLE%202.png",
        "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/Equal%20Housing%20Logo.png",
        "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/Realtor%20Pin.jpg",
        "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/Chamber.jpg"
    ];

    return (
        <div className="flex px-40  overflow-hidden py-10  items-center justify-center bg-background">
            <Marquee>
                <MarqueeFade side="left" />
                <MarqueeFade side="right" />
                <MarqueeContent className={"overflow-hidden"}>
                    {logos.map((logo, index) => (
                        <MarqueeItem className="h-20 w-20" key={index}>
                            <img
                                alt={`Placeholder ${index}`}
                                className={`overflow-hidden ${index === 1 && "dark:invert"} rounded-full`}
                               src={logo}
                            />
                        </MarqueeItem>
                    ))}
                </MarqueeContent>
            </Marquee>
        </div>
    );
}

export default MarqueeGallery;