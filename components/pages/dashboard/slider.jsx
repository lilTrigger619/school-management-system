
import { Swiper, SwiperSlide, } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import {Card, CardContent, CardActionArea, Typography, useMediaQuery} from '@material-ui/core';
import {useState, useEffect} from 'react';


export default function SwiperComp(){
	const isMobile=useMediaQuery("(max-width:700px)")

	return (
		<div className={`my-8`}>
			<Swiper
			modules={[Navigation, Pagination, Autoplay]}
			slidesPerView={isMobile? 1:3}
			spaceBetween={12}
			pagination={{clickable:true}}
			autoplay={{delay:3000}}
			>
				<SwiperSlide >
					<Card className={` bg-red-500`}>
					<CardActionArea>
						<CardContent className={`text-center space-between bg-green-400`}
						>
							<Typography variant="h2">17.2k</Typography>
							<Typography>TOTAL NUMBER OF STUDENTS</Typography>
						</CardContent>
					</CardActionArea>
					</Card>
				</SwiperSlide>
				<SwiperSlide>
					<Card>
						<CardContent className={`text-center space-between bg-yellow-400`}>
							<Typography variant="h2">500</Typography>
							<Typography>TOTAL NUMBER OF FORIEGN STUDENTS</Typography>
						</CardContent>
					</Card>
				</SwiperSlide>
				<SwiperSlide>
					<Card>
						<CardContent className={`text-center space-between bg-blue-500`}>
							<Typography variant="h2">8.5K</Typography>
							<Typography>TOTAL NUMBER OF FEMALE STUDENTS</Typography>
						</CardContent>
					</Card>
				</SwiperSlide>
				<SwiperSlide>
					<Card>
						<CardContent className={`text-center space-between bg-pink-500`}>
							<Typography variant="h2">8.7k</Typography>
							<Typography>TOTAL NUMBER OF MALE STUDENTS</Typography>
						</CardContent>
					</Card>
				</SwiperSlide>
				<SwiperSlide>
					<Card>
						<CardContent className={`text-center space-between bg-indigo-500`}>
							<Typography variant="h2">3</Typography>
							<Typography>NUMBER OF INACTIVE STUDENTS</Typography>
						</CardContent>
					</Card>
				</SwiperSlide>
				
			</Swiper>
		</div>
		)
}