import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { resume, apiKey } = await request.json();

    if (!apiKey) {
      return NextResponse.json(
        { error: "API key is required" },
        { status: 400 }
      );
    }

    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `
      Convert the following resume text into a TypeScript object that matches this structure:

      {
        name: string,
        initials: string,
        url: string,
        location: string,
        locationLink: string,
        description: string,
        summary: string,
        avatarUrl: string,
        skills: string[],
        work: Array<{
          company: string,
          href: string,
          badges: any[],
          location: string,
          title: string,
          logoUrl: string,
          start: string,
          end: string,
          description: string
        }>,
        education: Array<{
          school: string,
          href: string,
          degree: string,
          logoUrl: string,
          start: string,
          end: string
        }>,
        projects: Array<{
          title: string,
          href: string,
          dates: string,
          active: boolean,
          description: string,
          technologies: string[],
          links: Array<{
            type: string,
            href: string,
            icon: any
          }>,
          image: string,
          video: string
        }>,
        hackathons: Array<{
          title: string,
          dates: string,
          location: string,
          description: string,
          image: string,
          win: string,
          links: Array<{
            title: string,
            icon: any,
            href: string
          }>
        }>
      }

      Resume text to convert:
      ${resume}

      Please maintain the exact property names and structure. For icon properties, use placeholder values like 'Icons.github' or 'Icons.linkedin'.
      return the following fixed just adapt if user has social media
      Ensure no code block markers are returned
      // Navigation Configuration
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],

  // Contact Information
  contact: {
    email: "your.email@example.com",
    tel: "+1234567890",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/yourusername",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/yourusername",
        icon: Icons.linkedin,
        navbar: true,
      },
      // Add or remove social platforms as needed
      X: {
        name: "X",
        url: "https://x.com/yourusername",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const convertedResume = response.text();

    return NextResponse.json({ convertedResume });
  } catch (error) {
    console.error("Error in resume conversion:", error);
    return NextResponse.json(
      { error: "Failed to convert resume" },
      { status: 500 }
    );
  }
}