import clientPromise from "../lib/mongodb";


export default function People({ people }) {
    return (
        <div className="h-screen p-10 flex flex-col justify-items-center items-center ">
            <h1 className='text-3xl font-bold bg-teal-500'>Persons who lives in Bakåskollen!</h1>
            <br/>
            <ul>
                {people.map((person) => (
                    <li className='p-5'>
                        <h2>{person.name}</h2>
                        <h3>{person.age}</h3>
                        <p>{person.address}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export async function getServerSideProps() {
    try {
        const client = await clientPromise;
        const db = client.db("People");

        const people = await db
            .collection("person")
            .find({})
            .sort({ metacritic: -1 })
            .limit(20)
            .toArray();

        return {
            props: { people: JSON.parse(JSON.stringify(people)) },
        };
    } catch (e) {
        console.error(e);
    }
}