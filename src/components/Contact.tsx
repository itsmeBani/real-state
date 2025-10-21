import clientPicture from "../assets/client.png"
import {Clock, MapPin, MessageCircle, Phone} from "lucide-react";
import {Card, CardHeader, CardContent, CardFooter} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
function Contact() {
    return (
        <section id={"contact"} className="px-3 scroll-m-13 md:px-10 lg:px-40 flex flex-col  py-10 gap-7  w-full  ">
            <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-semibold Aeonik-Pro">Get in Touch</h1>
                <p className="font-normal text-xs lg:text-sm  text-foreground/70">
                    We'd love to hear from you! Whether you’re buying, selling, or just exploring your options, our team
                    is here to help. Call us, send a message, or stop by our office — let’s start making your real
                    estate goals a reality.
                </p>
            </div>


            <div className="flex flex-col md:flex-row">
                <div className="w-full flex-col flex  gap-5  ">
                    <div className="h-full  flex md:justify-start justify-center relative">
                        <img src={clientPicture} className="h-[230px] aspect-square rounded-md"/>

                    </div>
                    <div className="max-w-2xl space-y-5">

                        <div className="space-y-3 text-foreground/90">
                            <p className="text-md md:text-start text-center md:text-lg font-bold">Marci Metzger - THE RIDGE REALTY GROUP</p>

                            <div className="flex  gap-2">
                                <MapPin className=" h-5 w-5 mt-1 text-primary"/>
                                <p className="text-sm">3190 HW-160, Suite F, Pahrump, Nevada 89048, United States</p>
                            </div>

                            <div className="flex justify-start gap-2">
                                <Phone className="w-4 h-4 mt-1 text-primary"/>
                                <p className="text-sm">(206) 919-6886</p>
                            </div>

                            <div className="flex  gap-2">
                                <Clock className="w-5 h-5 mt-1 text-primary"/>
                                <div>

                                    <p className="font-medium text-sm text-foreground">Office Hours</p>
                                    <p>Open daily • 8:00 am – 7:00 pm</p>
                                    <p className="text-xs md:text-sm italic">
                                        Appointments outside office hours available upon request — just call!
                                    </p>
                                </div>
                            </div>
                            <a href="https://wa.me/14259412560" target="_blank">
                                <Card className="max-w-full md:max-w-xs border border-green-200 hover:border-green-400 bg-green-50 cursor-pointer dark:bg-green-950/30 dark:border-green-900 shadow-sm transition-colors">
                                    <CardHeader className="flex flex-row items-center gap-3">
                                        <div className="bg-green-500 p-3 rounded-full">
                                            <MessageCircle className="w-3 h-3 text-white" />
                                        </div>
                                        <div>
                                            <h2 className="text-sm font-semibold text-green-800 dark:text-green-300">
                                                Message us on WhatsApp
                                            </h2>
                                            <p className="text-xs text-green-700 dark:text-green-400">
                                                We’ll respond as soon as possible!
                                            </p>
                                        </div>
                                    </CardHeader>

                                </Card></a>
                        </div>
                    </div>
                </div>
                <div className="w-full flex-col flex   gap-5 place-items-center justify-center  ">

                    <Card className="max-w-md w-full shadow-none border-none">
                        <CardHeader>
                            <h2 className="text-2xl font-semibold">Send Us a Message</h2>
                            <p className="text-sm text-muted-foreground">
                                Fill out the form below and we’ll get back to you as soon as possible.
                            </p>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" type="text" className="text-sm"  placeholder="Your full name"/>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" className="text-sm"  placeholder="you@example.com"/>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" className="text-sm" placeholder="Type your message here..."/>
                            </div>
                        </CardContent>

                        <CardFooter>
                            <Button className="w-full">Send Message</Button>
                        </CardFooter>
                    </Card>

                </div>

            </div>

            <div className="w-full">
                <iframe width="100%" height="600"  className={"rounded-md"}
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=3190%20HW-160,%20Suite%20F,%20Pahrump,%20Nevada%2089048,%20United%20States+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    <a href="https://www.mapsdirections.info/it/calcola-la-popolazione-su-una-mappa/">mappa della
                        popolazione Italia</a></iframe>
            </div>
        </section>
    );
}

export default Contact;