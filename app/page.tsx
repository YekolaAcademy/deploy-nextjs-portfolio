import Clients from "@/components/ui/Clients";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Grid from "@/components/ui/Grid";
import Hero from "@/components/ui/Hero";
import RecentProjects from "@/components/ui/RecentProjects";
import { navItems } from "@/data";
import Experience from '../components/ui/Experience';
import Approach from "@/components/ui/Approach";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div  className="max-w-7xl w-full">

        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />

      </div>
     
    </main>
  );
}
