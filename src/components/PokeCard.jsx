export default function PokeCard({name,count}){
    return <div className="poke-card">
        <h1>{name}</h1>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${count}.png`}></img>
    </div>
}