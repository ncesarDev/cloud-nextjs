import Head from "next/head";
import { Inter } from "@next/font/google";
import Layout from "../components/global/layout";
import Hero from "../components/hero";
import FeaturedListing from "../components/featured-listing";
import WhyChooseUs from "../components/why-choose-us";
import PropertyListing from "../components/property-listing";
import Testimonial from "../components/testimonial";
import { API_URL } from "../config";
import Better_Option from "../components/better_option";
import Better_option_2 from "../components/better_option_2";


const inter = Inter({ subsets: ["latin"] });

export default function Home({ property }) {
  const { data } = property;

  return (
    <Layout>
      <Hero />
      <Better_Option/>
      <FeaturedListing data={data} />
      <Better_option_2/>
      <WhyChooseUs />
      <PropertyListing data={data} />
      <Testimonial />
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/properties?populate=*`);
  const property = await res.json();

  return {
    props: { property },
  };
}
