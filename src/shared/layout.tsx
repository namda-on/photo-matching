import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className={
        "flex flex-col justify-start items-center pt-4 px-11 w-screen h-screen"
      }
    >
      {children}
    </div>
  );
};

export default Layout;
