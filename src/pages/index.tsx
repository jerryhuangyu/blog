import Hero from "@/components/Hero";
import MarqueeArticles from "@/components/MarqueeArticles";
import Layout from "@theme/Layout";
import React from "react";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <MarqueeArticles />
    </Layout>
  );
}
