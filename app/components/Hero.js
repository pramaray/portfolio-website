'use client';

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-emerald-900 to-gray-900 relative overflow-hidden flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'%3E%3C/circle%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 md:pt-24 lg:pt-32">
        {/* Creative Hero Content */}
        <div className="mb-12">
          <div className="relative">
            {/* Side by side layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Left Side - Animated Code Block */}
              <div className="relative">
                <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl p-6 font-mono text-sm w-full max-w-lg mx-auto lg:mx-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-400 text-xs">portfolio.js</span>
                  </div>
                  
                  <div className="space-y-2 text-left">
                    <div className="text-purple-400">
                      <span className="text-blue-400">const</span> 
                      <span className="text-yellow-300"> developer</span> 
                      <span className="text-white"> = {`{`}</span>
                    </div>
                    <div className="pl-4 text-emerald-300">
                      <span className="text-orange-400">name</span>
                      <span className="text-white">: </span>
                      <span className="text-green-300">&quot;Prama Ray&quot;</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="pl-4 text-emerald-300">
                      <span className="text-orange-400">role</span>
                      <span className="text-white">: </span>
                      <span className="text-green-300">&quot;Full-Stack Developer&quot;</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="pl-4 text-emerald-300">
                      <span className="text-orange-400">passion</span>
                      <span className="text-white">: </span>
                      <span className="text-green-300">&quot;Creating Digital Art&quot;</span>
                      <span className="text-white">,</span>
                    </div>
                    <div className="pl-4 text-emerald-300">
                      <span className="text-orange-400">skills</span>
                      <span className="text-white">: [</span>
                      <span className="text-green-300">&quot;Code&quot;, &quot;Design&quot;, &quot;Innovation&quot;</span>
                      <span className="text-white">]</span>
                    </div>
                    <div className="text-white">{`};`}</div>
                  </div>
                  
                  {/* Typing cursor animation */}
                  <div className="inline-block w-2 h-5 bg-emerald-400 animate-pulse ml-1"></div>
                </div>
              </div>
              
              {/* Right Side - Creative Typography */}
              <div className="text-center lg:text-left space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                  <span className="bg-gradient-to-r from-emerald-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    BUILDING
                  </span>
                  <br />
                  <span className="text-white font-light">the </span>
                  <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                    FUTURE
                  </span>
                </h1>
                
                <div className="flex justify-center lg:justify-start items-center space-x-4 text-gray-400">
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent flex-1 max-w-20"></div>
                  <span className="text-sm font-mono whitespace-nowrap">one line at a time</span>
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent flex-1 max-w-20"></div>
                </div>
                
                <p className="text-lg text-gray-400 max-w-lg">
                  Transforming ideas into elegant solutions through code, design, and innovation.
                </p>
              </div>
              
            </div>
          </div>
        </div>
        
        {/* Subtitle */}
        <div className="mb-16">
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
            <span className="text-emerald-400 font-semibold">Full-Stack Developer</span> & 
            <span className="text-orange-400 font-semibold"> Creative Designer</span>
          </p>
          <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
            Crafting digital experiences with passion and precision
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <a 
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              const projectsSection = document.getElementById('projects');
              if (projectsSection) {
                projectsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full font-semibold hover:from-emerald-600 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25"
          >
            View My Work
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          
          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-4 border border-gray-600 text-gray-300 rounded-full font-semibold hover:border-white hover:text-white hover:bg-white/5 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-8 mb-8">
          <a 
            href="https://github.com/pramaray" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors duration-300 hover:scale-110 transform"
          >
            <span className="sr-only">GitHub</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/pramaray/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors duration-300 hover:scale-110 transform"
          >
            <span className="sr-only">LinkedIn</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          
          <a 
            href="https://leetcode.com/u/pramaray/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors duration-300 hover:scale-110 transform"
          >
            <span className="sr-only">LeetCode</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
            </svg>
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div 
          className="w-6 h-10 border-2 border-gray-400 rounded-full cursor-pointer hover:border-white transition-colors duration-300"
          onClick={() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <div className="w-1 h-3 bg-gray-400 rounded-full mx-auto mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
