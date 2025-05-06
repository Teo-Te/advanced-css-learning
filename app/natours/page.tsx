import "./css/icon-font.css";
import "./sass/style.scss";
import { lato } from "../fonts";
import Header from "@/components/natours/Header";
import About from "@/components/natours/About";
import Features from "@/components/natours/Features";
import Tours from "@/components/natours/Tours";

const Page = () => {
  return (
    <article className={lato.className}>
      <Header />
      <main>
        <About />
        <Features />
        <Tours />
      </main>
    </article>
  );
};

export default Page;
