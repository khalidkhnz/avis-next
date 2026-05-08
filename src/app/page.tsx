export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-gray-700 bg-gray-900 px-4 py-1 text-sm text-gray-300 mb-6">
          🚧 Scheduled Maintenance
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          We’ll be back soon.
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-400 leading-relaxed mb-10">
          Our website is currently undergoing scheduled maintenance to improve
          your experience. We appreciate your patience and will be back online
          shortly.
        </p>

        {/* Status Card */}
        <div className="rounded-2xl border border-gray-800 bg-gray-900/70 backdrop-blur p-6 mb-8">
          <div className="flex items-center justify-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
            </span>

            <p className="text-gray-300">
              Maintenance in progress...
            </p>
          </div>
        </div>

        {/* Contact */}
        <p className="text-sm text-gray-500">
          Need immediate help?{" "}
          <a
            href="mailto:support@example.com"
            className="text-white underline hover:text-gray-300 transition"
          >
            Contact support
          </a>
        </p>
      </div>
    </main>
  );
}