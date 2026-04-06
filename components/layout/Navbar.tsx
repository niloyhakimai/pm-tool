import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between p-6">
            <div className="text-2xl font-bold text-white">🚀 PM Tool</div>

            {/* Navigation Links  */}
            <div className="flex gap-4">
                <Link
                  href="/login"
                  className="rounded-lg border border-gray-600 px-4 py-2 text-gray-300 transition-colors hover:border-white hover:text-white"
                >
                    Login
                </Link>
                <Link
                    href="/register"
                    className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
                    >
                    Get Started
                </Link>

            </div>
        </nav>
    )
}