export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Upgrade your Web presence with Framer
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Get Custom Solution
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
              Schedule a call with Goran B.
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <p className="text-gray-400">
                © 2016-2023 VisionIQ - MIT License
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="#features"
                className="text-gray-400 hover:text-white transition"
              >
                Features
              </a>
              <a
                href="#integrations"
                className="text-gray-400 hover:text-white transition"
              >
                Integrations
              </a>
              <a
                href="#pricing"
                className="text-gray-400 hover:text-white transition"
              >
                Pricing
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Babarogic © 2023. Designed by Goran Babarogic
          </p>
        </div>
      </div>
    </footer>
  )
}

