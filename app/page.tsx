"use client";
import { useState } from "react";
import Spoiler from "../pages/spoiler";
import Keyword from "./keyword";


export default function Home() {
  const [activatedPage, setActivatedPage] = useState<string>("keyword")
  return (
    <div className="flex min-h-screen min-w-[700px]">
      <aside className="flex w-full  max-h-screen absolute">
        <div className="flex w-full justify-center">
          <PanelButton setter={()=>{setActivatedPage("keyword")}}>
            <span>키워드 기반 영화 추천</span>
          </PanelButton>
          <PanelButton setter={()=>{setActivatedPage("spolier")}}>
            <span>영화 스포일러 판별</span>
          </PanelButton>
        </div>
      </aside>
      {
        activatedPage === "keyword" ?
        <Keyword /> : <Spoiler />
      }
    </div>
  )
}

// left side panel component

function PanelButton(props: { children?: React.ReactNode, setter?: any }) {
  return (
    <div className="flex align-middle mx-10 w-64 justify-center my-3 py-3 bg-white rounded"
    onClick={props.setter}>
      {props.children}
    </div>
  )
}

