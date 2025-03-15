import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  return (
    <div className="relative w-full ">
      <Swiper
        effect="fade"
        slidesPerView={1}
        navigation={true}
        modules={[Navigation]}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="w-full flex justify-center items-center bg-gray-10">
              <img
                src={src}
                alt={`Slide ${index}`}
                className="w-full max-h-[720px] object-contain rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
