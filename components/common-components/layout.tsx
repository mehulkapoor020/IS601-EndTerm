'use client'
import * as React from "react";
import { ToastContainer, toast } from 'react-toastify';
import { useSearchParams } from 'next/navigation';
import { NextUIProvider } from "@nextui-org/react";
import 'react-toastify/dist/ReactToastify.css';

// @ts-ignore
export default function Layout({ children }) {
  const queryParams = useSearchParams()
  const signUp = queryParams.get('signUp')
  if (signUp == '1' || signUp == 'true') {
    toast.success("Welcome to Baker's Club", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  }
  return (
    <div>
      <main>
        <NextUIProvider className="bg-white text-black">
          {children}
          <ToastContainer />
        </NextUIProvider>
      </main>
    </div>
  );
}
