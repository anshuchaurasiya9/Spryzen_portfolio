
// Fix: Added missing React import to provide the React namespace for React.ReactNode
import React from 'react';

export enum ProjectCategory {
  MOBILE = 'Mobile Apps',
  WEB = 'Websites',
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description?: string;
  link: string;
  tags: string[];
  duration?: string;
  ongoing?: boolean;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}