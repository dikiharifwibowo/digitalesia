import React from "react";
import axios from "axios";
export default class List extends React.Component {
    state = {
      pokemon: []
    }

    changePage(name, id) {
      this.props.parentCallback(name, id)
    }

    componentDidMount() {
      axios.get(`https://pokeapi.co/api/v2/pokemon?limit=150`)
        .then(res => {

          const results  = res.data.results
          const pokemon = results.map((pokeman, index) => {
              const paddedId = ('00' + (index + 1)).slice(-3);
              const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
              return { ...pokeman, image };
          });
          this.setState({ pokemon });
        })
    }
  
    render() {
      return (
        <div class="bg-green-100 py-14">
          <div class="container mx-auto">
            <div class="px-4">Created By : Dikih Arif Wibowo</div>
            <div class="px-4">Linkedin : <a target="_blank" href="https://www.linkedin.com/in/dikiharifwibowo/">Dikih Arif Wibowo</a></div>
            <div class="px-4">Portfolio & Medium : <a target="_blank" href="https://dikiharifwibowo.github.io/">dikiharifwibowo.github.io</a> - <a target="_blank" href="https://dikiharifwibowo.medium.com/">dikiharifwibowo.medium.com</a></div>
            
            <h1 class="mt-8 text-center text-5xl text-green-600 font-bold">Pokemons List.</h1>
            <div class="grid grid-cols-1 md:grid-cols-4 justify-items-center">
            { this.state.pokemon.map((poke, index) =>
                <div class="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
                    <div class="w-sm">
                    <img class="w-64" src={poke.image} alt="" />
                    <div class="mt-4 text-green-600 text-center pb-4">
                        <h1 class="text-xl font-bold mb-8">{ poke.name }</h1>
                        <button onClick={() => this.changePage("detail", index + 1)} class="py-2 px-14 rounded-full bg-green-600 text-white 
                        hover:bg-green-500 transition duration-200">See pokemon</button>
                    </div>
                    </div>
                </div>
                )}
            </div>
          </div>
        </div>
      )
    }
  }
  