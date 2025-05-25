import Hero from "@/components/Hero";
import MarqueeBlogs from "@/components/MarqueeBlogs";
import Layout from "@theme/Layout";
import React from "react";

export default function Home() {
	return (
		<Layout>
			<Hero />
			<MarqueeBlogs />
		</Layout>
	);
}
