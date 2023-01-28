import {
  Business,
  Collections,
  FactCheck,
  FeaturedPlayList,
  Home,
  LocalLibrary,
  School,
} from '@mui/icons-material';
import { MenuItem } from '../models/menu.model';

const skillMenuItem: MenuItem = {
  title: 'Skills',
  link: '#skills',
  icon: FactCheck,
};

const experienceMenuItem: MenuItem = {
  title: 'Experience',
  link: '#experience',
  icon: Business,
};

const homeMenuItem: MenuItem = {
  title: 'Home',
  link: '#profile',
  icon: Home,
};

const educationMenuItem: MenuItem = {
  title: 'Education',
  link: '#education',
  icon: School,
};

const portfolioMenuItem: MenuItem = {
  title: 'Portfolio',
  link: '#portfolio',
  icon: Collections,
};

const publicationsMenuItem: MenuItem = {
  title: 'Publications',
  link: '#publication',
  icon: LocalLibrary,
};

const topMenu: MenuItem[] = [
  homeMenuItem,
  experienceMenuItem,
  skillMenuItem,
  portfolioMenuItem,
  educationMenuItem,
  publicationsMenuItem,
];
const sideMenu: MenuItem[] = [
  homeMenuItem,
  experienceMenuItem,
  skillMenuItem,
  portfolioMenuItem,
  educationMenuItem,
  publicationsMenuItem,
];
const footerMenu: MenuItem[] = [
  homeMenuItem,
  experienceMenuItem,
  skillMenuItem,
  portfolioMenuItem,
  educationMenuItem,
  publicationsMenuItem,
];
const footerExternal: MenuItem[] = [
  homeMenuItem,
  experienceMenuItem,
  skillMenuItem,
  portfolioMenuItem,
  educationMenuItem,
  publicationsMenuItem,
];

export const menuConfig = {
  topMenu,
  sideMenu,
  footerMenu,
  footerExternal,
};
