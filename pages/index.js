import clientPromise from '../lib/mongodb'
import {NavBar} from "../components/Navbar";
import Footer from "../components/Footer";


export default function Home({varer}) {
    return (
        <div className=''>
            <div className="  flex flex-col justify-items-center items-center ">

                <h1 className=" p-10 m-5 text-3xl font-bold underline bg-orange-400">Varer i databasen</h1>
                <br/>
                <ul>
                    {varer.map((vare) => (
                        <li>
                            <h2>{vare.VNr}</h2>
                            <h3>{vare.Betegnelse}</h3>
                            <p>{vare.Pris}</p>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    )

}

export async function getServerSideProps() {
    try {
        const client = await clientPromise;
        const db = client.db("butikk");

        const varer = await db
            .collection("varer")
            .find({})
            .sort({metacritic: -1})
            .toArray();

        return {
            props: {varer: JSON.parse(JSON.stringify(varer))},
        };
    } catch (e) {
        console.error(e);
    }
}
