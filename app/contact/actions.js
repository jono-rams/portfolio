"use client";

import { redirect } from 'next/navigation';

export async function contactRequest(event) {
  event.preventDefault();
  try{
    const formData = new FormData(event.target);
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        "Content-Type": "application/json", // Important: Set the content type
      },
    });

    if (!response.ok) {
      // Request failed
      const errorData = await response.json();
      console.error("Error:", errorData.message);
    }
  } catch (error) {
    console.error("An error occurred:", error);
  } finally {
    redirect("/");
  }
}
