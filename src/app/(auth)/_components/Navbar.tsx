import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import ColorModeSwitchButton from "@/components/ColorModeSwitchButton";
import {
  type NavbarLinksForAuthType,
  navLinksForAuth,
} from "@/components/NavLinks";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { BarChart4  } from "lucide-react";

export default async function Navbar() {
  return (
    <NextUINavbar maxWidth="full" position="sticky" aria-selected isBordered>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit md:mr-7 lg:mr-10">
          <NextLink className="flex justify-start items-center" href="/">
            <BarChart4 className="mr-2" />
            <p className="font-bold text-inherit text-lg uppercase">GrowthSync Analytics</p>
          </NextLink>
        </NavbarBrand>

        {navLinksForAuth.map((navbarLink, index) => (
          <NavbarItem key={index}>
            <Link
              color="foreground"
              key={navbarLink.title}
              href={navbarLink.href}
              title={navbarLink.description}
            >
              {navbarLink.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className="flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem>
          <ColorModeSwitchButton />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
}
