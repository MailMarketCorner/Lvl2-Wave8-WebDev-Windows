import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Fruit } from "./components/Fruit";
import { CapitalizeWords } from "./mapping/CapitalizeWords";
import { RenderFromData } from "./mapping/RenderFromData";
import { EvensOnly } from "./filtering/EvensOnly";
import { PreFilter } from "./filtering/PreFilter";
import { SumNumbers } from "./reducing/SumNumbers";
import { CountOccurences } from "./reducing/CountOccurences";

import { CaseInsensitive } from "./filtering/CaseInsensitive";
import { AdminsOnly } from "./filtering/AdminsOnly";
import { EmptyState } from "./filtering/EmptyState";
import { LongWordsOnly } from "./filtering/LongWordsOnly";
import { MultipleConditions } from "./filtering/MultipleConditions";
import { PriceGreaterThan20 } from "./filtering/PriceGreaterThan20";
import { SearchSimulation } from "./filtering/SearchSimulation";

import { ConditionalRender } from "./mapping/ConditionalRender";
import { DoubleNumbers } from "./mapping/DoubleNumbers";
import { FormatPrices } from "./mapping/FormatPrices";
import { FruitList} from "./mapping/FruitList";
import { FullNames } from "./mapping/FullNames";
import { RankedList } from "./mapping/RankedList";
import { RenderNumbers } from "./mapping/RenderNumbers";
import { RenderObjects } from "./mapping/RenderObjects";
import { CartTotal } from "./reducing/CartTotal";

// component
function App() {
  // html

  const cars = [{ name: "BMW", color: "red" }, "Honda", "Toyota"];

  return (
    <>
    <h2 style={{fontWeight: "bold", color: "lightblue"}}>FILTERING</h2>
      <AdminsOnly />
      <CaseInsensitive />
      <EmptyState />
      <EvensOnly />
      <LongWordsOnly />
      <MultipleConditions />
      <PreFilter />
      <PriceGreaterThan20 />
      <SearchSimulation />

    <h2 style={{fontWeight: "bold", color: "lightblue"}}>MAPPING</h2>
      <CapitalizeWords />
      <ConditionalRender />
      <DoubleNumbers />
      <FormatPrices />
      <FruitList />
      <FullNames />
      <RankedList />
      <RenderFromData />
      <RenderNumbers />
      <RenderObjects />

    <h2 style={{fontWeight: "bold", color: "lightblue"}}>REDUCING</h2>
      <CountOccurences />
      <CartTotal />


      
    </>
  );
}

export default App;
