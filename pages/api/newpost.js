import { MongoClient } from "mongodb";
async function Handler(req, res) {
  const data = req.body;
  console.log("data:", data);
  const client = await MongoClient.connect(
    "mongodb+srv://vito_geeks:santur9292@cluster0.uv8jh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
  const db = client.db();

  const postsCollection = db.collection("posts");
  const result = await postsCollection.insertOne(data);
  console.log(result);
  client.close();
  res.status(200).json({ message: "successful" });
}
export default Handler;
