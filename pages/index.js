import clientPromise from '../lib/mongodb'


export default function Home({varer}) {
    return (
        <div>
            <div>
                <h1>Varer i databasen</h1>
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
