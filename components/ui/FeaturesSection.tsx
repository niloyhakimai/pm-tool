export default function FeaturesSection() {
  return (
    <section id="features" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 text-center text-3xl font-bold text-white">
          Everything you need to manage projects
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-xl border border-gray-800 bg-gray-800/50 p-6">
            <div className="mb-4 text-3xl">📋</div>
            <h3 className="mb-2 text-xl font-semibold text-white">
              Task Management
            </h3>
            <p className="text-gray-400">
              Create, assign, and track tasks with an intuitive Kanban board.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl border border-gray-800 bg-gray-800/50 p-6">
            <div className="mb-4 text-3xl">👥</div>
            <h3 className="mb-2 text-xl font-semibold text-white">
              Team Collaboration
            </h3>
            <p className="text-gray-400">
              Invite team members and work together in real-time.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl border border-gray-800 bg-gray-800/50 p-6">
            <div className="mb-4 text-3xl">📊</div>
            <h3 className="mb-2 text-xl font-semibold text-white">
              Progress Tracking
            </h3>
            <p className="text-gray-400">
              See project progress at a glance with visual dashboards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}