import React from "react";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/carousel";

function ImageCarousel({ children }: { children: React.ReactNode[] }) {
	return (
		<Card className="">
			<CardContent className="pt-6">
				<Carousel className="w-full h-full">
					<CarouselContent className="items-center">
						{children?.map((child, index) => <CarouselItem key={index}>{child}</CarouselItem>)}
					</CarouselContent>
					<CarouselPrevious className="text-white" />
					<CarouselNext className="text-white" />
				</Carousel>
			</CardContent>
		</Card>
	);
}

export default ImageCarousel;
