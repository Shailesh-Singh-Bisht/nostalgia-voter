import { db } from "./firebase";
import { doc, setDoc, increment } from "firebase/firestore";

/**
 * Submits a vote for the selected option in a given category.
 * @param category The category (e.g., "Show", "Music")
 * @param selected The selected option to vote for
 */
export async function submitVote(
  category: string,
  selected: string
): Promise<void> {
  try {
    if (!category || !selected) {
      console.warn("🚫 Invalid vote submission — missing category or option.");
      return;
    }

    // Normalize collection ID
    const collectionId = `votes_${category.trim().toLowerCase()}`;

    // Reference to the selected document (option)
    const voteRef = doc(db, collectionId, selected);

    // Merge vote into Firestore, incrementing count
    await setDoc(voteRef, { count: increment(1) }, { merge: true });

    console.log(`✅ Voted for "${selected}" in "${category}"`);
  } catch (error) {
    console.error("❌ Error submitting vote:", error);
  }
}
