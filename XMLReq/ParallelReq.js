// SEQUENTIAL REQUEST

// async function getPokemon() {
//     const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1')
//     const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2')
//     const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3')
//     console.log(poke1)
//     console.log(poke2)
//     console.log(poke3)
// }

// getPokemon()



async function getPokemon() {
    const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1')
    const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2')
    const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3')
    console.log(poke1)
    console.log(poke2)
    console.log(poke3)
}

async function getPokemon2() {
    const poke1 = axios.get('https://pokeapi.co/api/v2/pokemon/1')
    const poke2 = axios.get('https://pokeapi.co/api/v2/pokemon/2')
    const poke3 = axios.get('https://pokeapi.co/api/v2/pokemon/3')
    const results = await Promise.all([poke1, poke2, poke3])
        .catch(() => {
            throw new Error('CANT NOT PRINT!!!!')
        })
    printPokemonName(results)
}

const printPokemonName = (results) => {
    for (let pokemon of results) {
        console.log(pokemon.data.name)
    }
}


getPokemon2()

function changeBodyColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color
            resolve()
        }, delay)
    })
}

async function lightShow() {
    await changeBodyColor('teal', 1000)
    await changeBodyColor('pink', 1000)
    await changeBodyColor('indigo', 1000)
    await changeBodyColor('violet', 1000)
}



async function lightShow() {
    const p1 = changeBodyColor('teal', 1000)
    const p2 = changeBodyColor('violet', 1000)
    const p3 = changeBodyColor('pink', 1000)
    const p4 = changeBodyColor('indigo', 1000)
    await p1
    await p2
    await p3
    await p4
}

// lightShow()