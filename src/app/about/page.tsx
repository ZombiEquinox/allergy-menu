import { Metadata } from "next"

export const meta: Metadata = {
  title: "About",
  description: "About page",
}

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">About</h1>
      <p className="text-2xl">This is the about page</p>
    </main>
  )
}