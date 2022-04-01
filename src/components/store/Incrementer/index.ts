import { doc, updateDoc, increment, getFirestore, Firestore } from 'firebase/firestore';

export const incrementer = async (collection: string, document: string) => {
  const db: Firestore = getFirestore();
  const targetRef = doc(db, collection, document);

  console.log('increment');
  await updateDoc(targetRef, {
    count: increment(1),
  });
};
