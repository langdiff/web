import { Link } from "remix";

export default function Nav() {
  return (
    <section className="py-8 px-4 lg:px-10 bg-white">
      <nav className="relative flex justify-between items-center">
        <a className="text-2xl text-gray-900 font-bold" href="#">
          <img
            className="h-7"
            src="zospace-assets/logos/zospace-dark-logo.svg"
            alt=""
            width="auto"
          />
        </a>
        <div className="lg:hidden">
          <button className="navbar-burger flex items-center p-3 hover:bg-gray-50 text-gray-900 rounded">
            <svg
              className="w-10 h-3"
              width="39"
              height="13"
              viewBox="0 0 39 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="39" height="2" rx="1" fill="currentColor"></rect>
              <rect
                x="19"
                y="11"
                width="20"
                height="2"
                rx="1"
                fill="currentColor"
              ></rect>
              <title>Mobile menu</title>
            </svg>
          </button>
        </div>
        <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <ul className="flex items-center space-x-16 text-lg font-bold">
            <li>
              <a className="hover:underline" href="#">
                Product
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Story
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Features
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <div className="max-w-sm flex items-center bg-blue-50 rounded-full">
            <input
              className="hidden xl:block pl-6 py-5 rounded-full bg-transparent placeholder-gray-200 font-bold outline-none"
              type="search"
              placeholder="Search Now..."
            />
            <button className="ml-auto px-4 lg:px-10 py-5 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0)">
                  <path
                    d="M10.5691 0C4.74145 0 0 4.74145 0 10.5691C0 16.3971 4.74145 21.1382 10.5691 21.1382C16.3971 21.1382 21.1382 16.3971 21.1382 10.5691C21.1382 4.74145 16.3971 0 10.5691 0ZM10.5691 19.187C5.81723 19.187 1.95122 15.321 1.95122 10.5691C1.95122 5.81728 5.81723 1.95122 10.5691 1.95122C15.321 1.95122 19.187 5.81723 19.187 10.5691C19.187 15.321 15.321 19.187 10.5691 19.187Z"
                    fill="white"
                  ></path>
                  <path
                    d="M23.712 22.3346L18.1185 16.7411C17.7374 16.36 17.1201 16.36 16.739 16.7411C16.3578 17.1219 16.3578 17.7398 16.739 18.1207L22.3325 23.7142C22.523 23.9047 22.7725 24 23.0223 24C23.2717 24 23.5214 23.9047 23.712 23.7142C24.0932 23.3334 24.0932 22.7154 23.712 22.3346Z"
                    fill="white"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="24" height="24" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50">
        <div className="navbar-backdrop fixed inset-0 bg-blue-600 opacity-80"></div>
        <nav className="relative flex flex-col py-8 w-full h-full bg-gray-800 overflow-y-auto">
          <div className="flex items-center mb-16 pr-6">
            <a className="ml-10 text-2xl text-white font-bold" href="#">
              <img
                className="h-7"
                src="zospace-assets/logos/zospace-logo.svg"
                alt=""
                width="auto"
              />
            </a>
          </div>
          <div>
            <ul>
              <li className="mb-1 px-10">
                <a
                  className="block pl-8 py-4 text-xl text-white hover:bg-gray-500 rounded-xl"
                  href="#"
                >
                  Product
                </a>
              </li>
              <li className="mb-1 px-10">
                <a
                  className="block pl-8 py-4 text-xl text-white hover:bg-gray-500 rounded-xl"
                  href="#"
                >
                  Story
                </a>
              </li>
              <li className="mb-1 px-10">
                <a
                  className="block pl-8 py-4 text-xl text-white hover:bg-gray-500 rounded-xl"
                  href="#"
                >
                  Features
                </a>
              </li>
              <li className="mb-1 px-10">
                <a
                  className="block pl-8 py-4 text-xl text-white hover:bg-gray-500 rounded-xl"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-auto px-10">
            <div className="pt-6">
              <a
                className="block mb-4 py-4 px-12 text-white text-center font-bold hover:bg-white hover:text-gray-800 border border-gray-50 rounded-full transition duration-200"
                href="#"
              >
                Sign in
              </a>
              <a
                className="block py-4 px-12 text-white text-center font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200"
                href="#"
              >
                Sign up
              </a>
            </div>
            <p className="mt-6 mb-4 text-lg text-center text-white">
              <span>2021 © Zospace. All rights reserved.</span>
            </p>
          </div>
        </nav>
      </div>
    </section>
  );
}
