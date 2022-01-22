import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/request";

export default function Home({ results }) {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <meta name="description" content="Hulu 2.0 demo app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Nav />

      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const bundledData = await fetch("https://api.tvmaze.com/shows?page=1").then(
    (res) => res.json()
  );

  let filteredData = bundledData.filter((item) => {
    return item.genres.includes(requests[genre]?.query);
  });

  if (!filteredData.length) {
    filteredData = bundledData.slice(0, 20);
  }

  return {
    props: {
      results: filteredData,
    },
  };
}
