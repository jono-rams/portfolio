export async function siteClicked(project) {
  try {
    const { id, title, link } = project;
    const response = await fetch("https://analytics.jono-rams.work/api/analytics", {
      method: "POST",
      body: JSON.stringify({
        "site": {
          "id": id,
          "name": title,
          "url": link,
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
