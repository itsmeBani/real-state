import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function Listing() {
    return (
        <section className="py-10">
            <div className="max-w-7xl mx-auto px-6 text-center ">
                <h1 className="text-2xl font-bold  dark:text-white mb-4">
                    Find Your Dream Home
                </h1>
                <p className="text-gray-600 dark:text-gray-300 ">
                    Browse listings, filter by location, price, and amenities to find your perfect home.
                </p>


                <form className="flex flex-col p-6 gap-4 rounded-xl ">

                    {/* Location */}
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="location">Location</Label>
                        <Input id="location" placeholder="City, Zip..." />
                    </div>

                    {/* Type */}
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="type">Type</Label>
                        <Select>
                            <SelectTrigger id="type" className="w-full">
                                <SelectValue placeholder="Any Type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="house">House</SelectItem>
                                <SelectItem value="apartment">Apartment</SelectItem>
                                <SelectItem value="condo">Condo</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Sort By */}
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="sort">Sort By</Label>
                        <Select>
                            <SelectTrigger className="w-full" id="sort">
                                <SelectValue placeholder="Newest" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="newest">Newest</SelectItem>
                                <SelectItem value="price-low-high">Price Low to High</SelectItem>
                                <SelectItem value="price-high-low">Price High to Low</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Bedrooms */}
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="bedrooms">Bedrooms</Label>
                        <Select>
                            <SelectTrigger className="w-full" id="bedrooms">
                                <SelectValue placeholder="Any" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">1</SelectItem>
                                <SelectItem value="2">2</SelectItem>
                                <SelectItem value="3">3</SelectItem>
                                <SelectItem value="4">4+</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Baths */}
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="baths">Baths</Label>
                        <Select>
                            <SelectTrigger className="w-full" id="baths">
                                <SelectValue placeholder="Any" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">1</SelectItem>
                                <SelectItem value="2">2</SelectItem>
                                <SelectItem value="3">3</SelectItem>
                                <SelectItem value="4">4+</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Price Range */}
                    <div className="flex flex-col sm:flex-row gap-2">
                        <div className="flex-1 flex flex-col gap-2">
                            <Label htmlFor="minPrice">Min Price</Label>
                            <Input id="minPrice" type="number" placeholder="$0" />
                        </div>
                        <div className="flex-1 flex flex-col gap-2">
                            <Label htmlFor="maxPrice">Max Price</Label>
                            <Input id="maxPrice" type="number" placeholder="$1,000,000" />
                        </div>
                    </div>

                    {/* Search Button */}
                    <div className="w-full flex justify-end mt-4">
                        <Button type="submit" className="w-full">
                            Search
                        </Button>
                    </div>
                </form>

            </div>
        </section>
    );
}
