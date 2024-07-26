import type { Navlink } from '../types';
import {
  UserGroupIcon,
  HomeIcon,
  PencilIcon,
  ListBulletIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';


const links: Navlink[] = [
  { 
    label: 'Dashboard', 
    link: '/dashboard', 
    icon: HomeIcon },
  {
    label: 'Campaigns',
    link: '/campaigns',
    icon: PencilIcon,
  },
  { 
    label: 'Lists', 
    link: '/lists', 
    icon: ListBulletIcon, 
  },
  { 
    label: 'Subscribers', 
    link: '/subscribers', 
    icon: UserGroupIcon,
  },
  { 
    label: 'Settings', 
    link: '/settings', 
    icon: Cog6ToothIcon,
  },
];

export default links;