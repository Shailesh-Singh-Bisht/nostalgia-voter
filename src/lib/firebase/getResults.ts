import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const categories = ["show", "movie", "music", "game", "cartoon"]; // 'movie' not 'movies' to match collection

type VoteResult = { name: string; count: number };
type ResultMap = Record<string, VoteResult[]>;

export async function getTopVotes(): Promise<ResultMap> {
  const results: ResultMap = {};

  try {
    await Promise.all(
      categories.map(async (category) => {
        const colRef = collection(db, `votes_${category}`);
        const snapshot = await getDocs(colRef);

        const votes = snapshot.docs.map((doc) => {
          const { count = 0 } = doc.data();
          return { name: doc.id, count };
        });

        // Sort descending and take top 3
        results[category] = votes.sort((a, b) => b.count - a.count).slice(0, 3);
      })
    );
  } catch (error) {
    console.error("Error fetching top votes:", error);
  }

  return results;
}
