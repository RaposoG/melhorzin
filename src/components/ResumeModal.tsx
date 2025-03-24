"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-typescript";

interface ResumeModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ResumeModal({ open, onOpenChange }: ResumeModalProps) {
  const [resume, setResume] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('resumeText') || '';
    }
    return '';
  });
  const [apiKey, setApiKey] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('geminiApiKey') || '';
    }
    return '';
  });
  const [isLoading, setIsLoading] = useState(false);
  const [convertedResume, setConvertedResume] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('convertedResume') || '';
    }
    return '';
  });
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Initialize Prism highlighting
  useEffect(() => {
    if (convertedResume) {
      Prism.highlightAll();
    }
  }, [convertedResume, isDrawerOpen]);

  // Update localStorage when values change
  const handleResumeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setResume(value);
    localStorage.setItem('resumeText', value);
  };

  const handleApiKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setApiKey(value);
    localStorage.setItem('geminiApiKey', value);
  };

  const handleConvert = async () => {
    if (!apiKey.trim()) {
      alert("Please enter your Gemini API key");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("/api/convert-resume", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ resume, apiKey }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      // Store the converted resume and show drawer
      setConvertedResume(data.convertedResume);
      setIsDrawerOpen(true);

      // Close the modal
      onOpenChange(false);

      // Remove the clearForm call - we want to keep the values
    } catch (error) {
      console.error("Error converting resume:", error);
      alert("Error converting resume. Please check your API key and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Convert Resume Format</DialogTitle>
            <DialogDescription>
              Paste your resume text below and we'll convert it to the required format using Gemini AI.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="apiKey">Gemini API Key <code className="text-xs float-end">gemini-2.0-flash</code></Label>
              <Input
                id="apiKey"
                type="password"
                placeholder="Enter your Gemini API key..."
                value={apiKey}
                onChange={handleApiKeyChange}
              />
              <p className="text-xs text-muted-foreground">
                Get your API key from{" "}
                <a
                  href="https://makersuite.google.com/app/apikey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primary"
                >
                  Google AI Studio
                </a>
              </p>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="resume">Resume Text</Label>
              <Textarea
                id="resume"
                placeholder="Paste your resume here..."
                value={resume}
                onChange={handleResumeChange}
                className="h-[300px]"
              />
            </div>
            <div className="flex justify-between gap-4">
              {
                convertedResume && (
                  <Button className="w-full" variant="outline" onClick={() => setIsDrawerOpen(true)}>
                    Show Converted Resume
                  </Button>
                )
              }

              <Button className="w-full" onClick={handleConvert} disabled={isLoading}>
                {isLoading ? "Converting..." : "Convert Resume"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <SheetContent className="w-full sm:w-[1000px]">
          <SheetHeader>
            <SheetTitle>Converted Resume</SheetTitle>
            <SheetDescription>
              Copy the converted resume and paste it into your data file at /data/resume.tsx
            </SheetDescription>
          </SheetHeader>
          <div className="mt-4">
            <pre className="relative max-h-[80vh] overflow-auto rounded-lg">
              <code className="language-typescript">
                {convertedResume.replace(/^```typescript\n|```$/g, '')}
              </code>
            </pre>
            <Button
              onClick={() => navigator.clipboard.writeText(convertedResume.replace(/^```typescript\n|```$/g, ''))}
              className="mt-4"
            >
              Copy to Clipboard
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}