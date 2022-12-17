import Head from "next/head";
import Main from "../components/Main.jsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Morning Summary</title>
        <meta name="description" content="Morning Summary" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </>
  );
}
