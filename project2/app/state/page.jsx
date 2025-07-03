"use client"
import React from "react";
import { useState } from "react";
export default function State() {
    let [state, setState] = React.useState(0);
    function increment() {
        setState((prevState) => prevState + 1);
        document.getElementById("action").innerText = "Action: Increment";
        document.getElementById("previousState").innerText = `Previous State: ${state}`;
        document.getElementById("nextstate").innerText = `Next State: ${state + 2}`;
        document.getElementById("nextaction").innerText = "Next Action: Increment";
    }
    function decrement() {
        setState((prevState) => prevState - 1);
        document.getElementById("action").innerText = "Action: Decrement";
        document.getElementById("previousState").innerText = `Previous State: ${state}`;
        document.getElementById("nextstate").innerText = `Next State: ${state - 2}`;
        document.getElementById("nextaction").innerText = "Next Action: Decrement";
    }
    function reset() {
        setState(0);
        document.getElementById("action").innerText = "Action: Reset";
        document.getElementById("previousState").innerText = `Previous State: ${state}`;
        document.getElementById("nextstate").innerText = `Next State: 0`;
        document.getElementById("nextaction").innerText = "Next Action: Reset";
    }
    return (
        <div className="flex flex-col items-center justify-between p-24 gap-2">
            <h1 className="text-2xl font-bold mb-4">State Management Example</h1>
            <button className="bg-blue-600 text-white px-6 py-3 rounded flex justify-center items-center mb-4" onClick={increment}>
                Increment
            </button>
            <button className="bg-red-600 text-white px-6 py-3 rounded flex justify-center items-center mb-4" onClick={decrement}>
                Decrement
            </button>
            <button className="bg-green-600 text-white px-6 py-3 rounded flex justify-center items-center mt-4" onClick={reset}>
                Reset
            </button>
            <p className="mt-4 text-4xl" id="state">State: {state}</p>
            <p className="mt-2"id="action">Action: None</p>
            <p className="mt-2"id="previousState">Previous State: 0</p>
            <p className="mt-2"id="previousaction">Previous Action: None</p>
            <p className="mt-2"id="nextstate">Next State: 0</p>
            <p className="mt-2"id="nextaction">Next Action: None</p>
        </div>
    );
    }       