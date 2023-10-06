import './index.css'

import { Demo, Header, Hero } from "./components";

export default function App() {
  return(
    <main className="min-h-screen bg-gradient-to-r from-violet-200 to-pink-200 pb-14">
      <div className="max-w-7xl mx-auto px-4">
        <Header />
        <Hero />
        <Demo />
      </div>
    </main>
  )
}