import {Button} from "@/components/ui/button.tsx";
import {GridPattern} from "@/components/ui/shadcn-io/grid-pattern";
import {cn} from "@/lib/utils.ts";
import {Card, CardAction, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Home, BookOpen, TrendingUpIcon} from "lucide-react";


function Hero() {

    const salesData = [

        {
            title: "Don't Just List it...",
            content:
                "Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.",
            src: "https://img1.wsimg.com/isteam/stock/107927/",
            icon: Home,
        },
        {
            title: "Top Residential Sales Last 5 Years",
            content: "We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.",
            src: "https://img1.wsimg.com/isteam/stock/3395/",
            icon: TrendingUpIcon, // Add Lucide icon reference
        },
        {
            title: "Guide to Buyers",
            content:
                "Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!",
            src: "https://img1.wsimg.com/isteam/stock/771/",
            icon: BookOpen,
        },
    ];


    return (
        <div className="w-full h-full flex pb-30  justify-center">

            <div className="pt-30 flex  flex-col gap-3 max-w-4xl">
                <h2 className=" text-center font-normal">MARCI METZGER - THE RIDGE REALTY GROUP</h2>
                <h1 className="Aeonik-Pro font-bold  text-center text-7xl">Pahrump Realtor</h1>
                <p className=" text-center leading-7 text-lg text-secondary-foreground/70 font-[400] ">Your trusted
                    Pahrump Realtor at The Ridge Realty Group, dedicated to helping you buy, sell, or invest with
                    confidence. Whether it’s your first home or your forever home, we make the process simple,
                    transparent, and rewarding.</p>
                <div className="w-full pt-3  flex place-items-center gap-2 justify-center">
                    <Button variant="outline" className="border border-black/50 leading-4">Call Now</Button>
                    <Button>Services</Button>
                </div>

                <div className="w-full h-full pt-10  relative">
                    <div className="w-full relative  h-full flex gap-2 place-items-center">
                       <div>
                           <div className="p-20">
                               <img src={salesData[0].src} className="rounded-md"/>
                           </div>
                           <div className="absolute max-w-sm top-0 right-0">
                               <img src={salesData[1].src} className="rounded-sm shadow-md"/>
                           </div>
                           <div className="absolute bottom-0 left-0 max-w-sm">
                               <img src={salesData[2].src} className="rounded-md "/>
                           </div>
                       </div>

                    </div>






                </div>
             <div className="relative w-full pt-4">
                 <div className="grid grid-cols-3 gap-3 place-items-center">
                     {salesData?.map((info,i)=>{
                         return (
                             <Card key={i}  className={` gap-3 overflow-hidden ${i === 1 && "bg-blue-600 text-white"} `}>
                                 {/*<img className="rounded-md"  src={info?.image}/>*/}

                                 <CardHeader>

                                     <CardTitle className="lg:text-xl">{info.title}</CardTitle>
                                     <CardAction ><info.icon className={`${i === 1 ? "text-white" : "text-blue-500"}`}/></CardAction>
                                 </CardHeader>
                                 <CardContent >
                                     <p className={`font-regular leading-6 text-sm text-foreground/70 ${i=== 1 && "text-white"}`}>{info.content}</p>
                                 </CardContent>
                                 {/*<CardFooter>*/}
                                 {/*    <p>Card Footer</p>*/}
                                 {/*</CardFooter>*/}
                             </Card>
                         )
                     })}
                 </div>
                 <div
                     className="absolute bottom-0 w-full h-[10%] dark:h-[30%] font-stretch-100% bg-gradient-to-t from-background/70 to-transparent"></div>

             </div>

            </div>

            <GridPattern
                width={40}
                height={40}
                x={-1}
                y={-1}
                squares={[
                    [4, 4],
                    [5, 1],
                    [8, 2],
                    [5, 3],
                    [5, 5],
                ]}
                className={cn(
                    "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-0%] h-full skew-y-12 -z-1"
                )}
            />
        </div>
    );
}

export default Hero;
