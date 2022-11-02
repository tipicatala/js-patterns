import * as React from "react";

import "./style.css";

import Listings from "./components/Listings";
import TemperatureList from "./patterns/renderProps";
// import Input from "./components/Input";
import DataProvider from "./patterns/provider";
import Compound from "./patterns/compound";

export default function App() {
  // return <Listings />;
  // return <TemperatureList />;
  // return (
  //   <DataProvider>
  //     <div
  //       style={{
  //         display: "flex",
  //         flexDirection: "column",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         padding: "3em",
  //       }}
  //     >
  //       <Input />
  //       <Listings />
  //     </div>
  //   </DataProvider>
  // );
  return <Compound/>
}
