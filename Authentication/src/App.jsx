import Form from "./Form"

function App() {

  return (
    <>
      <div className="flex w-full h-screen">
        <div className="w-full flex items-center justify-center lg:w-1/2">
          <Form />
        </div>
        <div className="hidden relative lg:flex h-full lg:w-1/2 items-center justify-center bg-gray-100">
          <div className="w-60 h-60 bg-gradient-to-tr from-violet-400 to-pink-400 rounded-full animate-bounce">
          </div>
          <div className="w-full absolute bottom-0 h-1/2 bg-white/10 backdrop-blur-lg">
          </div>
        </div>
      </div>
    </>
  )
}

export default App
