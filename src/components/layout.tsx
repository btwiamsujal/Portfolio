// src/layout/Layout.tsx
import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="w-full px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-screen-2xl mx-auto">
        {children}
      </main>
    </div>
  );
};

export default Layout;
