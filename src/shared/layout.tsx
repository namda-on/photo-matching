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
      <div className="flex flex-col w-96 h-full justify-start items-start">
        {children}
      </div>
    </div>
  );
};

export default Layout;
