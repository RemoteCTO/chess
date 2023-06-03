import Board from '../components/Board'

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row justify-around items-center h-screen">
      <div className="hidden md:flex">One</div>
      <div className="h-[50vh] w-[50vh] md:w-[90vh] md:h-[90vh]">
        <Board />
      </div>
      <div className="">Three</div>
    </main>
  )
}
