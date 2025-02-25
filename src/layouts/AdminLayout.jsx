import { NavLink, Outlet } from "react-router-dom";

const MENUS = [
  {
    path: "",
    title: "Dashboard",
    icon: "/icons/dashboard.svg",
    iconInactive: "/icons/dashboard-inactive.svg",
  },
  {
    path: "/leaderboard",
    title: "Leaderboard",
    icon: "/icons/leaderboard.svg",
    iconInactive: "/icons/leaderboard-inactive.svg",
  },
  {
    path: "/order",
    title: "Order",
    icon: "/icons/cart.svg",
    iconInactive: "/icons/cart-inactive.svg",
  },
  {
    path: "/products",
    title: "Products",
    icon: "/icons/product.svg",
    iconInactive: "/icons/product-inactive.svg",
  },
];

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-[#f5f5f5]">
      <aside className="w-[345px] bg-white">
        <div className="flex items-center justify-center mt-5 mb-8 gap-x-3">
          <img src="/logo.svg" alt="Logo" />

          <p className="font-semibold text-[30px] text-[#151D48]">admin name</p>
        </div>

        <ul className="flex flex-col gap-y-4">
          {MENUS.map((it, idx) => (
            <li key={idx}>
              <NavLink
                to={it.path}
                className="menu-item flex gap-x-3 mx-11 rounded-2xl px-6 py-4 text-[#737791]"
              >
                <img src={it.icon} alt="Icon" className="icon icon-active" />
                <img
                  src={it.iconInactive}
                  alt="Icon"
                  className="icon icon-inactive"
                />

                <p className="text-lg title">{it.title}</p>
              </NavLink>
            </li>
          ))}
        </ul>
      </aside>

      <main className="flex-1 overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
