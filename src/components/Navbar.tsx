
import Logo from "../assets/logo.webp"
import {Button} from "@/components/ui/button.tsx";
import {MoonIcon, SunIcon, TextAlignEnd} from "lucide-react";
import {useTheme} from "@/context/theme-provider.tsx";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import Listing from "@/components/Listing.tsx";
import {useEffect, useState} from "react";


function Navbar() {
    const { setTheme ,theme} = useTheme()
   const [isTransparent,setIsTransparent]=useState(true)

    useEffect(() => {
        const handleScroll = () => {
           if (window?.scrollY < 100){
               console.log("transparent ah")
               setIsTransparent(true)
           }else {
               setIsTransparent(false)
           }


        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className={`px-2 fixed z-40 top-0 md:px-5 py-2 ${isTransparent ? "bg-transparent" : "bg-background border-t-none border-b-border border-1 " } w-full flex justify-between  place-items-center`}>
         <div className="w">
         <img src={Logo} className="w-20 md:w-50 dark:invert" alt="Marci Metzgir" />


         </div >
            <div className="hidden md:flex">
                <ul className="gap-5 cursor-pointer flex">
                    <li className="Aeonik-Pro"><a>Listings</a></li>

                    <li><a>Let's Move</a></li>
                    <li><a>About Us</a></li>
                    <li><a href={"#contact"}>Contact </a></li>
                </ul>


            </div>
            <div className="flex  gap-2">
                <Sheet>
                    <SheetTrigger><Button>Find Now</Button></SheetTrigger>
                    <SheetContent side={"right"} className="overflow-auto" >
                        <Listing/>
                    </SheetContent>
                </Sheet>
                {theme === "dark" ?
                    <Button onClick={()=>setTheme("light")} variant="outline" size={"icon"}>
                        <SunIcon />
                    </Button>:
                    <Button onClick={()=>setTheme("dark")} variant="outline" size={"icon"}>
                        <MoonIcon />
                    </Button>
                }
                <Sheet >
                    <SheetTrigger className={"block md:hidden"}><Button size={"icon"} variant={"outline"}><TextAlignEnd/></Button></SheetTrigger>
                    <SheetContent  side={"right"} className="pt-10 px-3" >
                        <ul className="gap-3 cursor-pointer flex flex-col">
                            <li className="Aeonik-Pro"><a>Listings</a></li>

                            <li><a>Let's Move</a></li>
                            <li><a>About Us</a></li>
                            <li><a href={"#contact"}>Contact </a></li>
                        </ul>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
}

export default Navbar;