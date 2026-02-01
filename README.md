
# 🚀 LaunchPad AI

**Your AI-powered co-pilot for software project marketing.**

LaunchPad AI is a web application designed to help developers, indie hackers, and startups instantly generate a complete marketing kit for their software projects. Simply describe your project, and our AI will craft compelling taglines, an elevator pitch, key features, and social media announcements to kickstart your launch.

## What Problem Does It Solve?

Developers excel at building incredible software, but often, the marketing aspect can be a significant hurdle. Coming up with catchy names, writing persuasive copy, and creating engaging social media posts takes time and a different skill set. LaunchPad AI bridges this gap, providing a powerful, one-click solution to generate high-quality marketing assets, allowing you to focus on what you do best: coding.

## Key Features

-   **AI-Powered Content Generation**: Leverages the power of Google's Gemini Pro model to create human-like, creative, and professional marketing copy.
-   **Comprehensive Marketing Kit**: Generates a full suite of assets, including:
    -   A catchy **Project Name**
    -   Multiple **Taglines** to choose from
    -   A concise and powerful **Elevator Pitch**
    -   A list of **Key Features** with descriptions and relevant emojis
    -   Ready-to-post announcements for **Twitter** and **LinkedIn**
-   **Intuitive User Interface**: A clean, simple, and responsive UI. Just describe your project and click generate.
-   **Dynamic Loading Experience**: Engaging loading messages keep you informed while the AI works its magic.
-   **Easy Copy-to-Clipboard**: Quickly copy any generated asset with a single click, making it easy to use the content wherever you need it.

## How It Works

The process is as simple as it gets:

1.  **Describe Your Project**: Navigate to the homepage and you'll find a text area. Write a description of your project. You can include its purpose, key features, and the technology stack. The more detail you provide, the better the results will be.
2.  **Generate Kit**: Click the "Generate Marketing Kit" button.
3.  **Receive & Use**: In a few moments, the application will display your complete, professionally crafted marketing kit. You can then copy any piece of content you like and use it for your website, social media, or investor pitches.

## Tech Stack

-   **Frontend**: React, TypeScript, Tailwind CSS
-   **AI Engine**: Google Gemini API (`@google/genai`)

This project is built as a modern, single-page application, emphasizing a great user experience, performance, and clean code.

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
