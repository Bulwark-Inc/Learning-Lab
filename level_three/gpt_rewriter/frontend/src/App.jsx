import { useState } from "react"
import Header from "./components/Header"
import RewriterForm from "./components/RewriterForm"
import OutputBox from "./components/OutputBox"

function App() {
  const [result, setResult] = useState("")

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <main className="max-w-2xl mx-auto p-4">
        <RewriterForm setResult={setResult} />
        <OutputBox result={result} />
      </main>
    </div>
  )
}

export default App
