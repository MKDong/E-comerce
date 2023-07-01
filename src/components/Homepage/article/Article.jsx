import React from "react";
import "./Article.scss";
import ListArticle from "./ListArticle";
export default function Article() {
  return (
    <div className="w-full h-full Article bg-black rounded-[2.5rem]">
      <ListArticle />
    </div>
  );
}
