import { NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="w-[345px]">
        <div className="flex items-center justify-center mt-5 mb-8 gap-x-3">
          <img src="/logo.svg" alt="Logo" />

          <p className="font-semibold text-[30px] text-[#151D48]">admin name</p>
        </div>

        <ul className="flex flex-col gap-y-4">
          <li>
            <NavLink
              to=""
              className="menu-item flex gap-x-3 mx-11 rounded-2xl px-6 py-4 text-[#737791]"
            >
              <img src="/icons/dashboard.svg" alt="Icon" className="" />
              <img src="/icons/dashboard.svg" alt="Icon" className="" />

              <p className="font-semibold text-lg">Dashboard</p>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/leaderboard"
              className="menu-item flex gap-x-3 mx-11 rounded-2xl px-6 py-4 text-[#737791]"
            >
              <img src="/icons/leaderboard.svg" alt="Icon" />

              <p className="text-lg">Leaderboard</p>
            </NavLink>
          </li>
        </ul>
      </aside>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
