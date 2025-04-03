"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ResumeProfile } from "@/components/resume-profile";
import { ResumeWork } from "@/components/resume-work";
import { ResumeSkills } from "@/components/resume-skills";
import { ResumeEducation } from "@/components/resume-education";
import { ThemeSelector } from "@/components/theme-selector";

export function ResumeTemplate() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      <div className="resume-read-container">
        <div className="fullheight-fix bg-white dark:bg-neutral-900">
          <div className="easycv-template resume-read container mx-auto max-w-screen-lg text-sm font-plex">
            <main className="px-8 pt-8 bg-white text-gray-500 dark:bg-neutral-900 dark:text-gray-300">
              <ResumeProfile />

              <div className="resume-content">
                <ResumeWork />
                <ResumeSkills />
                <ResumeEducation />
              </div>
            </main>
          </div>
        </div>
      </div>

      <ThemeSelector />
      <Footer />
    </div>
  );
}
