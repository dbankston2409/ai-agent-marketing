import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#16213E] text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              AI Agents That <span className="text-[#E94560]">Connect</span> With Your Team
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform your business operations with intelligent AI agents that seamlessly integrate with your team, automate workflows, and scale your productivity.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#E94560] hover:bg-[#d63850] px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Get Started
              </button>
              <button className="border-2 border-white/30 hover:border-white/60 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/ai-agent-hero.png"
              alt="AI Agent connecting with team members"
              width={1792}
              height={1024}
              className="rounded-lg shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#1A1A2E] py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">
            Why Choose <span className="text-[#E94560]">AI Agent Marketing</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#0F3460] p-8 rounded-lg">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4">Intelligent Automation</h3>
              <p className="text-gray-300">
                AI agents that learn your workflows and automate repetitive tasks, freeing your team to focus on high-value work.
              </p>
            </div>
            <div className="bg-[#0F3460] p-8 rounded-lg">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-2xl font-bold mb-4">Seamless Integration</h3>
              <p className="text-gray-300">
                Connect with your existing tools and platforms. No disruption to your current workflow.
              </p>
            </div>
            <div className="bg-[#0F3460] p-8 rounded-lg">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-2xl font-bold mb-4">Scale Effortlessly</h3>
              <p className="text-gray-300">
                Grow your operations without growing your overhead. AI agents scale with your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                Transform How Your <span className="text-[#E94560]">Team Works</span>
              </h2>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="text-[#E94560] text-2xl mr-3">✓</span>
                  <span>24/7 availability - AI agents never sleep</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E94560] text-2xl mr-3">✓</span>
                  <span>Instant response times - no more bottlenecks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E94560] text-2xl mr-3">✓</span>
                  <span>Consistent quality - standardize excellence across your operations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#E94560] text-2xl mr-3">✓</span>
                  <span>Data-driven insights - make better decisions faster</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#1A1A2E] p-12 rounded-lg">
              <h3 className="text-3xl font-bold mb-6">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6">
                Join hundreds of teams already using AI agents to transform their operations.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-[#0F3460] border border-white/20 focus:border-[#E94560] focus:outline-none"
                />
                <button className="w-full bg-[#E94560] hover:bg-[#d63850] px-8 py-3 rounded-lg font-semibold transition-colors">
                  Request Demo
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A2E] py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>&copy; 2026 TVAG Teams. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
