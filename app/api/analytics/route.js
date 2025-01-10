import { firestoreDatabase } from "@/utils/firebase/firebase";
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';

export async function POST(request) {
  try {
    const data = await request.json();
    const { site } = data;

    await setDoc(doc(firestoreDatabase, 'site-analytics', uuidv4()), {
      project_id: site.id,
      name: site.name,
      url: site.url,
      timestamp: new Date()
    }) 

    return new Response(JSON.stringify({ message: 'Analytics successfully updated' }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Error sending analytics' }), { status: 500 });
  }
};