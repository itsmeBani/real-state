
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
function Navbar() {
    const { setTheme ,theme} = useTheme()

    return (
        <div className="md:px-5 py-2 bg-background border-t-none border-b-border border-1 w-full grid grid-cols-2 md:grid-cols-3 justify-between  place-items-center">
         <div className="w">
         <img src={Logo} className="w-30 md:w-50 dark:invert" alt="Marci Metzgir" />


         </div >
            <div className="hidden md:flex">
                <ul className="gap-5 cursor-pointer flex">
                    <li className="Aeonik-Pro"><a>Listings</a></li>

                    <li><a>Let's Move</a></li>
                    <li><a>About Us</a></li>
                </ul>


            </div>
            <div className="flex  gap-2">
                <Sheet>
                    <SheetTrigger><Button>Find Now</Button></SheetTrigger>
                    <SheetContent side={"right"} >
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
                    <SheetContent  side={"right"} >

                    </SheetContent>
                </Sheet>
            </div>
        </div>
    );
}

export default Navbar;