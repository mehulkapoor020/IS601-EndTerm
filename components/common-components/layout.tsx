'use client'
import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";

// @ts-ignore
export default function Layout({ children }) {
  return (
    <div>
      <main>
        <NextUIProvider className="bg-white text-black">
          {children}
        </NextUIProvider>
      </main>
    </div>
  );
}
