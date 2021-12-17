import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className={
        "flex flex-col justify-start items-center pt-2 px-5 w-screen h-screen"
      }
    >
      <div className="flex flex-col w-full max-w-sm h-full justify-start items-start">
        {children}
      </div>
    </div>
  );
};

export default Layout;
