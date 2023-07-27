export default function Home() {
  return (
    <div className="flex min-h-screen min-w-[700px]">
      <aside className="flex w-[250px] bg-gray-100">
        
        <div className="flex flex-col w-full justify-center">
          <PanelButton>
            <span>hello</span>
          </PanelButton>
          <PanelButton>
            <span>babo</span>
          </PanelButton>
        </div>
      </aside>
    </div>
  )
}

// left side panel component

function PanelButton(props: { children?: React.ReactNode }) {
  return (
    <div className="flex align-middle mx-10 justify-center my-3 py-3 bg-gray-300 rounded">
      {props.children}
    </div>
  )
}

