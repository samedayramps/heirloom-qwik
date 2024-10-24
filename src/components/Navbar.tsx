import { component$, useSignal, useOnWindow, $ } from '@builder.io/qwik';
import ImgLogo from '~/media/logo.svg?jsx'; // Ensure the logo is imported from the media directory
import ImgLogoMobile from '~/media/logo-mobile.svg?jsx';

export const Navbar = component$(({ isModalOpen }: { isModalOpen: any }) => {
  const isScrolled = useSignal(false);
  const isDropdownOpen = useSignal(false);

  useOnWindow(
    'scroll',
    $(() => {
      isScrolled.value = window.scrollY > 0;
      if (isDropdownOpen.value) {
        isDropdownOpen.value = false; // Close dropdown on scroll
      }
    })
  );

  return (
    <div
      class={[
        'navbar bg-secondary fixed top-0 left-0 right-0 z-50 transition-transform transition-width duration-500 ease-in-out',
        isScrolled.value
          ? 'transform translate-y-5 mx-auto w-[calc(100%-40px)] rounded-full shadow-lg' // Adjusted to move down and center
          : 'transform translate-y-0 w-full rounded-none',
      ]}
    >
      <div class="navbar-start">
        <div class="dropdown">
          <div
            tabIndex={0}
            role="button"
            class="lg:hidden"
            onClick$={() => (isDropdownOpen.value = !isDropdownOpen.value)}
          >
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
          {isDropdownOpen.value && (
            <ul
              tabIndex={0}
              class="menu menu-sm dropdown-content bg-secondary text-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li><a href="/about" class="text-base-100 font-opensans">About</a></li>
              <li><a href="/films" class="text-base-100 font-opensans">Films</a></li>
              <li><a href="/blog" class="text-base-100 font-opensans">Blog</a></li>
            </ul>
          )}
        </div>
        <a href="/" class="btn btn-ghost text-xl text-accent font-playfair">
          {/* Logo for larger screens */}
          <ImgLogo class="hidden md:block h-8" aria-label="Logo" />
          {/* Logo for mobile screens */}
          <ImgLogoMobile class="block md:hidden h-6" aria-label="Mobile Logo" />
        </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li><a href="/about" class="text-base-100 font-opensans">About</a></li>
          <li><a href="/films" class="text-base-100 font-opensans">Films</a></li>
          <li><a href="/blog" class="text-base-100 font-opensans">Blog</a></li>
        </ul>
      </div>
      <div class="navbar-end">
        <button
          class="btn bg-neutral hover:bg-neutral-dark text-secondary border-none font-opensans font-bold rounded-full"
          onClick$={() => (isModalOpen.value = true)}
        >
          LET'S TALK
        </button>
      </div>
    </div>
  );
});
