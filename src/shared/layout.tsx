import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className={
        "flex flex-col justify-center items-start pt-4 px-6 w-screen h-screen"
      }
    >
      {children}
    </div>
  );
};

export default Layout;
