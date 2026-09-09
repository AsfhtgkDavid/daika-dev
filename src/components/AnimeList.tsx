import * as Console from "node:console";
import { cacheLife } from "next/dist/server/use-cache/cache-life";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import AnimeCard from "@/components/AnimeCard";

const mal = "https://api.myanimelist.net/v2";

async function getAnimeList() {
	"use cache";
	cacheLife("hours");
	const data = await fetch(
		`${mal}/users/${process.env.MAL_USER}/animelist?status=watching&fields=list_status`,
		{
			headers: {
				"X-MAL-CLIENT-ID":
					process.env.MAL_CLIENT_ID === undefined
						? ""
						: process.env.MAL_CLIENT_ID,
			},
		},
	);
	return await data.json();
}

async function getAnime(id: number) {
	"use cache";
	cacheLife("hours");
	const data = await fetch(`${mal}/anime/${id}?fields=num_episodes`, {
		headers: {
			"X-MAL-CLIENT-ID":
				process.env.MAL_CLIENT_ID === undefined
					? ""
					: process.env.MAL_CLIENT_ID,
		},
	});
	return await data.json();
}

const AnimeList = async () => {
	const rawList = (await getAnimeList()).data;
	const animeList = await Promise.all(
		rawList.map(async (el) => {
			const details = await getAnime(el.node.id);
			return {
				...el,
				totalEpisodes: details.num_episodes,
			};
		}),
	);
	return (
		<div>
			<h1 className="text-2xl md:text-4xl text-center font-bold text-gray-100 relative inline-block">
				Anime I'm watching right now
			</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2 p-4 md:p-8">
				{animeList.map((el, index) => (
					<AnimeCard key={index} el={el} />
				))}
			</div>
		</div>
	);
};

export default AnimeList;
