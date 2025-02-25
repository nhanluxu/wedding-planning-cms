import { Link } from "react-router-dom";

const Wishlist = () => {
  return (
    <div className="mt-7">
      <h2 className="roboto-font text-2xl font-medium text-[#120D26]">
        Wishlist
      </h2>

      <div className="mt-3 grid grid-cols-12 gap-x-4">
        <div className="col-span-3 bg-white rounded-2xl overflow-hidden">
          <img
            src="/images/wishlist.png"
            alt="Wishlist"
            className="w-full object-cover h-[220px]"
          />

          <div className="p-3">
            <Link className="roboto-font text-xl text-[#1E2742] font-bold">
              The Pullman Saigon
            </Link>

            <div className="flex items-center mt-3 gap-x-1">
              <div className="text-[#EBB65B] text-sm">
                <i className="fa-solid fa-star"></i>
              </div>

              <p className="text-xs">
                <span className="text-[#1E2742]">4.93</span>
                <span className="text-[#1E2742] opacity-60">
                  {" "}
                  (111 reviews)
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-3 bg-white rounded-2xl overflow-hidden">
          <img
            src="/images/wishlist.png"
            alt="Wishlist"
            className="w-full object-cover h-[220px]"
          />

          <div className="p-3">
            <Link className="roboto-font text-xl text-[#1E2742] font-bold">
              The Pullman Saigon
            </Link>

            <div className="flex items-center mt-3 gap-x-1">
              <div className="text-[#EBB65B] text-sm">
                <i className="fa-solid fa-star"></i>
              </div>

              <p className="text-xs">
                <span className="text-[#1E2742]">4.93</span>
                <span className="text-[#1E2742] opacity-60">
                  {" "}
                  (111 reviews)
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-3 bg-white rounded-2xl overflow-hidden">
          <img
            src="/images/wishlist.png"
            alt="Wishlist"
            className="w-full object-cover h-[220px]"
          />

          <div className="p-3">
            <Link className="roboto-font text-xl text-[#1E2742] font-bold">
              The Pullman Saigon
            </Link>

            <div className="flex items-center mt-3 gap-x-1">
              <div className="text-[#EBB65B] text-sm">
                <i className="fa-solid fa-star"></i>
              </div>

              <p className="text-xs">
                <span className="text-[#1E2742]">4.93</span>
                <span className="text-[#1E2742] opacity-60">
                  {" "}
                  (111 reviews)
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-3 bg-white rounded-2xl overflow-hidden">
          <img
            src="/images/wishlist.png"
            alt="Wishlist"
            className="w-full object-cover h-[220px]"
          />

          <div className="p-3">
            <Link className="roboto-font text-xl text-[#1E2742] font-bold">
              The Pullman Saigon
            </Link>

            <div className="flex items-center mt-3 gap-x-1">
              <div className="text-[#EBB65B] text-sm">
                <i className="fa-solid fa-star"></i>
              </div>

              <p className="text-xs">
                <span className="text-[#1E2742]">4.93</span>
                <span className="text-[#1E2742] opacity-60">
                  {" "}
                  (111 reviews)
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
