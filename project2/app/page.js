// "use client";
// import ExampleClient from "./components/ExampleClient";
// import ExampleServer from "./components/ExampleServer";
import styles from "./page.module.css";
import State from "./state/page";

export default function Home() {
  // console.log("Where i am rendering")
  // const dataSubmit = () => {
  //   console.log("Button clicked");
  //   alert("Button clicked");
  // };
  // const handlechanges = (e) => {
  //   console.log("Input changed:", e.target.value);
  // };
  // const clearinput = () => {
  //   const inputFild = document.getElementById("inputtext");
  //   if (inputFild) {
  //     inputFild.value = ""; // Clear the input field
  //     console.log("Input field cleared");
  //   } else {
  //     console.error("Input field not found");
  //   }
  // };
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>HELLO</h1>
        <div className="flex flex-col items-center justify-between p-24">
          <State />
          </div>
          <div className="flex flex-col items-center justify-between p-24">
          {/* <ExampleClient /> */}
          {/* <ExampleServer /> */}
          {/* <button className="bg-amber-600 text-white px-6 py-3 rounded flex justify-center items-center" onClick={dataSubmit}>
            Click Me
          </button> */}
          {/* <input
            type="text"
            id="inputtext"
            className="border-2 border-gray-300 p-2 rounded mb-4"
            placeholder="Enter some text"
            onChange={handlechanges}
          />
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded flex justify-center items-center"
            onClick={clearinput}
          >
            Clear Input
          </button> */}
        </div>
      </main>
    </div>
  );
}
