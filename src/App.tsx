import { Dock } from "lucide-react";
import { TestBox } from "@/components/TestBox";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <Dock size={48} className="text-cyan-400" />
      <TestBox />
    </div>
  );
}
