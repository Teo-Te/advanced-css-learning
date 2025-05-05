import "./style.css";
import { lato } from "../fonts";
import Header from "@/components/natours/Header";

const Page = () => {
  return (
    <article className={lato.className}>
      <Header />
    </article>
  );
};

export default Page;
