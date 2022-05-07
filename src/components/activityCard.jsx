import React from "react";
import "../shared/tailwindcss.css";

export default function ActivityCard() {
	return (
		<>
			<div className="w-full flex items-center justify-center">
				<div
					className="xl:w-1/4 sm:w-1/2 w-full 2xl:w-1/5 flex flex-col items-center py-16 md:py-12 bg-gradient-to-r from-indigo-700 to-purple-500 rounded-lg">
					<div className="w-full flex items-center justify-center">
						<div className="flex flex-col items-center">
							<img
								src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F4.bp.blogspot.com%2F-lHfZNXUUJUU%2FWxmAufNCSdI%2FAAAAAAAAH8E%2FURQjTY6-zYIhub3rm6H3V6-UFZp9-j3AQCLcBGAs%2Fs1600%2Fhyperspace-mountain-star-wars-disneyland-paris.jpg&f=1&nofb=1"
								alt="activity" className="w-full"/>
							<p
								className="mt-2 text-xs sm:text-sm md:text-base font-semibold text-center text-white">Une
								attraction</p>
						</div>
					</div>
					<div className="flex items-center mt-7">
						<div className>
							<p className="text-xs text-gray-300">Taille requise</p>
							<p className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-50">1,20
								M</p>
						</div>
						<div className="ml-12">
							<p className="text-xs text-gray-300">Transfert requis</p>
							<p
								className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-50">$2890</p>
						</div>
						<div className="ml-12">
							<p className="text-xs text-gray-300">Average</p>
							<p className="mt-2 text-base sm:text-lg md:text-xl 2xl:text-2xl text-gray-50">$169</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
