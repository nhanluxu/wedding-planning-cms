import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { api } from "../../api/api";
import { formatCurrency } from "../../utils/formatPrice";

const ProductList = () => {
  const { data } = useQuery({
    queryKey: ["GET_PRODUCTS"],
    queryFn: () => api.get("/lobby/all"),
  });

  return (
    <div className="h-screen overflow-y-hidden flex flex-col">
      <header className="bg-white px-10 py-8 flex items-center justify-between">
        <p className="text-[#151D48] text-4xl font-semibold">Product</p>

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
        <div className="flex flex-col gap-y-4">
          {data?.data.map((it) => (
            <div
              key={it._id}
              className="py-2 px-4 bg-white rounded-xl flex gap-x-8 items-center"
            >
              <div>
                <img
                  src={it.imageUrl}
                  alt={it.name}
                  className="w-24 h-24 object-cover"
                />
              </div>

              <div className="flex-1 bg-[#F4F4F4] grid grid-cols-12 p-4 rounded-lg gap-3">
                <div className="col-span-6 font-semibold text-xl">
                  {it.name}
                </div>
                <div className="col-span-6 font-semibold text-xl">
                  {formatCurrency(it.price)}
                </div>
                <div className="col-span-6 font-semibold text-xl">{it._id}</div>
                <div className="col-span-6 font-semibold text-xl">
                  {dayjs(it.createdAt).format("DD/MM/YYYY")}
                </div>
              </div>

              <Link className="shadow-[0px_4px_4px_0px_#00000040] h-12 rounded-[10px] px-4 text-white cursor-pointer flex items-center gap-x-2">
                <img src="/icons/edit-icon.svg" alt="Edit icon" />

                <p className="text-black">Edit</p>
              </Link>

              <button className="shadow-[0px_4px_4px_0px_#00000040] h-12 rounded-[10px] px-4 text-white cursor-pointer flex items-center gap-x-2">
                <img src="/icons/delete-icon.svg" alt="icon" />

                <p className="text-red-500">Delete</p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
