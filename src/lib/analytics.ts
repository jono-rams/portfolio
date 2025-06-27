import type { Project } from '@/lib/types';

export async function siteClicked(project: Project) {
  try {
    const { title, githubUrl } = project;
    const response = await fetch("https://analytics.jono-rams.work/api/analytics", {
      method: "POST",
      body: JSON.stringify({
        "site": {
          "id": title,
          "name": title,
          "url": githubUrl,
        }
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      // Request failed
      const errorData = await response.json();
      console.error("Error:", errorData.message);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}