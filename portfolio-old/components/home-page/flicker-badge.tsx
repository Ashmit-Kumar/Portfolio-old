export default function PulseDot() {
  return (
    <span
      className="
        relative flex h-3 w-3
      "
    >
      {/* Outer pulsing ring */}
      <span
        className="
          absolute inline-flex h-full w-full rounded-full bg-emerald-400 
          animate-[pulse_2s_ease-in-out_infinite]
          
        "
      />
      {/* Inner solid circle */}
      <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
    </span>
  );
}
