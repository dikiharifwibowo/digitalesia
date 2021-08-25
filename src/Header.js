import logo from './logo.svg';

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="px-8 py-5 w-full z-10 bg-gradient-to-r from-green-500 to-green-600 leading-10">
          <nav class="md:hidden lg:hidden">
              <div class="flex">
                  <a href="/" class="w-1/2">
                      <h1 class="text-xl text-white">Poke App</h1>
                  </a>
                  <div class="w-1/2 text-right">
                      <button id="humberger"
                              class="cursor-pointer text-white inline focus:shadow-none focus:outline-none md:hidden opened"
                              aria-label="Main Menu" aria-expanded="true">
                          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M4 6h16M4 12h16M4 18h16"></path>
                          </svg>
                      </button>
                  </div>
              </div>
              <div class="grid hidden" id="mobile">
                  <a class="w-full px-4 py-2 mt-2 text-sm font-semibold text-gray font-nunito bg-yellow-300
                  rounded-lg"
                  href="/">Home</a>
                  <div class="w-full px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-transparent rounded-lg hover:text-gray-900 focus:text-gray-900 focus:outline-none focus:shadow-outline dropdown inline-block relative">
                      <button>
                          <span class="font-nunito font-semibold text-white">Product
                          </span>
                      </button>
                      <ul class="dropdown-menu hidden font-nunito font-semibold text-blue-500 pt-1">
                          <li class="">
                              <a class="rounded-t bg-white hover:bg-gray-100 py-4 px-4 block whitespace-no-wrap"
                              href="#">Product 1</a>
                          </li>
                          <li class="">
                              <a class="rounded-t bg-white hover:bg-gray-100 py-4 px-4 block whitespace-no-wrap"
                              href="#">Product 2</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>

          <div class="container mx-auto">
              <div class="flex">
                  <div class="w-1/4">
                      <h1 class="text-2xl text-white font-bold font-nunito">PokeApp</h1>
                  </div>
                  <div class="w-3/4 flex justify-end">
                      <ul class="flex flex-row flex-wrap hidden md:flex md:flex-row" id="mobileMenu">
                          <li class="pr-5">
                              <a href="/"
                              class="text-base text-gray font-semibold bg-yellow-300 rounded rounded-lg px-4 py-2">Home</a>
                          </li>
                          <li class="pr-8">
                              <a href="/contact" class="text-base text-white">My Poke</a>
                          </li>
                      </ul>

                  </div>
              </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
