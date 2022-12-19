import {Card, CardContent, Typography, useMediaQuery} from '@material-ui/core/';
import { Swiper, SwiperSlide, } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Courses(){
	const isMobile = useMediaQuery('(max-width:670px)')
	const modules = [Autoplay,Navigation,Pagination];
	const autoplay = {delay:3000}
	const pagination={clickable:true}

	const fakeObj = [
		{subject: 'Mathematics',color: 'blue'},
		{subject: 'Science',color: 'yellow'},
		{subject: 'English',color: 'green'},
		{subject: 'Information Technology',color: 'pink'},
	]
		
	return(
		<>
			<div>
				<Swiper
					modules = {modules}
					slidesPerView={isMobile?1:3}
					spaceBetween={10}
					pagination={pagination}
					autoplay={autoplay}
				>
					{
					fakeObj.map((item,key)=>{
						return(
						<SwiperSlide key={key}>
							<Card>
								<CardContent className={`bg-${item.color}-300 h-20`}>
									<Typography className='text-center'>
										{item.subject}
									</Typography>
								</CardContent>
							</Card>
						</SwiperSlide>
						)
					})
					}
				</Swiper>
			</div>
		</>
	)
};
