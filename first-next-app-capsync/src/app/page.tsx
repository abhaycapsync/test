"use client";
import { useAppDispatch } from "@/lib/ReduxHooks";
import { decrement, increment, useCount } from "@/lib/Sliecs/CounteSlice";
import React from "react";

const page = () => {
  const value = useCount();
  const dispatch = useAppDispatch();

  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <div className="flex items-center justify-center space-x-3 text-white">
        <button
          className="py-2 px-4  bg-green-500 rounded"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Increment
        </button>
        <div className="text-4xl text-black">{value}</div>
        <button
          className="py-2 px-4 bg-red-500 rounded"
          onClick={() => {
            dispatch(increment());
          }}
        >
          Decrement
        </button>
      </div>
    </main>
  );
};

export default page;
