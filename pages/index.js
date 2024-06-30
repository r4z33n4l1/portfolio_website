import Head from "next/head";
import { Home } from "@/components/home/Home";
import { Construction } from "@/components/underconstruction/Construction";
export default function home() {
  return (
    <>
      <Head>
        <title>Razeen Ali | Software Developer</title>
        <meta name="description" content="Your next best hire" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Construction />
      {/* <Home /> */}
    </>
  );
}
