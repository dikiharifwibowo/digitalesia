import React from 'react';

export default class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          humberger: false
        };
        this.handleHumberger = this.handleHumberger.bind(this);
    }
    handleHumberger() {
        this.setState({ humberger: !this.state.humberger });
        console.log(this.state.humberger)
    }
    changePage(name) {
        this.props.parentCallback(name)
    }
  
render() {
    return (
        <div className="App">
          <header className="App-header">
            <div class="px-8 py-5 w-full z-10 bg-gradient-to-r from-green-500 to-green-600 leading-10">
              <nav class="md:hidden lg:hidden">
                  <div class="flex">
                      <a href="#" onClick={() => this.changePage("home")} class="w-1/2">
                          <h1 class="text-xl text-white">Poke App</h1>
                      </a>
                      <div class="w-1/2 text-right">
                          <button id="humberger" onClick={() => this.handleHumberger()} 
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
                  {this.state.humberger && (
                  <div class="grid" id="mobile">
                      <a class="w-full px-4 py-2 mt-2 text-sm font-semibold text-gray font-nunito bg-yellow-300
                      rounded-lg"
                      href="#" onClick={() => this.changePage("home")}>Home</a>
                       <a class="w-full px-4 py-2 mt-2 text-sm font-semibold text-gray font-nunito
                      rounded-lg"
                      href="#" >My Poke</a>
                  </div>
                   )}
              </nav>
    
              <div class="container mx-auto">
                  <div class="flex">
                      <div class="w-1/4 hidden md:grid">
                          <h1 class="text-2xl text-white font-bold font-nunito">PokeApp</h1>
                      </div>
                      <div class="w-3/4 flex justify-end">
                          <ul class="flex flex-row flex-wrap hidden md:flex md:flex-row" id="mobileMenu">
                              <li class="pr-5">
                                  <a href="#"  onClick={() => this.changePage("home")}
                                  class="text-base text-gray font-semibold bg-yellow-300 rounded rounded-lg px-4 py-2">Home</a>
                              </li>
                              <li class="pr-8">
                                  <a href="#" class="text-base text-white">My Poke</a>
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
}