
import { Suspense } from "react"
import { fetchCharacters } from "../lib/data"
import Card from "./card"
import { Character } from "./characters.types"


export default async function Dashboard() {

      //Fetch en el servidor
      const characters : Character[] = await fetchCharacters()
      console.log(characters)

    return(
        <section className=" " >
            <h1>Dashboard</h1>
            <Suspense fallback={ <div>Cargando...</div> } >
            {
                characters && characters.map(c => {
                    return(
                        <Card 
                        id={c.id}
                        key={c.id}
                        name={c.name}
                        image={c.image}
                        status={c.status}
                        species={c.species}
                        gender={c.gender}
                        origin={c.origin}
                    />
                    )
                }
                    
                    )
            }
            </Suspense>
        </section>
    )
}