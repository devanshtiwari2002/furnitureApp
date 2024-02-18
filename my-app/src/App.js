import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      {/* header */}
      <AppHeader></AppHeader>

      {/* mid poster */}
      <MidPoster></MidPoster>

      {/* {trending products with consitional render } */}
      <TrenProducts></TrenProducts>

        {/* lower poster */}
        <MidPoster></MidPoster>

        {/* all product list  */}
        <AllProducts></AllProducts>

        {/* services */}
        <AppServices></AppServices>

        {/* footer */}
        <AppFooter></AppFooter>

    </div>
  );
}

export default App;
