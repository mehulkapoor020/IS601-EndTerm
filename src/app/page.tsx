"use client";
import * as React from "react";
import { NextUIProvider } from '@nextui-org/react'
import Image from 'next/image'

export default function Home() {
  return (
    <NextUIProvider className="bg-white text-black">
      <h1>
        NextJS Project
      </h1>
    </NextUIProvider>
  )
}
