import { doc, updateDoc, increment, getFirestore, Firestore } from 'firebase/firestore';

export const incrementer = async (videoKey: string, minute: string) => {
  const db: Firestore = getFirestore();
  const targetRef = doc(db, 'viewCounter', videoKey);

  await updateDoc(targetRef, {
    [minute]: increment(1),
  });
};
