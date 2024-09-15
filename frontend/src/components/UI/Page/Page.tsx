import React from "react";

export default function Page({
  title,
  ...props
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto flex flex-col items-center">
      <h1 className="text-center text-3xl">{title}</h1>
      {props.children}
      <nav>
        <menu className="flex gap-4">
          <li>home</li>
          <li>income</li>
          <li>expense</li>
          <li>settings</li>
        </menu>
      </nav>
    </div>
  );
}
