import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dress from "./Dress/Dress";
import Wishlist from "./Whistlist/Wishlist";
import Decor from "./Decor/Decor";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

const OrderPage = () => {
  return (
    <div className="h-screen overflow-y-hidden flex flex-col">
      <header className="bg-white px-10 py-8 flex items-center justify-between">
        <p className="text-[#151D48] text-4xl font-semibold">Order</p>

        <form
          action=""
          className="h-14 bg-[#F9FAFB] w-[500px] rounded-xl flex items-center px-3 gap-x-3"
        >
          <img src="/icons/search.svg" alt="Icon" />

          <input
            type="text"
            placeholder="Search here..."
            className="h-full outline-none w-full"
          />
        </form>
      </header>

      <div className="p-4 overflow-y-auto">
        <Slider {...settings} className="overflow-hidden outline-none">
          <div>
            <img
              src="/images/banner.png"
              alt="Banner"
              className="h-[500px] rounded-[10px] w-full object-cover block"
            />
          </div>

          <div>
            <img
              src="/images/banner.png"
              alt="Banner"
              className="h-[500px] rounded-[10px] w-full object-cover block"
            />
          </div>

          <div>
            <img
              src="/images/banner.png"
              alt="Banner"
              className="h-[500px] rounded-[10px] w-full object-cover block"
            />
          </div>
        </Slider>

        <div className="flex items-center gap-x-9 mt-4 border-b border-b-[#AFAFAF] pb-2">
          <p className="text-[#120D26] font-bold dm-sans-font text-sm">
            Sắp xếp
          </p>

          <ul className="flex items-center gap-x-3">
            <li className="font-bold dm-sans-font text-sm text-[#120D26] cursor-pointer">
              Mặc định
            </li>
            <li className="font-bold dm-sans-font text-sm text-[#120D26] cursor-pointer">
              Tên A-Z
            </li>
            <li className="font-bold dm-sans-font text-sm text-[#120D26] cursor-pointer">
              Tên Z-A
            </li>
            <li className="font-bold dm-sans-font text-sm text-[#120D26] cursor-pointer">
              Giá thấp đến cao
            </li>
            <li className="font-bold dm-sans-font text-sm text-[#120D26] cursor-pointer">
              Giá cao xuống thấp
            </li>
          </ul>
        </div>

        <Dress />
        <Wishlist />
        <Decor />
      </div>
    </div>
  );
};

export default OrderPage;
