export default function Logo({ className = "w-[160px] h-[40px]" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 180 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Icon - Geometric V with system nodes */}
      <g>
        {/* Main V shape */}
        <path 
          d="M8 8L16 24L24 8" 
          stroke="#1d7ce3" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        
        {/* System connection nodes */}
        <circle cx="8" cy="8" r="2.5" fill="#1d7ce3" />
        <circle cx="24" cy="8" r="2.5" fill="#1d7ce3" />
        <circle cx="16" cy="24" r="2.5" fill="#1d7ce3" />
        
        {/* Additional tech lines */}
        <line x1="8" y1="8" x2="4" y2="4" stroke="#1d7ce3" strokeWidth="2" strokeLinecap="round" />
        <line x1="24" y1="8" x2="28" y2="4" stroke="#1d7ce3" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="24" x2="16" y2="28" stroke="#1d7ce3" strokeWidth="2" strokeLinecap="round" />
        
        <circle cx="4" cy="4" r="1.5" fill="#1d7ce3" />
        <circle cx="28" cy="4" r="1.5" fill="#1d7ce3" />
        <circle cx="16" cy="28" r="1.5" fill="#1d7ce3" />
      </g>
      
      {/* Text "VULT SYSTEMS" */}
      <text 
        x="40" 
        y="24" 
        fontFamily="Manrope, sans-serif" 
        fontWeight="800" 
        fontSize="16" 
        fill="currentColor"
        letterSpacing="-0.5"
      >
        VULT SYSTEMS
      </text>
    </svg>
  );
}
