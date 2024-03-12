import { Character } from "./characters.types"
import Image from "next/image"

export default function Card ({ name, status, species, gender, image, origin} : Character ) {
    return(
        <article className=" " >
            <Image src={image} alt={name} width={300} height={300} />
            <div className=" "  >
                <p>Name: {name} </p>
                <p>Status: {status} </p>
                <p>Species: {species} </p>
                <p>Gender: {gender ? gender : "Unknown"} </p>
                <p>Origin: {origin.name} </p>
            </div>
        </article>
    )
}