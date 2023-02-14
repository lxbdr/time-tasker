import React from "react";

type ContainerProps = {
  children?: React.ReactNode;
};

export default function Container(props: ContainerProps) {
  const { children } = props;
  return <div className={`mx-auto max-w-4xl px-4`}>{children}</div>;
}
