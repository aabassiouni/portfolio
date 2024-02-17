import React from "react";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/carousel";

function ImageCarousel({ children }: { children: React.ReactNode[] }) {
	return (
		<Carousel opts={{
			loop: true,
		}} className="w-full h-full">
			<Card className="">
				<CardContent className="pt-6">
					<CarouselContent className="items-center">
						{children?.map((child, index) => <CarouselItem key={index}>{child}</CarouselItem>)}
					</CarouselContent>
				</CardContent>
			</Card>
			<div className="pt-4 flex justify-center gap-8">
				<CarouselPrevious className="text-white relative " />
				<CarouselNext className="text-white relative" />
			</div>
		</Carousel>
	);
}

export default ImageCarousel;
