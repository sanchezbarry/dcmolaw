'use client'
import React, { useState, useEffect } from "react";
import {
  Navbar,
  // MobileNav,
  Typography,
  Collapse,
  // Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  // Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";

import Image from 'next/image'
import Link from 'next/link'
 



// nav list menu
const profilesMenuItems = [
  {
    title: "Partners",
    description:
      "Our senior, most experienced lawyers.",
    link: "/profiles/partners"
  },
  {
    title: "Consultants",
    description:
      "Consultants who contribute other key areas of expertise to our firm.",
      link: "/profiles/consultants"
  },
  {
    title: "Associates",
    description:
      "Our legal associates.",
      link: "/profiles/associates"
  },
];
 
function ProfilesListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

 
  const renderItems = profilesMenuItems.map(({ title, description, link }) => (
    <a href={link} key={title}>
      <MenuItem className="hover:bg-[#baa974]" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
        <Typography variant="h6" color="white" className="dark:text-neutral-100 text-blue-gray-900 mb-1" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          {title}
        </Typography>
        <Typography variant="small" color="white" className="dark:text-neutral-100 text-blue-gray-900 font-normal" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));




 
  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>


        <MenuHandler className="no-outline">
          <Typography as="a" href="#" variant="small" className="font-normal" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
            <MenuItem
              className="hidden no-outline items-center gap-2 font-medium dark:text-neutral-100 text-blue-gray-900 lg:flex lg:rounded-full hover:bg-[#baa974]"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              {/* <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "} */}
              Profiles{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>

        <MenuList
          className="border-none hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid no-outline dark:bg-neutral-700 "
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <Card
            color="transparent"
            shadow={false}
            variant="gradient"
            className="no-outline col-span-3 grid h-full w-full place-items-center rounded-md"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            <Image 
            src="/groupshot.jpg"
            alt="lawyers"
            className="h-500 w-300 rounded-2xl"
            width={550}
            height={550} />
          </Card>
          <ul className="no-outline col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>

{/*Mobile menu*/}

      <MenuItem
        className="flex items-center gap-2 font-medium text-blue-gray-900 dark:text-neutral-100  lg:hidden"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        {/* <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "} */}
        Profiles{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}
 
// nav list menu
const servicesMenuItems = [
  {
    title: "Family Law",
    description:
      "Matrimonial Law is our firm’s specialty and key area of practice.",
      link: "/familylaw"
  },
  {
    title: "Probate & Wills",
    description:
      "Probate is a legal process for distributing your estate according to the terms of your Will.",
      link: "/probate"
  },
    {
    title: "Civil Litigation",
    description:
      "We handle a wide array of civil and commercial disputes, including complex contractual, employment, property, and personal injury matters.",
      link: "/civillitigation"
  },
    {
    title: "Deputyship",
    description:
      "A Deputy is appointed by the court to make certain decisions on behalf of a person who lacks mental capacity when the person has not made a Lasting Power of Attorney.",
      link: "/deputyship"
  },
  {
    title: "Others",
    description:
      "Our team of lawyers are also experienced in other areas of personal law beyond matrimonial law.",
      link: "/otherservices"
  },
];
 
function ServicesListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 
  const renderItems = servicesMenuItems.map(({ title, description, link }) => (
    <a href={link} key={title}>
      <MenuItem className="hover:bg-[#baa974]" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
        <Typography variant="h6" color="white" className="dark:text-neutral-100 text-blue-gray-900 mb-1 no-outline" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          {title}
        </Typography>
        <Typography variant="small" color="white" className="dark:text-neutral-100 text-blue-gray-900 font-normal" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));
 
  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>


        <MenuHandler className="no-outline">
          <Typography as="a" href="#" variant="small" className="font-normal" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
            <MenuItem
              className="hidden no-outline items-center gap-2 font-medium dark:text-neutral-100 hover:text-blue-gray-900 text-blue-gray-900 lg:flex lg:rounded-full hover:bg-[#baa974]"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Services{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>

        <MenuList
          className="border-none hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid dark:bg-neutral-700 "
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <Card
            color="transparent"
            shadow={false}
            variant="gradient"
            className="dark:bg-neutral-900 no-outline col-span-3 grid h-full w-full place-items-center rounded-md"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
                        <Image 
            src="/lawservices.jpg"
            alt="lawyers"
            className="h-500 w-300 rounded-2xl"
            width={550}
            height={550} />
          </Card>
          <ul className="no-outline col-span-4 flex w-full flex-col gap-1 dark:text-neutral-100 ">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>

{/*Mobile menu*/}

      <MenuItem
        className="flex items-center gap-2 font-medium dark:text-neutral-100 text-blue-gray-900 lg:hidden"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        {/* <Square3Stack3DIcon className="h-[18px] w-[18px] text-blue-gray-500" />{" "} */}
        Services{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}
 
// nav list component
const navListItems = [
  {
    label: "About",
    href: "/about-us",
  },
  {
    label: "Internships",
    href: "/internships",
  },
  // {
  //   label: "Blog",
  //   href: "/blog",
  // },
  {
    label: "Contact",
    href: "/contact-us",
  },
  {
    label: "Press",
    href: "/press",
  },
];
 
function NavList() {
  return (
    <ul className="no-outline mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center dark:text-neutral-100 ">
      <ServicesListMenu />
      <ProfilesListMenu />
      {navListItems.map(({ label, href }, 
      // key
    ) => (
        <Typography
          key={label}
          as="a"
          href={href}
          variant="small"
          color="gray"
          className="font-medium dark:text-neutral-100  text-blue-gray-500"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <MenuItem
            className="dark:text-neutral-100 flex items-center gap-2 lg:rounded-full hover:bg-[#baa974]"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
        
            <span className="dark:text-neutral-100  text-gray-900"> {label}</span>
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}
 
export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
   const [isDark, setIsDark] = useState(false);

     useEffect(() => {
    // Detect dark mode from <html> class
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkDark();
    window.addEventListener("resize", checkDark);
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => {
      window.removeEventListener("resize", checkDark);
      observer.disconnect();
    };
  }, []);

  const logoSrc = isDark ? "/whitedcmo.png" : "/dcmoblack.png";

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);
 
  return (
    <Navbar
      className="border-none mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6 bg-white dark:bg-neutral-800 transition-colors"
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      <div className="relative mx-auto flex items-center justify-between dark:text-neutral-100  text-blue-gray-900 ">
      <Link href="/">
              <Image
                alt="DCMO Law"
                src={logoSrc}
                className="h-6 w-auto px-1"
                width="1350"
                height="1350"
              />
              </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="white"
          variant="text"
          onClick={toggleIsNavOpen}
          className="dark:text-neutral-100 text-blue-gray-900 ml-auto mr-2 lg:hidden"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>

      </div>
      {/* this was previously MobileNav/> */}
      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList />
      </Collapse>
    </Navbar>
  );
}

