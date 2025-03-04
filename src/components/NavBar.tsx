'use client'
import React from "react";
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
 
// profile menu component
// const profileMenuItems = [
//   {
//     label: "My Profile",
//     icon: UserCircleIcon,
//   },
//   {
//     label: "Edit Profile",
//     icon: Cog6ToothIcon,
//   },
//   {
//     label: "Inbox",
//     icon: InboxArrowDownIcon,
//   },
//   {
//     label: "Help",
//     icon: LifebuoyIcon,
//   },
//   {
//     label: "Sign Out",
//     icon: PowerIcon,
//   },
// ];
 
// profile menu
// function ProfileMenu() {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 
//   const closeMenu = () => setIsMenuOpen(false);
 
//   return (
//     <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
//       <MenuHandler>
//         <Button
//           variant="text"
//           color="blue-gray"
//           className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
//           placeholder=""
//           onPointerEnterCapture={() => {}}
//           onPointerLeaveCapture={() => {}}
//         >
//           <Avatar
//             variant="circular"
//             size="sm"
//             alt="tania andrew"
//             className="border border-gray-900 p-0.5"
//             src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
//             placeholder=""
//             onPointerEnterCapture={() => {}}
//             onPointerLeaveCapture={() => {}}
//           />
//           <ChevronDownIcon
//             strokeWidth={2.5}
//             className={`h-3 w-3 transition-transform ${
//               isMenuOpen ? "rotate-180" : ""
//             }`}
//           />
//         </Button>
//       </MenuHandler>
//       <MenuList
//         className="p-1"
//         placeholder=""
//         onPointerEnterCapture={() => {}}
//         onPointerLeaveCapture={() => {}}
//       >
//         {profileMenuItems.map(({ label, icon }, key) => {
//           const isLastItem = key === profileMenuItems.length - 1;
//           return (
//             <MenuItem
//               key={label}
//               onClick={closeMenu}
//               className={`flex items-center gap-2 rounded ${
//                 isLastItem
//                   ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
//                   : ""
//               }`}
//               placeholder=""
//               onPointerEnterCapture={() => {}}
//               onPointerLeaveCapture={() => {}}
//             >
//               {React.createElement(icon, {
//                 className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
//                 strokeWidth: 2,
//               })}
//               <Typography
//                 as="span"
//                 variant="small"
//                 className="font-normal"
//                 color={isLastItem ? "red" : "inherit"}
//                 placeholder=""
//                 onPointerEnterCapture={() => {}}
//                 onPointerLeaveCapture={() => {}}
//               >
//                 {label}
//               </Typography>
//             </MenuItem>
//           );
//         })}
//       </MenuList>
//     </Menu>
//   );
// }


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
      <MenuItem placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
        <Typography variant="h6" color="blue-gray" className="mb-1" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
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
              className="hidden no-outline items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full"
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
          className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid no-outline"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <Card
            color="white"
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
            width={1350}
            height={1350} />
          </Card>
          <ul className="no-outline col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>

{/*Mobile menu*/}

      <MenuItem
        className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden"
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
    title: "Probate",
    description:
      "Probate is a legal process for distributing your estate according to the terms of your Will.",
      link: "/probate"
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
      <MenuItem placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
        <Typography variant="h6" color="blue-gray" className="mb-1 no-outline" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          {title}
        </Typography>
        <Typography variant="small" color="gray" className="font-normal" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
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
              className="hidden no-outline items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full"
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
          className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <Card
            color="white"
            shadow={false}
            variant="gradient"
            className="no-outline col-span-3 grid h-full w-full place-items-center rounded-md"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
                        <Image 
            src="/lawservices.jpg"
            alt="lawyers"
            className="h-500 w-300 rounded-2xl"
            width={1350}
            height={1350} />
          </Card>
          <ul className="no-outline col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>

{/*Mobile menu*/}

      <MenuItem
        className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden"
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
  {
    label: "Blog",
    href: "/blog",
  },
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
    <ul className="no-outline mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
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
          className="font-medium text-blue-gray-500"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <MenuItem
            className="flex items-center gap-2 lg:rounded-full"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
        
            <span className="text-gray-900"> {label}</span>
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}
 
export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
 
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false),
    );
  }, []);
 
  return (
    <Navbar
      className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6"
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
      <Link href="/">
              <Image
                alt="DCMO Law"
                src="/dcmologo.jpg"
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
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
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