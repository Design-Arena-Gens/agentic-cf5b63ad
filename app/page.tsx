'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [activeDemo, setActiveDemo] = useState<string>('ai');
  const [aiResponse, setAiResponse] = useState<string>('');
  const [isThinking, setIsThinking] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
    }));
    setParticles(newParticles);
  }, []);

  const demos = [
    { id: 'ai', label: 'AI Reasoning', icon: '🧠' },
    { id: 'visual', label: 'Visual Effects', icon: '✨' },
    { id: 'data', label: 'Data Processing', icon: '📊' },
    { id: 'realtime', label: 'Real-time Updates', icon: '⚡' },
  ];

  const handleAIQuery = async () => {
    setIsThinking(true);
    setAiResponse('');

    const responses = [
      'Analyzing quantum computational patterns across distributed networks...',
      'Processing multi-dimensional data structures with advanced heuristics...',
      'Synthesizing contextual embeddings from semantic knowledge graphs...',
      'Executing parallel inference across neural architecture layers...',
      'Optimizing decision boundaries using gradient-enhanced algorithms...',
    ];

    for (let i = 0; i < responses.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 800));
      setAiResponse(responses[i]);
    }

    setIsThinking(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            initial={{ x: `${particle.x}vw`, y: `${particle.y}vh`, opacity: 0 }}
            animate={{
              x: [`${particle.x}vw`, `${(particle.x + 20) % 100}vw`],
              y: [`${particle.y}vh`, `${(particle.y + 20) % 100}vh`],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-10 pt-20 pb-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-500 bg-clip-text text-transparent"
        >
          GROK ADVANTAGE
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl text-purple-300"
        >
          Advanced Intelligence • Real-time Processing • Limitless Capabilities
        </motion.p>
      </header>

      {/* Demo Selector */}
      <div className="relative z-10 flex justify-center gap-4 mb-12 px-4">
        {demos.map((demo) => (
          <motion.button
            key={demo.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveDemo(demo.id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeDemo === demo.id
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-500/50'
                : 'bg-slate-800 hover:bg-slate-700'
            }`}
          >
            <span className="mr-2">{demo.icon}</span>
            {demo.label}
          </motion.button>
        ))}
      </div>

      {/* Content Area */}
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <AnimatePresence mode="wait">
          {activeDemo === 'ai' && (
            <motion.div
              key="ai"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30"
            >
              <h2 className="text-3xl font-bold mb-6 text-purple-300">AI Reasoning Engine</h2>
              <div className="space-y-4">
                <button
                  onClick={handleAIQuery}
                  disabled={isThinking}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-700 py-4 rounded-lg font-semibold text-lg transition-all"
                >
                  {isThinking ? 'Processing...' : 'Generate AI Insight'}
                </button>

                {aiResponse && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-slate-800/80 rounded-lg p-6 min-h-[100px]"
                  >
                    <p className="text-green-400 font-mono">{aiResponse}</p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {activeDemo === 'visual' && (
            <motion.div
              key="visual"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30"
            >
              <h2 className="text-3xl font-bold mb-6 text-purple-300">Visual Effects Showcase</h2>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="aspect-square bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-4xl font-bold"
                  >
                    {i}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeDemo === 'data' && (
            <motion.div
              key="data"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30"
            >
              <h2 className="text-3xl font-bold mb-6 text-purple-300">Data Processing</h2>
              <div className="space-y-4">
                {['Neural Networks', 'Quantum Computing', 'Machine Learning', 'Deep Analysis'].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ width: 0 }}
                    animate={{ width: `${(i + 1) * 20}%` }}
                    transition={{ delay: i * 0.2, duration: 1 }}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 h-12 rounded-lg flex items-center px-4"
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeDemo === 'realtime' && (
            <motion.div
              key="realtime"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className="bg-slate-900/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/30"
            >
              <h2 className="text-3xl font-bold mb-6 text-purple-300">Real-time System Monitor</h2>
              <div className="grid grid-cols-2 gap-6">
                {['CPU', 'Memory', 'Network', 'GPU'].map((metric) => (
                  <div key={metric} className="bg-slate-800/80 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-2">{metric}</h3>
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="text-5xl font-bold text-green-400"
                    >
                      {Math.floor(Math.random() * 40 + 60)}%
                    </motion.div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center py-12 mt-20">
        <p className="text-purple-400">Powered by Advanced AI Technology</p>
      </footer>
    </main>
  );
}
