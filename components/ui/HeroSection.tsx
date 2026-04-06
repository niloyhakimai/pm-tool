import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-32 text-center">
      <div className="mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-400">
        ✨ Simple Project Management for Teams
      </div>

      <h1 className="mb-6 max-w-4xl text-5xl font-bold leading-tight text-white md:text-7xl">
        Manage Projects{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Like a Pro
        </span>
      </h1>

      <p className="mb-10 max-w-2xl text-lg text-gray-400">
        Create tasks, assign team members, track progress — all in one simple
        tool. Built for small teams who want to ship faster.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Link
          href="/register"
          className="rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25"
        >
          Start Free →
        </Link>
        <Link
          href="#features"
          className="rounded-lg border border-gray-700 px-8 py-3 text-lg text-gray-300 transition-all hover:border-gray-500 hover:text-white"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}