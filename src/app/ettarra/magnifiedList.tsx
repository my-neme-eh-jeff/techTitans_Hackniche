"use client";
import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Globe } from "lucide-react";
import { useRef } from "react";

const card1 = (
  <>
    <div className="relative max-w-xs overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.8)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat p-8 shadow-2xl  hover:bg-[position:200%_0,0_0] hover:duration-[1500ms]">
      <div className="mb-4">
        <Globe className="h-8 w-8 text-neutral-400" />
      </div>
      <h3 className="mb-2 font-medium tracking-tight text-neutral-100">
        Global Connectivity
      </h3>
      <p className="text-sm text-neutral-400">
        Illuminate your online presence with our enhanced global connectivity
        options.
      </p>
    </div>
  </>
);
const card2 = (
  <>
    <div className="justify-center align-middle">
      <h1 className="text-center">Swiggy Rating</h1>
      <h2 className="text-center">4.3</h2>
    </div>
  </>
);
const card3 = (
  <>
    <div className="justify-center align-middle">
      <h1 className="text-center">Uber Eats Rating</h1>
      <h2 className="text-center">4.2</h2>
    </div>
  </>
);
const card4 = (
  <>
    <div className="justify-center align-middle">
      <h1 className="text-center">Average cost of 2 person</h1>
      <h2 className="text-center">1400</h2>
    </div>
  </>
);

export function Dock() {
  const arrayOfCards = [card1, card2, card3, card4];
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="mx-auto flex h-32 place-items-center items-center gap-14 rounded-2xl bg-gray-700 px-4 pb-3 overflow-hidden text-sm truncate whitespace-nowrap text-ellipsis"
    >
      {arrayOfCards.map((card, i) => (
        <AppIcon mouseX={mouseX} key={i} card={card} />
      ))}
    </motion.div>
  );
}

function AppIcon({ mouseX, card }: { mouseX: MotionValue; card: JSX.Element }) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square rounded-xl bg-gray-400"
    >
      {card}
    </motion.div>
  );
}
