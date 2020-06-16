import App from "../components/App";
import Head from "next/head";

export default function Home() {
  return (
    <App>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet"></link>
      </Head>
      <p>Index Page</p>
    </App>
  );
}
