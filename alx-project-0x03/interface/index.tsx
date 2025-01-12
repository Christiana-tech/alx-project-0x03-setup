import { ReactNode } from "react";

// In interface/index.ts
export interface PageRouteProps {
    pageRoute: string;
  }
  
  export interface ButtonProps {
    buttonLabel: string;
    buttonSize?: string;
    buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
    action?: () => void;
  }
  
export interface LayoutProps {
  children: ReactNode;
}
  