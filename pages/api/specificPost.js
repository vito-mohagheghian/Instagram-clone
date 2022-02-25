import { MongoClient, ObjectId } from "mongodb";
export default async function handler(req, res) {
  const client = await MongoClient.connect(
    "mongodb+srv://vito_geeks:santur9292@cluster0.uv8jh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
  const db = client.db();
  console.log("request", req.body.postID);
  const postsCollection = db.collection("posts");

  const postsGettedCollection = await postsCollection
    .find({ _id: ObjectId(req.body.id) })
    .toArray();

  console.log("fetch", postsGettedCollection);
  res.status(200).json(
    JSON.stringify(
      postsGettedCollection.map((post) => ({
        username: post.username,
        image: post.image,
        id: post._id.toString(),
        caption: post.caption,
        like: post.like,
        comments: post.comments,
        location: post.location,
        date: post.date,
        user_porofile: post.user_porofile,
      }))
    )
  );
}
