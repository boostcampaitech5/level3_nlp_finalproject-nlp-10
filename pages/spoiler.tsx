"use client";

import { useState } from "react";
import { useForm } from 'react-hook-form';

type IFormInput = {
  userInput: string
}

type IFetchRes = {
  spoiler: number,
}

export default function Spoiler() {
  const {register, handleSubmit} = useForm<IFormInput>()
  const [spoiler, setSpoiler] = useState(-1)
  console.log(spoiler)
  return(
    <div className="flex flex-col justify-center min-h-screen w-full bg-neutral-100">
      <div className="flex flex-col w-72 h-96 mx-auto bg-blue-100">
        
        <img id="poster" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9"
        alt="어벤져스-엔드게임포스터">
        </img>
      </div>
      <div className="flex mt-10 w-full justify-center space-x-10">
        <form>
          <textarea  {...register("userInput")} placeholder=
          "어벤져스 - 엔드게임의 리뷰가 스포일러인지 알아보세요. ex) 마지막에 ㅇㅇㅇ가 ㅇㅇ 하는게 너무 감동깊었네요." name="userInput"
        className="mt-10 flex mx-auto w-96 h-60 p-3 rounded-lg bg-gray-100 shadow-md resize-none"
        onKeyDown={(e)=>{handleSubmit(onSubmit(setSpoiler))}}/>
        </form>
      <div className="flex flex-col w-32 justify-center mx-auto">
        <span className="flex  h-16 text-lg">{spoiler == -1 ? "스포일러 확률은?" : "스포일러 확률은" + `${(spoiler*100).toFixed(2)}%` + "입니다!"}</span>
      <button className="flex mt-3 py-2 text-sm text-slate-900 text-justify mx-auto w-auto h-10 px-3 rounded-lg bg-blue-300 shadow"
       onClick={handleSubmit(onSubmit(setSpoiler))}>판별하기</button>
      </div>
      </div>
    </div>
  )
}

const onSubmit = (setSpoiler : any) => {
  return async (data : IFormInput) => {
    const url = encodeURI("api_2")
    // fetch with data , POST
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify({
        sentence : data.userInput
      })
    }).then(res => res.json()).catch(err => console.log(err))
    setSpoiler(res.spoiler)
  }
}