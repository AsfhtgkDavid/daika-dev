"use client";

import Image from "next/image";
import Tilt from "react-parallax-tilt";
import StarIcon from "@/assets/star.svg";

const AnimeCard = ({ el }) => {
	return (
		<Tilt tiltReverse>
			<a
				href={`https://myanimelist.net/anime/${el.node.id}`}
				className="relative w-52 m-4 aspect-2/3 block"
				title={el.node.title}
			>
				<Image
					src={el.node.main_picture.medium}
					alt="Anime poster"
					className="object-cover"
					fill
				/>
				<div className="absolute top-3 left-3 text-white bg-gray-600/50 text-sm p-1">
					{el.list_status.num_episodes_watched}/{el.totalEpisodes}
				</div>
				<div className="absolute bottom-2 left-2 right-2 text-center text-white bg-gray-600/70 text-sm p-1 truncate">
					{el.node.title}
				</div>
				<div className="absolute top-3 right-3 text-white bg-gray-600/50 text-sm p-1 flex items-center gap-1">
					<StarIcon className="w-4 h-4" />
					{el.list_status.score}
				</div>
			</a>
		</Tilt>
	);
};

export default AnimeCard;
