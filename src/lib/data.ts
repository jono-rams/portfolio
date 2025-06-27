import { doc, getDoc } from 'firebase/firestore';
import { firestoreDatabase } from './firebase';
import type { HomePageContent, SkillsContent, Skill } from './types';

export async function getHomePageContent(): Promise<HomePageContent> {
  // Create a reference to the specific document we want
  const docRef = doc(firestoreDatabase, 'content', 'homePage');
  
  try {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // If the document exists, return its data cast as our type
      return docSnap.data() as HomePageContent;
    } else {
      // If the document doesn't exist, return default fallback content
      console.warn("Homepage content not found in Firestore, returning fallback data.");
      return {
        title: "Software Engineer",
        introParagraph: `A results-oriented Software Engineer with professional experience building automated
          workflows and customizing enterprise ERP systems in a dyanmic Agile environement. Proficient in Python, C++, and JavaScript, with a
          strong background in DevOps, Linux, and containerization using Docker.  Passionate about leveraging innovative solutions
          to streamline processes and drive technology advancements.`,
      };
    }
  } catch (error) {
    console.error("Error fetching homepage content:", error);
    // In case of an error, return fallback content
    return {
      title: "Software Engineer",
      introParagraph: `A results-oriented Software Engineer with professional experience building automated
          workflows and customizing enterprise ERP systems in a dyanmic Agile environement. Proficient in Python, C++, and JavaScript, with a
          strong background in DevOps, Linux, and containerization using Docker.  Passionate about leveraging innovative solutions
          to streamline processes and drive technology advancements.`,
    };
  }
}

export async function getSkills(): Promise<Skill[]> {
  const docRef = doc(firestoreDatabase, 'content', 'skills');

  try {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data() as SkillsContent;
      return data.items.filter(skill => skill.visible);
    } else {
      console.warn("Skills content not found in Firestore, returning empty array.");
      return [];
    }
  } catch (error) {
    console.error("Error fetching skills content:", error);
    return [];
  }
}