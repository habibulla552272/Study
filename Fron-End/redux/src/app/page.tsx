"use client";

import { useEffect, useMemo, useState } from "react";

type Role = "Super Admin" | "Institute Admin" | "Teacher" | "Student" | "Parent";

type Metric = {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
};

type RoleConfig = {
  eyebrow: string;
  title: string;
  description: string;
  actions: string[];
};

const roles: Role[] = ["Super Admin", "Institute Admin", "Teacher", "Student", "Parent"];

const roleConfigs: Record<Role, RoleConfig> = {
  "Super Admin": {
    eyebrow: "Command Center",
    title: "Global LMS oversight across institutions, revenue, and risk.",
    description:
      "Track adoption, manage permissions, review audits, and monitor revenue with a single premium control plane.",
    actions: ["Review audit logs", "Manage subscriptions", "Approve institutes"],
  },
  "Institute Admin": {
    eyebrow: "Institute HQ",
    title: "Operate programs, faculty, cohorts, and payments with clarity.",
    description:
      "Run admissions, coordinate teaching teams, and keep student progress, communications, and billing in sync.",
    actions: ["Enroll students", "Assign teachers", "Publish calendar"],
  },
  Teacher: {
    eyebrow: "Teaching Studio",
    title: "Create courses, deliver live classes, and evaluate learners elegantly.",
    description:
      "Build modules, run exams and quizzes, mark attendance, and guide each cohort with fast feedback loops.",
    actions: ["Create assignment", "Start live class", "Publish quiz"],
  },
  Student: {
    eyebrow: "Learning Hub",
    title: "A focused space for progress, practice, and certificates.",
    description:
      "Continue courses, join live classes, submit assignments, and see your performance history in one place.",
    actions: ["Continue learning", "Join exam", "Download certificate"],
  },
  Parent: {
    eyebrow: "Parent View",
    title: "Stay informed about attendance, progress, and upcoming milestones.",
    description:
      "Monitor performance snapshots, reminders, and learning milestones without overwhelming detail.",
    actions: ["View progress", "Check notifications", "Review attendance"],
  },
};

const metrics: Metric[] = [
  { label: "Total Students", value: "24,518", change: "+12.4%", trend: "up" },
  { label: "Active Teachers", value: "1,284", change: "+8.2%", trend: "up" },
  { label: "Courses Live", value: "936", change: "+5.6%", trend: "up" },
  { label: "Revenue MRR", value: "$184k", change: "+14.1%", trend: "up" },
];

const chartBars = [72, 54, 86, 61, 92, 76, 88];

const notifications = [
  {
    title: "Exam reminder",
    detail: "Grade 10 mathematics exam starts in 45 minutes.",
    tone: "amber",
  },
  {
    title: "Assignment submitted",
    detail: "12 students submitted the weekly project before the deadline.",
    tone: "emerald",
  },
  {
    title: "Payment received",
    detail: "Enterprise subscription for North Campus renewed successfully.",
    tone: "blue",
  },
];

const schedule = [
  { time: "08:00", label: "Live class: Physics 201", meta: "Zoom + attendance" },
  { time: "10:30", label: "Assignment grading block", meta: "Essay + rubric scoring" },
  { time: "13:00", label: "Course publish review", meta: "Modules, video, resources" },
  { time: "16:15", label: "Parent progress meeting", meta: "Performance snapshot" },
];

const courseCards = [
  {
    title: "Advanced Biology",
    progress: 74,
    meta: "12 modules · 4 videos pending",
  },
  {
    title: "UI Systems Design",
    progress: 91,
    meta: "Certificate ready for completion",
  },
  {
    title: "Foundations of Finance",
    progress: 58,
    meta: "2 live classes this week",
  },
];

