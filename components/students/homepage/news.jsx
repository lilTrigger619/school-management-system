import {
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@material-ui/core/";
import NewsData from "../../../utils/newsData";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Scrollbar, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

export default function News() {
  const isMobile = useSelector((state) => state.StudentUi.isMobile);
  const Styles = useStyles();
  return (
    <>
      <div className={`mb-9 w-full `}>
        <Card>
          <CardHeader subheader="News" />
          <CardContent>
            <Swiper
              modules={[Scrollbar, Autoplay]}
              slidesPerView={!isMobile ? 2 : 1}
              spaceBetween={10}
              scrollbar={{ draggable: true }}
              autoplay={{ delay: 8000 }}
            >
              {NewsData.map((item, key) => (
                <SwiperSlide>
                  <div className={`max-w-sm m-auto ${Styles.NewsSlide}`}>
                    <Card>
                      <CardHeader title={item.title} subheader={item.date} />
                      <CardContent className={`${Styles.Slide}`}>
                        {item.body}
                      </CardContent>
                    </Card>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

const useStyles = makeStyles((themes) => ({
  NewsSlide: {
    maxHeight: "14rem",
    overflow: "auto",
  },
  Slide: {
    maxHeight: "6rem",
    overflow: "auto",
    wordWrap: "break-word",
    overflow: "auto",
  },
}));
