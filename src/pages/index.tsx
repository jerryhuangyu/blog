import Layout from "@theme/Layout";
import React from "react";
import { Ripple } from "../components/magicui/ripple";

export default function Home() {
	return (
		<Layout>
			<main>
				<div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
					<p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
						Huang Yu - Blogs
					</p>
					<Ripple
						mainCircleOpacity={0.3}
						mainCircleSize={500}
						numCircles={10}
					/>
				</div>
			</main>
		</Layout>
	);
}
