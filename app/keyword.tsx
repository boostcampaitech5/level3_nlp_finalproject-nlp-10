// keyword.tsx
"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';

type IFormInput = {
  userInput: string
}

type IMovie = {
  id: string,
  title: string,
  poster: string,
  keyword: string[]
}

export default function Keyword() {
  const {register, handleSubmit} = useForm<IFormInput>()
  const [movieList, setMovieList] = useState([])
  return (
    <div className="flex flex-col justify-center min-h-screen w-full bg-neutral-100">
      <form onSubmit={handleSubmit(onSubmit(setMovieList))}>
        <input {...register("userInput")} type="text" placeholder='원하는 키워드를 입력해보세요. ex) 액션, 코믹' name="userInput" className="mt-60 flex mx-auto w-96 h-10 px-3 rounded-lg bg-gray-100 shadow-md"/>
      </form>
      <div className="flex flex-col w-full h-auto min-w-[400px] max-w-[600px] mx-auto min-h-[600px] mt-10 bg-blue-100">
        {movieList.length != 0 ? movieList.map((movie : IMovie) => {
          return <Movie key={movie.id} id={movie.id} title={movie.title} poster={movie.poster} keyword={movie.keyword}/>
        }) : <div className="flex justify-center my-auto text-gray-500 text-2xl">키워드를 입력해 원하는 영화를 검색해보세요.</div> }
      </div>
    </div>
  )
}

const onSubmit = (setMovieList : any) => {
  return async (data : IFormInput) => {
    // fetch
    const res = {
        "id": "1",
        "title": "어벤져스",
        "poster": "https://an2-img.amz.wtchn.net/image/v2/IRi6m4d3B8qOiO8Ue-VG7w.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk9EYzRNamt6TURBM016QTVNRE0wT0RJaWZRLmdrQU1rdjJlUGFsMUdlOU9YTFVDYzRHSkdMQjBkZ3FBNlVaWVBzVU41UlU",
        "keyword": ["액션", "어벤져스", "히어로", "마블", "토니스타크"]
      }
    setMovieList([res,res,res,res,res])
  }
}

const Movie = (props: { id:string, title: string, poster: string, keyword: string[] }) => {
  return (
    <div className="flex h-64 justify-between rounded bg-slate-50 m-3">
      <div className="flex pl-6 py-5">
        <img src={props.poster} alt={props.title} className=""/>
      </div>
      <div className="flex flex-col w-full py-10 align-middle">
        <div className='flex mx-auto text-lg'>{props.title}</div>
        <div className='flex flex-wrap justify-center mt-5'>{props.keyword.map((keyword : string) => {
          return (<div key={props.id + keyword} className='rounded-lg bg-red-200 py-1 px-2 mx-2 my-1 text-sm'>{keyword}</div>)
        })}
        </div>
      </div>
    </div>
  )
}