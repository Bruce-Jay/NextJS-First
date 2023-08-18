"use client"
import {useState, FormEvent} from "react"
import {useRouter} from "next/navigation"

export default function Home() {
  const [inputVal, setInputVal] = useState("")
  const {push} = useRouter()
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    push(`/prediction/${inputVal}`)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>
          Enter Your Name
        </h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Type your name..." className="text-black" onChange={(e) => setInputVal(e.target.value)}/>
          <button type="submit">Predict Data</button>
        </form>
      </div>
    </main>
  )
}
