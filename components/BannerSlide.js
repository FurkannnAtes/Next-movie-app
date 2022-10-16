import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";

const BannerSlide = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      className="text-white h-screen hero-slide"
      spaceBetween={0}
      slidesPerView={1}
      grabCursor={true}
      autoplay={{ delay: 5000 }}
      loop={true}
    >
      <SwiperSlide className="bg-[url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/8V1XPEDLtJoxOWlE6gYzn2sQaMp.jpg')] bg-center bg-cover ">
        <div className="swiper-content h-full flex lg:gap-16 px-4 items-center justify-center">
          <div>
            <h1 className="text-center lg:text-start font-semibold opacity-0 text-6xl">
              Peaky Blinders
            </h1>
            <p className="lg:max-w-[500px] py-5 opacity-0 text-center lg:text-start  ">
              A gangster family epic set in 1919 Birmingham, England and
              centered on a gang who sew razor blades in the peaks of their
              caps, and their fierce boss Tommy Shelby, who means to move up in
              the world.
            </p>
            <div className="flex gap-5 py-5 w-fit mx-auto lg:mx-0">
              <button className="bg-red-700 border-2 opacity-0 swiper-btn-1 border-red-700 rounded-full px-5 py-2">
                Watch now
              </button>
              <button className="border-2 opacity-0 hover:border-red-700 hover:bg-white hover:text-red-700 border-white rounded-full px-5 py-2">
                Watch trailer
              </button>
            </div>
          </div>
          <div>
            <img
              className="max-h-[500px] hidden lg:block rounded-lg opacity-0 scale-50  "
              src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg"
              alt=""
            ></img>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-[url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/vIgyYkXkg6NC2whRbYjBD7eb3Er.jpg')] bg-center  bg-cover">
        <div className="swiper-content h-full flex lg:gap-16 px-4 items-center justify-center">
          <div>
            <h1 className="text-center lg:text-start font-semibold opacity-0 text-6xl">
              Venom: Let There Be Carnage
            </h1>
            <p className="lg:max-w-[500px] py-5 opacity-0 text-center lg:text-start  ">
              After finding a host body in investigative reporter Eddie Brock,
              the alien symbiote must face a new enemy, Carnage, the alter ego
              of serial killer Cletus Kasady.
            </p>
            <div className="flex gap-5 py-5 w-fit mx-auto lg:mx-0">
              <button className="bg-red-700 border-2 opacity-0 swiper-btn-1 border-red-700 rounded-full px-5 py-2">
                Watch now
              </button>
              <button className="border-2 opacity-0 hover:border-red-700 hover:bg-white hover:text-red-700 border-white rounded-full px-5 py-2">
                Watch trailer
              </button>
            </div>
          </div>
          <div>
            <img
              className="max-h-[500px] hidden lg:block rounded-lg opacity-0 scale-50 "
              src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg"
              alt=""
            ></img>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-[url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg')] bg-center  bg-cover">
        <div className="swiper-content h-full flex lg:gap-16 px-4 items-center justify-center">
          <div>
            <h1 className="text-center lg:text-start font-semibold opacity-0 text-6xl">
              Spider-Man
            </h1>
            <p className="lg:max-w-[500px] py-5 opacity-0 text-center lg:text-start  ">
              Peter Parker is unmasked and no longer able to separate his normal
              life from the high-stakes of being a super-hero. When he asks for
              help from Doctor Strange the stakes become even more dangerous,
              forcing him to discover what it truly means to be Spider-Man.
            </p>
            <div className="flex gap-5 py-5 w-fit mx-auto lg:mx-0">
              <button className="bg-red-700 border-2 opacity-0 swiper-btn-1 border-red-700 rounded-full px-5 py-2">
                Watch now
              </button>
              <button className="border-2 opacity-0 hover:border-red-700 hover:bg-white hover:text-red-700 border-white rounded-full px-5 py-2">
                Watch trailer
              </button>
            </div>
          </div>
          <div>
            <img
              className="max-h-[500px] hidden lg:block rounded-lg opacity-0 scale-50 "
              src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg"
              alt=""
            ></img>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="bg-[url('https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/jsoz1HlxczSuTx0mDl2h0lxy36l.jpg')] bg-center  bg-cover">
        <div className="swiper-content h-full flex lg:gap-16 px-4 items-center justify-center">
          <div>
            <h1 className="text-center lg:text-start font-semibold opacity-0 text-6xl">
              Thor: Love and Thunder
            </h1>
            <p className="lg:max-w-[500px] py-5 opacity-0 text-center lg:text-start  ">
              After his retirement is interrupted by Gorr the God Butcher, a
              galactic killer who seeks the extinction of the gods, Thor Odinson
              enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane
              Foster, who now wields Mjolnir as the Mighty Thor. Together they
              embark upon a harrowing cosmic adventure to uncover the mystery of
              the God Butcher’s vengeance and stop him before it’s too late.
            </p>
            <div className="flex gap-5 py-5 w-fit mx-auto lg:mx-0">
              <button className="bg-red-700 border-2 opacity-0 swiper-btn-1 border-red-700 rounded-full px-5 py-2">
                Watch now
              </button>
              <button className="border-2 opacity-0 hover:border-red-700 hover:bg-white hover:text-red-700 border-white rounded-full px-5 py-2">
                Watch trailer
              </button>
            </div>
          </div>
          <div>
            <img
              className="max-h-[500px] hidden lg:block rounded-lg opacity-0 scale-50 "
              src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg"
              alt=""
            ></img>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default BannerSlide;
