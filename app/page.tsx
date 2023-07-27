import Keyword from "./keyword"

export default function Home() {
  return (
    <div className="flex min-h-screen min-w-[700px]">
      <aside className="flex w-full  max-h-screen fixed">
        <div className="flex w-full justify-center">
          <PanelButton>
            <span>키워드 기반 영화 추천</span>
          </PanelButton>
          <PanelButton>
            <span>영화 스포일러 판별</span>
          </PanelButton>
        </div>
      </aside>
      <Keyword />
    </div>
  )
}

// left side panel component

function PanelButton(props: { children?: React.ReactNode }) {
  return (
    <div className="flex align-middle mx-10 w-64 justify-center my-3 py-3 bg-white rounded">
      {props.children}
    </div>
  )
}

