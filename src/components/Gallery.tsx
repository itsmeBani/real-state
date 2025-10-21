import { ImageZoom } from '@/components/ui/shadcn-io/image-zoom';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

function Gallery() {
    const imageUrls = [
       "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4460%20Roseworthy-52.jpg-SMALL.JPG/:/rs=w:984,h:655",
        "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-14.jpg-SMALL.JPG/:/cr=t:0%25,l:0.05%25,w:99.9%25,h:99.9%25/rs=w:984,h:655",
        "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-45.jpg-SMALL.JPG/:/rs=w:984,h:655",
        "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/5570%20Ailanto-50.jpg-SMALL.JPG/:/rs=w:984,h:655",
        "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4787%20E%20Beacon%20Ridge-54.jpg-SMALL.JPG/:/rs=w:984,h:655",
        "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4787%20E%20Beacon%20Ridge-53.jpg-SMALL.JPG/:/rs=w:984,h:656",
        "https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/4787%20E%20Beacon%20Ridge-41.jpg-SMALL.JPG/:/rs=w:984,h:656"
        ];

    return (
        <div className="w-full px-3 lg:px-40 h-full pt-10  flex  flex-col  place-items-center  gap-3  py-3">
            <div className="text-center max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-semibold Aeonik-Pro text-center">Photo Gallery</h1>
                <p className=" font-normal  text-xs lg:text-sm  text-foreground/70">
                    Explore a curated showcase of our real estate services, from property tours and interior styling to investment consultation and personalized support. See how we bring your real estate dreams to life.
                </p>
            </div>

            <div className="w-full p-6 flex justify-center">
                <Carousel opts={{
                    align: "start",
                    loop: true,
                }}  className="w-[80%] md:max-w-3xl  ">
                    <CarouselContent >
                        {imageUrls.map((url, index) => (
                            <CarouselItem  key={index}>
                                <ImageZoom zoomMargin={1}>
                                    <img
                                        alt="Placeholder image"
                                        className="w-full rounded-md "

                                        src={url}


                                    />
                                </ImageZoom>

                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />

                    <CarouselNext />
                </Carousel>
            </div>


        </div>
    );
}

export default Gallery;