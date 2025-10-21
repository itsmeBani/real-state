import {
    Card,
    CardAction,
    CardContent,

    CardHeader,
    CardTitle
} from "@/components/ui/card.tsx";
import {BookOpen, Building, Home} from "lucide-react";


function Services() {
    const services = [
        {
            title: "Real Estate Done Right",
            description: "Nervous about your property adventure? Don’t be. Whether you're buying, selling, exploring investment properties, or just curious about the market, our team ensures you get the best experience possible!",
            icon: Home,
            image:"https://img1.wsimg.com/isteam/stock/12792"
        },
        {
            title: "Commercial & Residential",
            description: "Large or small, condo or mansion, we can find it at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community, and are happy to guide you on where to put your hard-earned dollars.",
            icon: Building,
            image: "https://img1.wsimg.com/isteam/stock/43920"
        },
        {
            title: "Rely on Expertise",
            description: "Have questions about affordability, credit, or loan options? Trust us to connect you with the right people and get answers quickly. We make sure you feel confident and informed every step of the way.",
            icon: BookOpen,
            image: "https://img1.wsimg.com/isteam/stock/kayaJdA"
        }
    ];

    return (
        <section className="px-3 lg:px-5 pb-10 lg:pb-20 overflow-hidden  flex-col justify-center  place-items-center  gap-10  flex w-full ">
            <div className="text-center max-w-2xl">
                <h1 className="text-3xl md:text-5xl  font-semibold Aeonik-Pro text-center">Our Services</h1>
                <p className="font-normal text-xs lg:text-sm  text-foreground/70">Expert Guidance for Every Step of Your Real Estate
                    Journey, from Finding the Perfect Property to Closing the Deal with Confidence</p>

            </div>

            <div className="grid w-full     md:px-10 lg:px-40 gap-4   md:grid-cols-2 lg:grid-cols-3 ">
                {services.map((info,i)=>{
                    return (
                        <Card  key={i} className=" gap-3 overflow-hidden">
                            {/*<img className="rounded-md"  src={info?.image}/>*/}

                            <CardHeader>

                                <CardTitle className="lg:text-xl">{info.title}</CardTitle>
                                      <CardAction><info.icon className={"text-blue-600"}/></CardAction>
                            </CardHeader>
                            <CardContent>
                                <p className="font-regular md:text-sm  lg:leading-6 text-sm text-foreground/70">{info.description}</p>
                            </CardContent>
                            {/*<CardFooter>*/}
                            {/*    <p>Card Footer</p>*/}
                            {/*</CardFooter>*/}
                        </Card>

                    )
                })}


            </div>


        </section>
    );
}

export default Services;
