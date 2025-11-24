import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function AnimatedHero3D() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Create floating connected nodes
  const nodes = [
    { x: 50, y: 30, size: 20, delay: 0 },
    { x: 150, y: 80, size: 16, delay: 0.2 },
    { x: 250, y: 50, size: 18, delay: 0.4 },
    { x: 350, y: 120, size: 22, delay: 0.6 },
    { x: 120, y: 180, size: 14, delay: 0.8 },
    { x: 280, y: 200, size: 20, delay: 1.0 },
    { x: 400, y: 180, size: 16, delay: 1.2 },
    { x: 200, y: 250, size: 18, delay: 1.4 },
  ];

  const connections = [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 1, to: 4 },
    { from: 4, to: 5 },
    { from: 5, to: 6 },
    { from: 3, to: 6 },
    { from: 5, to: 7 },
  ];

  return (
    <div className="absolute right-[60px] top-[180px] w-[500px] h-[400px] hidden lg:block perspective-[1000px]">
      <motion.div
        className="relative w-full h-full"
        style={{
          transformStyle: 'preserve-3d',
        }}
        animate={{
          rotateY: [0, 5, 0, -5, 0],
          rotateX: [0, -3, 0, 3, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ transform: 'translateZ(30px)' }}>
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          {connections.map((connection, index) => {
            const fromNode = nodes[connection.from];
            const toNode = nodes[connection.to];
            return (
              <motion.line
                key={index}
                x1={fromNode.x}
                y1={fromNode.y}
                x2={toNode.x}
                y2={toNode.y}
                stroke="rgba(29,124,227,0.8)"
                strokeWidth="3"
                filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 1.5,
                  delay: index * 0.1,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  repeatDelay: 2,
                }}
              />
            );
          })}
        </svg>

        {/* Floating nodes */}
        {nodes.map((node, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: node.x,
              top: node.y,
              width: node.size,
              height: node.size,
              transform: 'translateZ(50px)',
            }}
            animate={{
              y: [0, -15, 0],
              scale: [1, 1.1, 1],
              rotateZ: [0, 180, 360],
            }}
            transition={{
              duration: 3 + index * 0.3,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: node.delay,
            }}
          >
            <motion.div
              className="w-full h-full rounded-full bg-gradient-to-br from-[#1d7ce3] to-[#5bb7ff] shadow-lg relative"
              whileHover={{ scale: 1.3 }}
            >
              {/* Inner glow */}
              <div className="absolute inset-0 rounded-full bg-white opacity-40 blur-sm" />
              
              {/* Pulse effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-[#1d7ce3] opacity-60"
                animate={{
                  scale: [1, 2, 2],
                  opacity: [0.6, 0, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: node.delay,
                }}
              />
            </motion.div>
          </motion.div>
        ))}

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-[50px] left-[80px] w-[60px] h-[60px]"
          style={{ transform: 'translateZ(40px)' }}
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 180],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div className="w-full h-full border-2 border-[#1d7ce3] opacity-30" style={{ transform: 'rotateX(45deg) rotateY(45deg)' }} />
        </motion.div>

        <motion.div
          className="absolute bottom-[80px] right-[100px] w-[50px] h-[50px]"
          style={{ transform: 'translateZ(35px)' }}
          animate={{
            rotateZ: [0, 360],
            scale: [1, 1.2, 1],
            y: [0, 15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="w-full h-full rounded-full border-2 border-[#5bb7ff] opacity-40" />
        </motion.div>

        {/* Data flow particles */}
        {[...Array(6)].map((_, index) => (
          <motion.div
            key={`particle-${index}`}
            className="absolute w-[4px] h-[4px] bg-[#1d7ce3] rounded-full"
            style={{
              left: `${20 + index * 15}%`,
              top: `${30 + index * 10}%`,
              transform: 'translateZ(60px)',
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: index * 0.5,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Central "V" lettermark inspired element */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ transform: 'translateZ(70px) translate(-50%, -50%)' }}
          animate={{
            rotateY: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg width="80" height="80" viewBox="0 0 80 80" className="opacity-20">
            <path
              d="M20 20 L40 60 L60 20"
              stroke="url(#gradient)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1d7ce3" />
                <stop offset="100%" stopColor="#5bb7ff" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
}