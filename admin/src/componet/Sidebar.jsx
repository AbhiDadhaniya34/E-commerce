import logo from "../image/Prayag_Logo.png";
import abhi from "../image/abhi.JPG";

function Sidebar() {
  return (
    <div>
      <div className="container flex flex-col mx-auto bg-white">
          <div className="flex shrink-0 px-8 items-center justify-between h-[96px]">
            <a
              className="transition-colors duration-200 ease-in-out"
              href="/"
            >
              <img alt="Logo" src={logo} className="inline" />
            </a>
          </div>
          <div className="hidden border-b border-dashed lg:block dark:border-neutral-700/70 border-neutral-200" />
          <div className="flex items-center justify-between px-8 py-5">
            <div className="flex items-center mr-5">
              <div className="mr-5">
                <div className="inline-block relative shrink-0 cursor-pointer rounded-[.95rem]">
                  <img className="w-[40px] h-[40px] shrink-0 inline-block rounded-[.95rem]"
                    src={abhi}
                    alt="abhi"
                  />
                </div>
              </div>
              <div className="mr-2 ">
                <a href="/Profile" className="dark:hover:text-primary hover:text-primary transition-colors duration-200 ease-in-out text-[1.075rem] font-medium dark:text-neutral-400/90 text-secondary-inverse">
                  Abhi Dadhaniya
                </a>
                <span className="text-secondary-dark dark:text-stone-500 font-medium block text-[0.85rem]">
                Manager
                </span>
              </div>
            </div>
          </div>
          <div className="hidden border-b border-dashed lg:block dark:border-neutral-700/70 border-neutral-200" />
          <div className="relative pl-3 my-5">
            <div className="flex flex-col w-full font-medium">
              <div>
                <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                  <a href="/" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark">
                    Orders
                  </a>
                </span>
              </div>
              <div>
                <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                  <a href="Product" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark">
                    Products
                  </a>
                </span>
              </div>
              <div>
                <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                  <a href="/Profile" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark">
                    Profile
                  </a>
                </span>
              </div>
              <div>
                <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                  <a href="/addproduct" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark">
                  Add Product
                  </a>
                </span>
              </div>
            </div>
          </div>
      </div>
      <div className="flex flex-wrap ml-9 my-5">
        <div className="w-full max-w-full sm:w-1/4 mx-auto text-center">
          <p className="text-lg text-slate-500 py-1"></p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
