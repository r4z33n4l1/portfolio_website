import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Ramuri Inc.",
    position: "Software Engineer",
    time: "2022 - 2022",
    location: "Toronto",
    description:
      "Helped create a Google Chrome extension that allows users to see ethical ratings of goods online. Integrated REST API with React frontend.",
    tech: [
      "Django",
      "Python",
      "React.js",
      "Git",
      "GitHub",
      "Jira",
      "REST API",
      "TypeScript"
    ],
  },
  {
    title: "University of Toronto",
    position: "Software Engineer / Research Assistant",
    time: "2022 - 2022",
    location: "Toronto",
    description:
      "Created an experiment survey using oTree to help with research for a PHD study. Dealt with data collection and analysis.",
    tech: ["Python", "oTree", "Django", "Slack"],
  },
  {
    title: "Code Warriors",
    position: "Code Instructor",
    time: "Present",
    location: "Toronto",
    description:
      "Teaching kids ages 8-14 how to get started with programming and robotics. Preparing for FIRST Lego League competitions.",
    tech: [
      "Spike Prime",
      "Python",
      
    ],
  },
  {
    title: "Sir John Wilson School",
    position: "Code Instructor",
    time: "2018 - 2020",
    location: "Dhaka, Bangladesh",
    description:
    "Taught students between grade 5 to grade 10 intro to python programming, by starting an after school club and running it for 3 years",
    tech: [
      "Python",
    ],
  },
  {
    title: "Sir John Wilson School",
    position: "Software Developer - Contracted",
    time: "2020-2020",
    location: "Dhaka, Bangladesh",
    description:
    "Created an automated report card generation system for my high school, improving efficiency by 300% through the design and implementation of a robust database that seamlessly integrates input from teachers and student records.",
    tech: [
      "Python",
      "Google Sheets API",
      "MS Access",
      "BASH"
    ],
  },
  {
    title: "FIRST Global",
    position: "Champion / Participant",
    time: "2018 - 2020",
    location: "International",
    description:
    "Contributed to the design, construction, and coding of a championship-winning robot for international competitions, representing Bangladesh in 2018, 2019, and 2020. Acquired expertise in seamlessly integrating hardware and software for optimal performance, while developing intuitive control systems that streamlined the robot's operation for drivers.",
    tech: [
      "Java",
      "Android Studio",
      "Hardware"
    ],
  },
  
];
