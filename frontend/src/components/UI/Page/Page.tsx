import React from "react";

export default function Page({
  title,
  ...props
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-2/3 mx-auto">
      <h1 className="text-center text-3xl">{title}</h1>
      {props.children}
    </div>
  );
}
