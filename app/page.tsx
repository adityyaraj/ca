"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

/* ───────── ANIMATION HELPERS ───────── */
const fade = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.25, 0.4, 0, 1] as [number, number, number, number] },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.07 } },
};

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.section
      ref={ref}
      id={id}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.section>
  );
}

/* ───────── DATA ───────── */
const PROJECTS = [
  {
    title: "Clam-Zone — Amazon Clone",
    description:
      "Developed a responsive e-commerce website clone of Amazon using React for frontend and Firebase for authentication and backend. Implemented dynamic product listings, cart management, and integrated Stripe payment gateway for secure transactions.",
    tags: ["React", "Firebase", "Stripe", "React Router", "CSS"],
    link: "#",
    date: "July 2025",
  },
  {
    title: "Emotion Recognition System",
    description:
      "Built a hybrid emotion recognition system that detects human emotions using both facial expressions and voice data. Trained separate CNN models on FER-2013 and RAVDESS datasets for facial and audio emotion classification respectively.",
    tags: ["Python", "TensorFlow", "OpenCV", "Librosa", "CNN", "Deep Learning"],
    link: "https://github.com/RMaulika/Emotion-recognition",
    date: "June 2025",
  },
  {
    title: "Lecture Voice-to-Notes Generator",
    description:
      "Developed an AI-powered tool that converts recorded lecture audio into concise study notes and auto-generated quizzes. Uses Faster Whisper for speech-to-text and HuggingFace T5 for summarisation, with a Streamlit web interface.",
    tags: ["Python", "Faster Whisper", "HuggingFace T5", "Streamlit", "NLP"],
    link: "https://github.com/RMaulika/LectureVoiceToNotes",
    date: "October 2025",
  },
  {
    title: "AI-Driven Groundwater System",
    description:
      "Reinforced an AI-based system for real-time groundwater level monitoring using predictive analytics. Ensured sustainable water extraction strategies through data-driven decision-making with adaptive monitoring and control mechanisms.",
    tags: ["Python", "Random Forest", "LSTM", "Flask", "Streamlit"],
    link: "#",
    date: "April 2025",
  },
];

const SKILL_CATEGORIES = [
  {
    category: "Languages",
    skills: ["C++", "JavaScript", "C", "Python", "Java"],
  },
  {
    category: "Frameworks",
    skills: ["HTML & CSS", "Bootstrap", "Node.js", "React", "Streamlit"],
  },
  {
    category: "Tools & Platforms",
    skills: ["MySQL", "MongoDB", "Git", "VS Code", "TensorFlow", "Pandas", "PyTorch", "Matplotlib", "NumPy"],
  },
  {
    category: "Soft Skills",
    skills: ["Problem-Solving", "Leadership", "Project Management", "Adaptability", "Attention to Detail", "Quick Learner"],
  },
];

const EXPERIENCE = [
  {
    role: "AI Intern",
    company: "Shell",
    via: "Edunet Foundation",
    period: "Oct 2025 — Present",
    description:
      "Improved waste classification accuracy using MobileNetV2-based model for Organic vs Recyclable waste. Reduced model size by 40% using quantization for faster inference on low-power IoT deployments.",
    tech: ["Python", "TensorFlow/Keras", "MobileNetV2", "Scikit-learn", "NumPy"],
  },
  {
    role: "AI Intern",
    company: "IBM",
    via: "Edunet Foundation",
    period: "Sep 2025 — Oct 2025",
    description:
      "Boosted lecture-to-notes conversion accuracy by 20–35% upgrading Faster Whisper transcription pipeline. Launched a Streamlit platform converting audio into structured notes and quizzes in real time, increasing learner engagement by 40%.",
    tech: ["OpenAI-Whisper", "Transformers", "PyTorch", "Streamlit", "Pandas"],
  },
  {
    role: "AI Intern",
    company: "Microsoft",
    via: "Edunet Foundation",
    period: "May 2025 — Jun 2025",
    description:
      "Achieved improved emotion recognition accuracy on FER-2013 dataset through augmentation, hyperparameter tuning, and CNN enhancements. Designed the model for practical use in human-computer interaction and sentiment analysis.",
    tech: ["TensorFlow", "OpenCV", "NumPy", "Scikit-learn", "Pandas"],
  },
];

