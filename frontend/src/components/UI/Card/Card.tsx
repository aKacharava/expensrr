import React from "react";

export default function Card({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className + " w-full px-6 py-4 rounded-md"}>{children}</div>
  );
}