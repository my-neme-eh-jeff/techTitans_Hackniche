import { tv } from "tailwind-variants";

export const titleVariants = tv({
  base: "inline font-thin",
  variants: {
    color: {
      violet: "from-[#FF1CF7] to-[#b249f8]",
      foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      golden: "from-[#FFD700] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
    },
    size: {
      sm: "text-3xl md:text-4xl lg:text-6xl leading-7 xl:text-6xl 2xl:text-7xl",
      md: "text-2xl md:text-5xl lg:text-4xl leading-8 xl:text-6xl 2xl:text-8xl",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: [
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
        "golden",
      ],
      class:
        "bg-clip-text text-transparent bg-gradient-to-b selection:text-foreground",
    },
  ],
});
export const subtitleVariants = tv({
  base: "my-2 text-xl lg:text-2xl dark:text-zinc-400 text-zinc-400 block",
  variants: {
    fullWidth: {
      true: "!w-full",
    },
  },
  defaultVariants: {
    fullWidth: true,
  },
});