const CERTIFICATES = [
  { title: "AI in Healthcare Specialization", issuer: "Coursera", date: "Nov 2025 — Present" },
  { title: "Principles of Generative AI", issuer: "Infosys Springboard", date: "Oct 2025" },
  { title: "Artificial Intelligence Primer", issuer: "Infosys Springboard", date: "Jun 2025" },
];

const ACHIEVEMENTS = [
  "Shortlisted for the Infosys Springboard Virtual Internship Program based on technical and academic merit.",
  "Selected by Edunet Foundation (Microsoft, IBM & Shell partners) — improved model accuracy and performance across all internship programs.",
];

const EDUCATION = [
  {
    institution: "Lovely Professional University",
    location: "Punjab, India",
    degree: "B.Tech — Computer Science & Engineering (AI & ML)",
    score: "CGPA: 6.42",
    period: "Aug 2023 — Present",
  },
  {
    institution: "Graviity Junior College",
    location: "Hyderabad, Telangana",
    degree: "Intermediate",
    score: "Percentage: 86%",
    period: "Apr 2021 — Mar 2023",
  },
  {
    institution: "PM Shri Kendriya Vidyalaya",
    location: "Hyderabad, Telangana",
    degree: "Matriculation",
    score: "Percentage: 92%",
    period: "Apr 2020 — Mar 2021",
  },
];

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

/* ───────── ICONS ───────── */
function GithubIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

/* ───────── SHARED LAYOUT ───────── */
const CONTAINER = "mx-auto w-full max-w-4xl px-6 sm:px-8";

