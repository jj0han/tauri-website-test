import { Button } from "./components/ui/button";
import {
  ArrowRight,
  HomeIcon,
  Library,
  Play,
  Plus,
  Repeat,
  Search,
  Shuffle,
  SkipBack,
  SkipForward,
} from "lucide-react";

function App() {
  return (
    <div className="bg-zinc-950 flex flex-col h-screen p-1">
      <main className="bg-zinc-950 grid grid-cols-4 h-full gap-2">
        <div className="flex flex-col h-full rounded-lg gap-2">
          <div className="bg-zinc-900 flex flex-col h-fit rounded-lg p-3 gap-2">
            <Button
              variant={"link"}
              className="flex gap-4 text-zinc-400 font-semibold hover:text-zinc-100 hover:no-underline text-left w-fit text-base"
            >
              <HomeIcon size={24} />
              Início
            </Button>
            <Button
              variant={"link"}
              className="flex gap-4 text-zinc-400 font-semibold hover:text-zinc-100 hover:no-underline text-left w-fit text-base"
            >
              <Search size={24} />
              Buscar
            </Button>
          </div>
          <div className="bg-zinc-900 flex flex-col h-full rounded-lg">
            <div className="p-3 flex justify-between items-center text-zinc-400">
              <Button
                variant={"link"}
                className="flex gap-4 text-zinc-400 font-semibold hover:text-zinc-100 hover:no-underline text-left w-fit text-base"
              >
                <Library size={24} />
                Sua Biblioteca
              </Button>
              <div className="flex items-center gap-4">
                <Plus size={24} />
                <ArrowRight size={24} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-zinc-900 relative col-span-2 flex flex-col h-full rounded-lg">
          <div className="absolute bg-gradient-to-b from-orange-500 via-orange-800 to-transparent top-0 left-0 right-0 h-52 opacity-30 rounded-t-lg" />
          <div className="px-8 py-16 z-10">
            <h1 className="text-zinc-50 font-sans font-black text-3xl xl:text-5xl">
              Olá, Mundo!
            </h1>
          </div>
        </div>
        <div className="bg-zinc-900 flex flex-col h-full rounded-lg"></div>
      </main>
      <footer className="bg-zinc-950 grid grid-cols-4 justify-center items-center h-24">
        <div></div>
        <div className="flex flex-col gap-3 col-span-2">
          <div className="flex gap-6 justify-center items-center text-zinc-500">
            <Shuffle size={20} />
            <SkipBack size={20} fill="rgb(113, 113, 122)" />
            <div className="bg-zinc-100 p-2 rounded-full flex items-center justify-center">
              <Play size={20} fill="rgb(9, 9, 11)" className="text-zinc-950" />
            </div>
            <SkipForward size={20} fill="rgb(113, 113, 122)" />
            <Repeat size={20} />
          </div>
          <div className="flex gap-4 justify-center items-center text-zinc-400 text-xs">
            <p>00:00</p>
            <div className="bg-zinc-100 h-1 w-9/12" />
            <p>00:00</p>
          </div>
        </div>
        <div></div>
      </footer>
    </div>
  );
}

export default App;
