import React from "react";
import axios from "axios";
export default class Detail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        pokemon: [],
        stats: [],
        pokemonId: this.props.dataParentToChild
    }
}

    componentDidMount(  ) {
      const id = this.state.pokemonId;
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => {
          const pokemon = res.data
          const stats = pokemon.stats; 
          const paddedId = ('00' + id).slice(-3);
          pokemon.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
          this.setState({ pokemon: pokemon, stats: stats });
          return {
            props: { pokemon },
          };
          
        })
    }
    render() {
      const poke = this.state.pokemon
      
      return (
        <div class="container px-5 py-24 mx-auto">
          <div class="py-3 px-5 mb-4 bg-green-100 text-green-900 text-sm rounded-md border border-green-200">
              <ul class="flex">
                  <li><a href="#" class="underline font-semibold">Home</a></li>
                  <li><span class="mx-2">/</span></li>
                  <li><a href="#" class="underline font-semibold">Pages</a></li>
              </ul>
          </div>
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" 
             src={poke.image}  />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">Weight-Height : { poke.weight } - { poke.height }</h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1 border-b-2">{ poke.name }</h1>
              <div class="flex mb-4 border-b-2">
                  <table class="w-full">
                    { this.state.stats.map((item, index) =>
                    <tr>
                      <td style={{ width: '130px' }} class="block">{item.stat.name}</td>
                      <td> : </td>
                      <td class="w-full">
                      <div class="w-full bg-green-300 rounded">
                        <div style={{ height: '10px', width: item.base_stat }} class="bg-green-500 rounded"></div>
                      </div>
                      </td>
                    </tr>
                     )}  
                  </table> 
              </div>
             
              <div class="flex">
                <span class="title-font font-medium text-2xl text-gray-900">Experience : { poke.base_experience }</span>
                
              </div>
            </div>
          </div>
        </div>
        
      )
    }
  }