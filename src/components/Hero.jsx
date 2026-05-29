// 1. Import your image here (make sure the extension matches your file!)
import profilePic from '../assets/profile.png'; 

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6">
      <div className="max-w-3xl text-center flex flex-col items-center">
        
        {/* Profile Photo with Glowing Border */}
        <div className="mb-8">
          <img 
            src={profilePic} 
            alt="Profile" 
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.6)]"
          />
        </div>
        
        {/* Glowing Gradient Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-emerald-400">
          Hi, I'm Pramod Chavan
        </h1>
        
        {/* Introduction Subtitle */}
        <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed">
          I'm a final-year Computer Science and Engineering student at Sandip University. 
          I specialize in building responsive, high-performance web applications using the MERN stack and Java.
        </p>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-blue-500/30">
            View My Projects
          </button>
          <button className="px-8 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-full font-semibold transition-all transform hover:scale-105">
            Contact Me
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;