import dashboardNews from "../../../utils/dashboardNews";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core/";
//swiper modules
import { Scrollbar, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
//import swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

const NoticeBoard = () => {
  return (
    <>
      <div>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          modules={[Scrollbar, Autoplay]}
          autoplay={{
            duration: 6000,
          }}
          scrollbar={{
            draggable: true,
          }}
        >
          {dashboardNews.map((value, key) => (
            <SwiperSlide>
              <Card>
                <CardHeader title={value.title} subheader={value.data} />
                <CardContent>
                  <div className={``}>
                    <Typography variant="body1"> {value.body}</Typography>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  content: {
    maxHeight: "5rem",
    overflowY: "auto",
    padding: ".7rem",
  },

  swiper: {
    margin: "auto",
  },
}));

export default NoticeBoard;
