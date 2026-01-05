import {
  Activity,
  Component,
  HomeIcon,
  Mail,
  Package,
  ScrollText,
  SunMoon,
} from 'lucide-react';

import { Dock, DockIcon, DockItem, DockLabel } from '@/components/motion-primitives/dock';
import { RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiMongodb, SiPrisma, SiTypescript } from 'react-icons/si';
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from 'react-icons/bi';

const data = [
  {
    title: 'NextJS',
    icon: (
      <RiNextjsFill className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
  {
    title: 'ReactJS',
    icon: (
      <RiReactjsFill className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
  {
    title: 'ExpressJS',
    icon: (
      <SiExpress className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
  {
    title: 'TypeScript',
    icon: (
      <SiTypescript className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
  {
    title: 'NodeJS',
    icon: (
      <FaNodeJs className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
  {
    title: 'Tailwind CSS',
    icon: (
      <RiTailwindCssFill className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
  {
    title: 'Prisma',
    icon: (
      <SiPrisma className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
  {
    title: 'PostgresSQL',
    icon: (
      <BiLogoPostgresql className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
  {
    title: 'MongoDB',
    icon: (
      <SiMongodb className='h-full w-full text-neutral-600 dark:text-neutral-300' />
    ),
    href: '#',
  },
];

export function AppleStyleDock() {
  return (
    <div className='relative bottom-2 left-1/2 max-w-full -translate-x-1/2'>
        
      <Dock className='items-end pb-3'>
        {data.map((item, idx) => (
          <DockItem
            key={idx}
            className='aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 '
          >
            <DockLabel>{item.title}</DockLabel>
            <DockIcon>{item.icon}</DockIcon>
          </DockItem>
        ))}
      </Dock>
    </div>
  );
}
