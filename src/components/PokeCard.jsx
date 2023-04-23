export default function PokeCard({name}){
    return <div className="poke-card">
        <h1>{name}</h1>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png"></img>
    </div>
}