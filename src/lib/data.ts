import { doc, getDoc, collection, getDocs, orderBy, query } from 'firebase/firestore';
import { firestoreDatabase } from './firebase';
import type { HomePageContent, SkillsContent, Skill, Project, AboutPageContent, ContactPageContent } from './types';

export async function getHomePageContent(): Promise<HomePageContent> {
  // Create a reference to the specific document we want
  const docRef = doc(firestoreDatabase, 'content', 'homePage');
  
  try {
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
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

export async function getProjects(): Promise<Project[]> {
  const projectsQuery = query(collection(firestoreDatabase, 'projects'), orderBy('sortOrder', 'asc'));

  try {
    const querySnapshot = await getDocs(projectsQuery);
    const projects = querySnapshot.docs.map(doc => doc.data() as Project);
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return []; 
  }
}

export async function getAboutPageContent(): Promise<AboutPageContent> {
  const docRef = doc(firestoreDatabase, 'content', 'aboutPage');
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data() as AboutPageContent;
    } else {
      return { bio: ["Content not found."], profileImageUrl: '', skills: {} };
    }
  } catch (error) {
    console.error("Error fetching about page content:", error);
    return { bio: ["Error loading content."], profileImageUrl: '', skills: {} };
  }
}

export async function getContactPageContent(): Promise<ContactPageContent> {
  const docRef = doc(firestoreDatabase, 'content', 'contactPage');
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data() as ContactPageContent;
    } else {
      return { githubUrl: 'https://github.com/jono-rams', linkedinUrl: 'https://www.linkedin.com/in/jonathan-rampersad-47458a1a0/', email: 'jonathan@jono-rams.work' };
    }
  } catch (error) {
    console.error("Error fetching contact page content:", error);
    return { githubUrl: 'https://github.com/jono-rams', linkedinUrl: 'https://www.linkedin.com/in/jonathan-rampersad-47458a1a0/', email: 'jonathan@jono-rams.work' };
  }
}