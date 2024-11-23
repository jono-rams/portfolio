"use client"

import SubmitButton from "../components/SubmitButton";
import { contactRequest } from "./actions";

export default function ContactForm() {
  return (
    <div className="flex flex-col min-h-screen">
      <form
        onSubmit={(event) => contactRequest(event)}
        className="w-full max-w-md p-6 mx-auto bg-gray-900 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2 font-bold text-gray-300">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-3 py-2 leading-tight text-gray-200 bg-gray-800 border border-gray-700 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-bold text-gray-300">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 leading-tight text-gray-200 bg-gray-800 border border-gray-700 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block mb-2 font-bold text-gray-300"
          >
            Subject:
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full px-3 py-2 leading-tight text-gray-200 bg-gray-800 border border-gray-700 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block mb-2 font-bold text-gray-300"
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            maxLength="1000"
            required
            className="w-full h-32 px-3 py-2 leading-tight text-gray-200 bg-gray-800 border border-gray-700 rounded shadow appearance-none resize-none focus:outline-none focus:shadow-outline"
          />
        </div>
        <SubmitButton
          submitText="Send"
          pendingText="Sending..."
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
        />
      </form>
    </div>
  );
}