/* ───────── COMPONENTS ───────── */

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.25, 0.4, 0, 1] }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl"
    >
      <div className={`${CONTAINER} flex items-center justify-between py-4`}>
        <a href="#" className="text-lg font-bold tracking-tight text-primary">
          Maulika Rongala
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[13px] font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" className="hidden rounded-full border-primary/30 bg-warm-dim text-primary hover:bg-primary/20 sm:inline-flex" asChild>
            <a href="#contact">Get in touch</a>
          </Button>
          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            <svg className="size-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.4, 0, 1] }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl md:hidden"
          >
            <ul className={`${CONTAINER} flex flex-col gap-1 py-4`}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <Button variant="outline" size="sm" className="w-full rounded-full border-primary/30 bg-warm-dim text-primary hover:bg-primary/20" asChild>
                  <a href="#contact" onClick={() => setMobileOpen(false)}>Get in touch</a>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function HeroSection() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden pt-20">
      {/* Subtle warm glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[400px] w-[400px] sm:h-[600px] sm:w-[600px] rounded-full bg-primary/[0.04] blur-[100px] sm:blur-[140px]" />

      <div className={CONTAINER}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0, 1] }}
        >
          <Badge variant="outline" className="mb-6 gap-2 border-border bg-card text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for opportunities
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.4, 0, 1] }}
          className="text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
        >
          I&apos;m Maulika,
          <br />
          <span className="text-muted-foreground">an AI &amp; ML developer.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.4, 0, 1] }}
          className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base"
        >
          I build machine learning systems and deep learning models,
          from CNNs for emotion recognition to NLP pipelines for real-time
          transcription. Currently interning at Shell, with prior
          experience at IBM and Microsoft.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: [0.25, 0.4, 0, 1] }}
          className="mt-7 flex flex-wrap items-center gap-4 sm:mt-8"
        >
          <Button className="rounded-full" asChild>
            <a href="#projects">
              View work
              <svg className="size-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
            </a>
          </Button>

          <Separator orientation="vertical" className="!h-6 hidden bg-border sm:block" />

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/RMaulika" target="_blank" rel="noopener noreferrer">
                <GithubIcon className="size-[18px]" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://www.linkedin.com/in/maulika-rongala/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className="size-[18px]" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:maulika@example.com">
                <MailIcon className="size-[18px]" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <Section id="about" className="py-16 sm:py-24">
      <div className={CONTAINER}>
        <motion.p variants={fade} className="text-xs font-semibold uppercase tracking-widest text-primary">
          About
        </motion.p>
        <motion.h2 variants={fade} className="mt-2 text-xl font-bold tracking-tight sm:text-2xl md:text-3xl">
          A bit about me
        </motion.h2>

        <Separator className="mt-6 bg-border" />

        <motion.div variants={fade} custom={1} className="mt-8 max-w-2xl space-y-4 text-muted-foreground leading-[1.75] text-[15px]">
          <p>
            I&apos;m a B.Tech CSE (AI &amp; ML) student at Lovely Professional
            University with hands-on experience in machine learning, deep
            learning, and data-driven problem solving. I&apos;ve interned with
            industry leaders — Microsoft, IBM, and Shell — through the Edunet
            Foundation.
          </p>
          <p>
            My work spans training CNNs for emotion recognition and waste
            classification, to building real-time audio-to-notes platforms
            with NLP pipelines. I love turning complex data into actionable
            insights and deploying models that make a real impact.
          </p>
        </motion.div>

        <motion.div variants={stagger} className="mt-8 grid grid-cols-2 gap-2 sm:mt-10 sm:gap-3 sm:grid-cols-4">
          {[
            { n: "3", l: "AI Internships" },
            { n: "5+", l: "Projects" },
            { n: "3", l: "Certifications" },
            { n: "40%", l: "Model Reduction" },
          ].map((s) => (
            <motion.div key={s.l} variants={fade}>
              <Card className="border-border bg-card py-4 text-center">
                <CardContent className="p-0">
                  <span className="text-2xl font-bold text-primary">{s.n}</span>
                  <span className="mt-1 block text-xs text-muted-foreground">{s.l}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

function SkillsSection() {
  return (
    <Section id="skills" className="bg-surface py-16 sm:py-24">
      <div className={CONTAINER}>
        <motion.p variants={fade} className="text-xs font-semibold uppercase tracking-widest text-primary">
          Skills
        </motion.p>
        <motion.h2 variants={fade} className="mt-2 text-xl font-bold tracking-tight sm:text-2xl md:text-3xl">
          Technical toolkit
        </motion.h2>

        <Separator className="mt-6 bg-border" />

        <div className="mt-10 space-y-8">
          {SKILL_CATEGORIES.map((cat) => (
            <motion.div key={cat.category} variants={fade}>
              <h3 className="mb-3 text-sm font-semibold">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="border-border bg-card text-muted-foreground transition-colors duration-200 hover:border-primary/40 hover:text-primary"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ProjectsSection() {
  return (
    <Section id="projects" className="py-16 sm:py-24">
      <div className={CONTAINER}>
        <motion.p variants={fade} className="text-xs font-semibold uppercase tracking-widest text-primary">
          Projects
        </motion.p>
        <motion.h2 variants={fade} className="mt-2 text-xl font-bold tracking-tight sm:text-2xl md:text-3xl">
          Selected work
        </motion.h2>

        <Separator className="mt-6 bg-border" />

        <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <motion.div key={project.title} variants={fade}>
              <a href={project.link} className="group block h-full">
                <Card className="h-full border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_40px_rgba(200,164,110,0.04)]">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <CardTitle className="text-base">{project.title}</CardTitle>
                        <p className="font-mono text-xs text-primary">{project.date}</p>
                      </div>
                      <svg className="size-4 shrink-0 mt-0.5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="leading-relaxed">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="border-border text-muted-foreground text-[11px]">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ExperienceSection() {
  return (
    <Section id="experience" className="bg-surface py-16 sm:py-24">
      <div className={CONTAINER}>
        <motion.p variants={fade} className="text-xs font-semibold uppercase tracking-widest text-primary">
          Experience
        </motion.p>
        <motion.h2 variants={fade} className="mt-2 text-xl font-bold tracking-tight sm:text-2xl md:text-3xl">
          Where I&apos;ve worked
        </motion.h2>

        <Separator className="mt-6 bg-border" />

        <div className="mt-10 space-y-6">
          {EXPERIENCE.map((exp) => (
            <motion.div key={exp.company} variants={fade}>
              <Card className="border-border bg-card transition-colors duration-300 hover:border-primary/30">
                <CardHeader>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <CardTitle className="text-base">{exp.role} — {exp.company}</CardTitle>
                      <p className="text-xs text-muted-foreground">via {exp.via}</p>
                    </div>
                    <span className="shrink-0 font-mono text-xs text-primary">{exp.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <Badge key={t} variant="outline" className="border-border text-muted-foreground text-[11px]">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function EducationSection() {
  return (
    <Section id="education" className="py-16 sm:py-24">
      <div className={CONTAINER}>
        <motion.p variants={fade} className="text-xs font-semibold uppercase tracking-widest text-primary">
          Education
        </motion.p>
        <motion.h2 variants={fade} className="mt-2 text-xl font-bold tracking-tight sm:text-2xl md:text-3xl">
          Academic background
        </motion.h2>

        <Separator className="mt-6 bg-border" />

        <div className="mt-8 grid gap-3 sm:mt-10 sm:gap-4 md:grid-cols-3">
          {EDUCATION.map((edu) => (
            <motion.div key={edu.institution} variants={fade}>
              <Card className="h-full border-border bg-card">
                <CardHeader>
                  <Badge variant="outline" className="w-fit border-primary/30 bg-primary/10 text-primary text-[11px]">
                    {edu.period}
                  </Badge>
                  <CardTitle className="text-[15px] leading-snug">{edu.institution}</CardTitle>
                  <CardDescription className="text-xs">{edu.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{edu.degree}</p>
                  <p className="mt-1 text-sm font-semibold text-primary">{edu.score}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function CertificationsSection() {
  return (
    <Section className="bg-surface py-16 sm:py-24">
      <div className={CONTAINER}>
        <motion.p variants={fade} className="text-xs font-semibold uppercase tracking-widest text-primary">
          Certifications & Achievements
        </motion.p>
        <motion.h2 variants={fade} className="mt-2 text-xl font-bold tracking-tight sm:text-2xl md:text-3xl">
          Recognition
        </motion.h2>

        <Separator className="mt-6 bg-border" />

        <div className="mt-8 grid gap-6 sm:mt-10 sm:gap-8 sm:grid-cols-2">
          <motion.div variants={fade} className="space-y-3">
            <h3 className="mb-1 text-sm font-semibold">Certificates</h3>
            {CERTIFICATES.map((cert) => (
              <Card key={cert.title} className="border-border bg-card">
                <CardContent className="p-4">
                  <h4 className="text-sm font-medium">{cert.title}</h4>
                  <div className="mt-1.5 flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="text-primary">{cert.issuer}</span>
                    <Separator orientation="vertical" className="!h-3 bg-border" />
                    <span>{cert.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          <motion.div variants={fade} className="space-y-3">
            <h3 className="mb-1 text-sm font-semibold">Achievements</h3>
            {ACHIEVEMENTS.map((ach, i) => (
              <Card key={i} className="border-border bg-card">
                <CardContent className="p-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">{ach}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

function ContactSection() {
  return (
    <Section id="contact" className="py-16 sm:py-24">
      <div className={CONTAINER}>
        <motion.p variants={fade} className="text-xs font-semibold uppercase tracking-widest text-primary">
          Contact
        </motion.p>
        <motion.h2 variants={fade} className="mt-2 text-xl font-bold tracking-tight sm:text-2xl md:text-3xl">
          Let&apos;s work together
        </motion.h2>

        <Separator className="mt-6 bg-border" />

        <motion.p variants={fade} custom={1} className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
          I&apos;m open to AI/ML internships, freelance projects, and full-time
          opportunities. Feel free to reach out.
        </motion.p>

        <motion.div variants={fade} custom={2} className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8">
          <Button className="rounded-full" asChild>
            <a href="mailto:maulika@example.com">
              <MailIcon className="size-4" />
              Say hello
            </a>
          </Button>
          <Button variant="outline" className="rounded-full border-border bg-card" asChild>
            <a href="https://github.com/RMaulika" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="size-4" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" className="rounded-full border-border bg-card" asChild>
            <a href="https://www.linkedin.com/in/maulika-rongala/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="size-4" />
              LinkedIn
            </a>
          </Button>
        </motion.div>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-6 sm:py-8">
      <div className={`${CONTAINER} flex flex-col items-center justify-between gap-2 sm:flex-row sm:gap-3`}>
        <span className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Maulika Rongala
        </span>
        <span className="text-xs text-muted-foreground">
          Next.js · Tailwind · shadcn/ui · Framer Motion
        </span>
      </div>
    </footer>
  );
}

/* ───────── PAGE ───────── */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
