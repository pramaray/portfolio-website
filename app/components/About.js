import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Hello section */}
          <div className="lg:sticky lg:top-32">
            <h2 className="text-6xl lg:text-7xl font-bold text-emerald-800 mb-8 font-display leading-tight">
              Hello,<br />
              I'm Prama Ray !
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              A passionate and detail-oriented third-year Information Technology
              undergraduate at Jadavpur University. Experienced in building interactive,
              browser-based and dynamic websites using modern tech stacks.
              Adept at problem-solving and collaborating within tech teams,
              with recognition for innovation in hackathons.
            </p>
            
            <a 
              href="#contact"
              className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              📧 pramaray300306@gmail.com
            </a>
          </div>

          {/* Right side - Photo and details */}
          <div className="relative">
            <div className="relative mb-12">
              <div className="w-80 h-96 bg-emerald-600 rounded-lg overflow-hidden shadow-2xl mx-auto lg:mx-0">
                <Image 
                  src="/photos/me.jpg"
                  alt="Prama Ray"
                  width={320}
                  height={384}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Contact info */}
            <div className="bg-emerald-800 text-white p-8 rounded-lg">
              <h3 className="text-3xl font-bold mb-6 font-display">Contact</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <span className="mr-2">📍</span>
                  <span>Bimanagar, Kaikhali, Kolkata-700052</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">📧</span>
                  <span>pramaray300306@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <span className="mr-2">📱</span>
                  <span>+91-8293331677</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
