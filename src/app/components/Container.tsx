import React, { ReactNode } from "react";

type Props = {
    styles: string,
    children: ReactNode
}

const Container = ({ styles, children }: Props) => {
  return (
    <div className={`flex items-center justify-around max-w-full ${styles}`}>
        {children}
    </div>
  );
}

export default Container;