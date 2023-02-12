import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Header from "../components/Header";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

const Home: NextPage = ({
  exploreData,
  cardsData,
}: {
  exploreData: any;
  cardsData: any;
}) => {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* Pull data from server - API Endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item: any, index: number) => (
              <SmallCard
                key={index}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8"> Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll">
            {cardsData?.map((item: any, index: number) => (
              <MediumCard key={index} img={item.img} title={item.title} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

interface Data {
  img: String;
  location: String;
  distance: String;
}

export async function getStaticProps() {
  const exploreData: Data[] = await fetch(
    "https://www.jsonkeeper.com/b/4G1G"
  ).then((res) => res.json());

  const cardsData: Data[] = await fetch(
    "https://www.jsonkeeper.com/b/VHHT"
  ).then((res) => res.json());

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
