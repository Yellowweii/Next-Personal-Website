import Transition from "@/components/Transition";
import Layout from "@/sections/Layout";

export default function Home() {
  return (
    <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
      <Transition />
      <Layout />
    </main>
  );
}
