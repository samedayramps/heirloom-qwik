import ImgLogo from '~/media/logo.svg?jsx'; // Ensure the logo is imported from the media directory
import { component$ } from '@builder.io/qwik';
import ImgLogoMobile from '~/media/logo-mobile.svg?jsx';

export const Navbar = component$(() => {
  return (
    <div class="navbar bg-secondary sticky top-0 z-50">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabIndex={0} role="button" class="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 stroke-base-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            class="menu menu-sm dropdown-content bg-accent text-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li><a href="#" class="text-base-100 font-opensans">Item 1</a></li>
            <li>
              <a href="#" class="text-base-100 font-opensans">Parent</a>
              <ul class="p-2">
                <li><a href="#" class="text-base-100 font-opensans">Submenu 1</a></li>
                <li><a href="#" class="text-base-100 font-opensans">Submenu 2</a></li>
              </ul>
            </li>
            <li><a href="#" class="text-base-100 font-opensans">Item 3</a></li>
          </ul>
        </div>
        <a href="#" class="btn btn-ghost text-xl text-accent font-playfair">
          {/* Logo for larger screens */}
          <ImgLogo class="hidden md:block h-8" aria-label="Logo" />
          {/* Logo for mobile screens */}
          <ImgLogoMobile class="block md:hidden h-6" aria-label="Mobile Logo" /> {/* Adjusted height */}
        </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li><a href="#" class="text-base-100 font-opensans">Item 1</a></li>
          <li>
            <details>
              <summary class="text-base-100 font-opensans">Parent</summary>
              <ul class="p-2">
                <li><a href="#" class="text-base-100 font-opensans">Submenu 1</a></li>
                <li><a href="#" class="text-base-100 font-opensans">Submenu 2</a></li>
              </ul>
            </details>
          </li>
          <li><a href="#" class="text-base-100 font-opensans">Item 3</a></li>
        </ul>
      </div>
      <div class="navbar-end">
        <a href="#" class="btn bg-neutral hover:bg-neutral-dark text-secondary border-none font-opensans font-bold rounded-full">INQUIRE</a>
      </div>
    </div>
  );
});