export default function Home() {
  const [activeRole, setActiveRole] = useState<Role>("Super Admin");
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") {
      return "light";
    }

    const savedTheme = window.localStorage.getItem("lms-theme") as "light" | "dark" | null;
    return savedTheme ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("lms-theme", theme);
  }, [theme]);

  const activeConfig = roleConfigs[activeRole];

  const roleHighlights = useMemo(
    () =>
      ({
        "Super Admin": ["Institutions", "Permissions", "Revenue"],
        "Institute Admin": ["Admissions", "Faculty", "Billing"],
        Teacher: ["Courses", "Quizzes", "Live classes"],
        Student: ["Progress", "Assignments", "Certificates"],
        Parent: ["Attendance", "Alerts", "Milestones"],
      })[activeRole],
    [activeRole],
  );

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#eef2ff_100%)] text-slate-900 dark:bg-[radial-gradient(circle_at_top,#1e293b_0%,#0f172a_55%,#020617_100%)] dark:text-slate-50">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-70 dark:opacity-100">
          <div className="absolute -left-32 -top-24 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />
          <div className="absolute -right-16 top-24 h-80 w-80 rounded-full bg-emerald-400/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
        </div>

        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-4 sm:px-6 lg:px-8">
          <header className="sticky top-4 z-20 rounded-3xl border border-white/50 bg-white/70 px-4 py-4 shadow-[0_18px_60px_-24px_rgba(15,23,42,0.35)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/60">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-500 via-blue-500 to-emerald-400 text-lg font-semibold text-white shadow-lg shadow-indigo-500/30">
                  L
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-500 dark:text-indigo-300">
                    Lumi LMS
                  </p>
                  <h1 className="text-lg font-semibold text-slate-900 dark:text-white">Enterprise Learning Command Center</h1>
                </div>
              </div>

              <div className="flex flex-1 flex-wrap items-center gap-3 lg:justify-center">
                <label className="flex min-w-60 flex-1 items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-500 shadow-sm transition focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:focus-within:ring-indigo-500/20">
                  <span className="text-slate-400">⌕</span>
                  <input
                    aria-label="Search everywhere"
                    placeholder="Search courses, people, events, invoices..."
                    className="w-full bg-transparent outline-none placeholder:text-slate-400"
                  />
                </label>

                <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-1.5 py-1.5 shadow-sm dark:border-white/10 dark:bg-white/5">
                  <button
                    type="button"
                    onClick={() => setTheme("light")}
                    className={`rounded-xl px-3 py-2 text-sm font-medium transition ${theme === "light" ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900" : "text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"}`}
                  >
                    Light
                  </button>
                  <button
                    type="button"
                    onClick={() => setTheme("dark")}
                    className={`rounded-xl px-3 py-2 text-sm font-medium transition ${theme === "dark" ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900" : "text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"}`}
                  >
                    Dark
                  </button>
                </div>

                <button
                  type="button"
                  className="rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                >
                  Global Command Palette
                </button>
              </div>

              <div className="flex items-center gap-3 self-start rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm dark:border-white/10 dark:bg-white/5">
                <div className="text-right">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Welcome back</p>
                  <p className="text-sm font-semibold">Aarav Mehta</p>
                </div>
                <div className="h-10 w-10 rounded-2xl bg-linear-to-br from-indigo-500 to-emerald-400" />
              </div>
            </div>
          </header>

          <section className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
            <aside className="sticky top-28 h-fit rounded-3xl border border-white/60 bg-white/75 p-4 shadow-[0_18px_60px_-24px_rgba(15,23,42,0.3)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/60">
              <div className="mb-4 rounded-2xl bg-slate-900 px-4 py-4 text-white dark:bg-white dark:text-slate-900">
                <p className="text-xs uppercase tracking-[0.2em] text-white/70 dark:text-slate-500">Role switch</p>
                <p className="mt-1 text-lg font-semibold">Choose a dashboard persona</p>
              </div>

              <nav className="space-y-2">
                {roles.map((role) => {
                  const isActive = role === activeRole;

                  return (
                    <button
                      key={role}
                      type="button"
                      onClick={() => setActiveRole(role)}
                      className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-medium transition duration-200 ${
                        isActive
                          ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/25"
                          : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5"
                      }`}
                    >
                      <span>{role}</span>
                      <span className={`rounded-full px-2 py-0.5 text-xs ${isActive ? "bg-white/15" : "bg-slate-200 dark:bg-white/10"}`}>
                        {role === "Super Admin" ? "1" : role === "Institute Admin" ? "2" : role === "Teacher" ? "3" : role === "Student" ? "4" : "5"}
                      </span>
                    </button>
                  );
                })}
              </nav>

              <div className="mt-4 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                <p className="font-semibold text-slate-900 dark:text-white">Navigation</p>
                <p className="mt-1">Dashboard, Courses, Calendar, Reports, Notifications, Settings, Billing, Support.</p>
              </div>
            </aside>

            <div className="space-y-6">
              <section className="overflow-hidden rounded-4xl border border-white/60 bg-white/75 p-6 shadow-[0_18px_60px_-24px_rgba(15,23,42,0.28)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/60">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                  <div className="max-w-3xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-300">{activeConfig.eyebrow}</p>
                    <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">{activeConfig.title}</h2>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">{activeConfig.description}</p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {activeConfig.actions.map((action) => (
                      <button
                        key={action}
                        type="button"
                        className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-indigo-400 dark:hover:text-white"
                      >
                        {action}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {roleHighlights.map((item) => (
                    <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </section>

              <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {metrics.map((metric) => (
                  <article
                    key={metric.label}
                    className="rounded-[1.75rem] border border-white/60 bg-white/80 p-5 shadow-[0_14px_40px_-24px_rgba(15,23,42,0.35)] backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(15,23,42,0.4)] dark:border-white/10 dark:bg-slate-950/60"
                  >
                    <p className="text-sm text-slate-500 dark:text-slate-400">{metric.label}</p>
                    <div className="mt-3 flex items-end justify-between gap-4">
                      <p className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">{metric.value}</p>
                      <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${metric.trend === "up" ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-300" : "bg-rose-500/10 text-rose-600 dark:text-rose-300"}`}>
                        {metric.change}
                      </span>
                    </div>
                  </article>
                ))}
              </section>

              <section className="grid gap-6 xl:grid-cols-[1.35fr_0.95fr]">
                <article className="rounded-4xl border border-white/60 bg-white/80 p-6 shadow-[0_18px_60px_-24px_rgba(15,23,42,0.3)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/60">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-300">Analytics</p>
                      <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">Revenue, activity, and retention</h3>
                    </div>
                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">Live data</span>
                  </div>

                  <div className="mt-8 grid gap-4 md:grid-cols-3">
                    <div className="rounded-3xl bg-slate-50 p-4 dark:bg-white/5 md:col-span-2">
                      <div className="mb-4 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                        <span>Revenue trend</span>
                        <span>Last 7 days</span>
                      </div>
                      <div className="flex h-56 items-end gap-3">
                        {chartBars.map((height, index) => (
                          <div key={index} className="flex flex-1 flex-col items-center gap-3">
                            <div className="flex w-full flex-1 items-end rounded-t-3xl bg-slate-200/70 p-1 dark:bg-white/10">
                              <div
                                className="w-full rounded-t-[1.15rem] bg-linear-to-t from-indigo-600 via-blue-500 to-emerald-400 shadow-[0_0_35px_rgba(99,102,241,0.25)]"
                                style={{ height: `${height}%` }}
                              />
                            </div>
                            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">{index + 1}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-3xl bg-slate-50 p-4 dark:bg-white/5">
                        <p className="text-sm text-slate-500 dark:text-slate-400">Course completion</p>
                        <p className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">86%</p>
                        <div className="mt-4 h-3 rounded-full bg-slate-200 dark:bg-white/10">
                          <div className="h-3 w-[86%] rounded-full bg-linear-to-r from-indigo-600 to-emerald-400" />
                        </div>
                      </div>

                      <div className="rounded-3xl bg-slate-50 p-4 dark:bg-white/5">
                        <p className="text-sm text-slate-500 dark:text-slate-400">Exam pass rate</p>
                        <p className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">93.4%</p>
                        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Auto grading + manual review</p>
                      </div>
                    </div>
                  </div>
                </article>

                <article className="rounded-4xl border border-white/60 bg-white/80 p-6 shadow-[0_18px_60px_-24px_rgba(15,23,42,0.3)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/60">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-300">Workspace</p>
                      <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">Today&apos;s schedule</h3>
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-white/10 dark:text-slate-300">GMT+5:30</span>
                  </div>

                  <div className="mt-6 space-y-3">
                    {schedule.map((item) => (
                      <div key={item.time} className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
                        <div className="min-w-14 text-sm font-semibold text-indigo-600 dark:text-indigo-300">{item.time}</div>
                        <div>
                          <p className="font-medium text-slate-900 dark:text-white">{item.label}</p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">{item.meta}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              </section>

              <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                <article className="rounded-4xl border border-white/60 bg-white/80 p-6 shadow-[0_18px_60px_-24px_rgba(15,23,42,0.3)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/60">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-300">Learning</p>
                      <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">My courses</h3>
                    </div>
                    <button type="button" className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-indigo-300 hover:text-indigo-600 dark:border-white/10 dark:text-slate-300">
                      View all
                    </button>
                  </div>

                  <div className="mt-6 space-y-4">
                    {courseCards.map((course) => (
                      <div key={course.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-lg font-semibold text-slate-900 dark:text-white">{course.title}</p>
                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{course.meta}</p>
                          </div>
                          <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-700 dark:text-indigo-300">{course.progress}%</span>
                        </div>
                        <div className="mt-4 h-2 rounded-full bg-slate-200 dark:bg-white/10">
                          <div className="h-2 rounded-full bg-linear-to-r from-indigo-600 to-emerald-400" style={{ width: `${course.progress}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </article>

                <article className="rounded-4xl border border-white/60 bg-white/80 p-6 shadow-[0_18px_60px_-24px_rgba(15,23,42,0.3)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/60">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-300">Alerts</p>
                      <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">Notification center</h3>
                    </div>
                    {/* <button type="button" className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white dark:bg-white dark:text-slate-900">
                      3 new
                    </button> */}
                  </div>

                  <div className="mt-6 space-y-4">
                    {notifications.map((item) => (
                      <div key={item.title} className="flex gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/5">
                        <div
                          className={`mt-1 h-3 w-3 rounded-full ${
                            item.tone === "amber" ? "bg-amber-400" : item.tone === "emerald" ? "bg-emerald-400" : "bg-sky-400"
                          }`}
                        />
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-white">{item.title}</p>
                          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              </section>

              <section className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
                <article className="rounded-4xl border border-white/60 bg-white/80 p-6 shadow-[0_18px_60px_-24px_rgba(15,23,42,0.3)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/60">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600 dark:text-indigo-300">System</p>
                      <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">Modules and capabilities</h3>
                    </div>
                    <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-300">Production ready</span>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      "Authentication: Login, register, OTP, social login",
                      "Academics: Courses, quizzes, exams, assignments",
                      "Operations: Calendar, notifications, reports, audit logs",
                      "Finance: Stripe, PayPal, bKash, Nagad, invoices",
                      "Content: Videos, PDFs, files, certificates, QR verification",
                      "Infrastructure: JWT, Redis, Socket.IO, Prisma, PostgreSQL",
                    ].map((item) => (
                      <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                        {item}
                      </div>
                    ))}
                  </div>
                </article>

                <article className="rounded-4xl border border-white/60 bg-linear-to-br from-slate-900 via-slate-900 to-indigo-950 p-6 text-white shadow-[0_18px_60px_-24px_rgba(15,23,42,0.45)] dark:border-white/10">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-300">Command Palette</p>
                  <h3 className="mt-2 text-xl font-semibold">Keyboard-first navigation</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    Jump to any student, class, invoice, exam, or report instantly. Built to feel like a premium SaaS cockpit with a calm, dense information layout.
                  </p>

                  <div className="mt-6 grid gap-3">
                    {[
                      "Ctrl/⌘ + K: open command palette",
                      "Ctrl/⌘ + /: focus search",
                      "G then D: dashboard",
                      "G then C: calendar",
                    ].map((shortcut) => (
                      <div key={shortcut} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
                        {shortcut}
                      </div>
                    ))}
                  </div>
                </article>
              </section>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
