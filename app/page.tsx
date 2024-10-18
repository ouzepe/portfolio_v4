import { About } from "~/components/About";
import Footer from "~/components/Footer";
import { Nav } from "~/components/Nav";
import ScrollHorizontalText from "~/components/ScrollHorizontalText";

export default function Home() {
  return (
    <main className='h-[100dvh]'>
      <Nav />
      <About />
      <ScrollHorizontalText />
      <Footer />
    </main>
  );
}
