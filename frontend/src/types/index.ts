import React from "react";

export interface NavbarIconProps {
  icon: React.ReactNode;
  title: string;
  href?: string;
}

export interface ISidebarItemProps {
  item: ISidebarItem;
  openSidebar: boolean[];
  handleOpenSidebarSubList: (index: number) => void;
  index: number
}
export interface SidebarItemDragDropProps {
  item: ISidebarItem;
  handleOpenSidebarSubList: (index: number) => void;
  index: number;
}

export interface ISidebarItem {
  id: number;
  title: string;
  target: string;
  visible?: boolean;
  children?: ISidebarItem[];
}

export interface IJobPost {
  companyImage: string;
  isActive: boolean;
  jobTitle: string;
  jobLocation: string;
  postJobDate: string;
  companyName: string;
  yearExperience: string;
  jobType: string;
  jobLocal: string;
  relativeTracks: string;
}

export interface ISidebarProps {
  navItems: ISidebarItem[];
}

export interface ISearchParamProps {
  params: { [key: string]: string }; // Get params
  searchParams: { [key: string]: string | string[] | undefined }; // Get query
};

export interface ErrorPageProps {
  error: Error;
  reset: () => void;
}