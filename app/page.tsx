import Image from "next/image";
import Editor from "./_components/Editor";
import SidePanel from "./_components/SidePanel";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <nav className="min-h-12 bg-neutral-950 border-b-[1px] border-neutral-600 flex items-center px-2">
        <p className="text-white font-medium">flowtie.</p>
      </nav>
      <section className="flex-1 bg-neutral-900 flex flex-row">
        <Editor/>
        <SidePanel/>
      </section>
    </main>
  );
}
