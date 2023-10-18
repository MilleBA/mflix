import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db("People");

        const people = await db
            .collection("person")
            .find({})
            .sort({ metacritic: -1 })
            .limit(10)
            .toArray();

        res.json(people);
    } catch (e) {
        console.error(e);
    }
};