"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tooltip,
} from "@nextui-org/react";
import img1 from "@/assets/images/img1.jpg";
import img2 from "@/assets/images/img2.webp";
import img3 from "@/assets/images/img3.webp";
import img4 from "@/assets/images/img4.webp";
import img5 from "@/assets/images/img5.webp";
import Image from "next/image";

const card1 = (
  <>
    <Card
      isFooterBlurred
      className="w-full h-[300px] col-span-12 sm:col-span-5"
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-lg text-white/60 uppercase font-bold">New</p>
        <h4 className="text-black font-thin text-4xl">Most Selling Product</h4>
      </CardHeader>
      <Image
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src={img1}
      />
      <CardBody className="absolute z-10 top-40 flex-col items-start text-center justify-center">
        <p className="text-black text-xl text-center mx-auto font-medium">
          South Indian Filter Kaapi was sold 496 times
        </p>
      </CardBody>
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-tiny">You should consider </p>
          <p className="text-black text-tiny">restocking certain items</p>
        </div>
        {/* on ice, Amul milk, Frappe powder, Coffee Beans, Filter Cofee */}
        <Tooltip
          content={
            <div className="px-1 py-2">
              <div className="text-small font-bold">
                Raw materials used the most
              </div>
              <div className="text-small">
                <ul>
                  <li>On Ice</li>
                  <li>Amul Milk</li>
                  <li>Frappe Powder</li>
                  <li>Coffee Beans</li>
                  <li>Filter Coffee</li>
                </ul>
              </div>
            </div>
          }
        >
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            Know more
          </Button>
        </Tooltip>
      </CardFooter>
    </Card>
  </>
);
const card2 = (
  <>
    <Card
      isFooterBlurred
      className="w-full h-[300px] col-span-12 sm:col-span-5"
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <h4 className="text-black font-thin text-4xl">Most Grossing Product</h4>
      </CardHeader>
      <Image
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src={img2}
      />
      <CardBody className="absolute z-10 top-40 flex-col items-start text-center justify-center">
        <p className="text-black text-xl text-center mx-auto font-medium">
          Original South Indian Frappe
        </p>
      </CardBody>
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-tiny">It generated a</p>
          <p className="text-black text-tiny">revenue of ₹84,820</p>
        </div>
        <Button className="text-tiny" color="primary" radius="full" size="sm">
          Know more
        </Button>
      </CardFooter>
    </Card>
  </>
);
const card3 = (
  <>
    <Card
      isFooterBlurred
      className="w-full h-[300px] col-span-12 sm:col-span-5"
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <h4 className="text-black font-thin text-4xl">Employee of the month</h4>
      </CardHeader>
      <Image
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src={img3}
      />
      <CardBody className="absolute z-10 top-40 flex-col items-start text-center justify-center">
        <p className="text-black text-xl text-center mx-auto font-medium">
          Maximum billings was entered by AllahBaksh
        </p>
      </CardBody>
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-black text-tiny">He cashed a</p>
          <p className="text-black text-tiny">revenue of ₹2,98,313</p>
        </div>
        <Button className="text-tiny" color="primary" radius="full" size="sm">
          Know more
        </Button>
      </CardFooter>
    </Card>
  </>
);
const card4 = (
  <>
    <Card
      isFooterBlurred
      className="w-full h-[300px] col-span-12 sm:col-span-5"
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <h4 className="text-black font-thin text-4xl">
          Most fruitful day of January
        </h4>
      </CardHeader>
      <Image
        alt="Card example background"
        className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
        src={img5}
      />
      <CardBody className="absolute z-10 top-40 flex-col items-start text-center justify-center">
        <p className="text-black text-xl text-center mx-auto font-medium">
          29th January, Monday was when maximum amount of money was clocked
        </p>
      </CardBody>
    </Card>
  </>
);

const cards = [card1, card2, card3, card4];

export default function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-lg">
      <CarouselContent>
        {cards.map((card, index) => (
          <CarouselItem key={index}>
            <div className="p-1">{card}</div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
