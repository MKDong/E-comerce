import React from "react";
import BanerHomepage from "./Baner/BanerHomepage";
import Advertise from "./Advertise/Advertise";
import Listproduct from "./Listproduct/Listproduct";
import Eventnews from "./Eventnews/Eventnews";
import BanerNews from "./Eventnews/BanerNews";
import Paginationproduct from "./Listproduct/Pagination";
import Tradermark from "./Tradermark/Tradermark";
import Listtradermark from "./Tradermark/Listtradermark";

export default function () {
  return (
    <div className="pt-[1.25rem]">
      <BanerHomepage />
      <Advertise />
      <Listproduct />
      <Paginationproduct />
      <Eventnews />
      <BanerNews />
      <Tradermark />
      <Listtradermark />
    </div>
  );
}
