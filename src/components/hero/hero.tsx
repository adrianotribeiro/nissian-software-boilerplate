export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center">
      <h1
        style={{
          fontFamily: "Space Grotesk, sans-serif",
          fontWeight: 800,
          fontSize: "clamp(3.8rem, 9vw, 8.5rem)",
        }}
        className="mb-3 tracking-[-0.045em] leading-[0.92] font-extrabold font-fluid text-9xl"
      >
        Nissian
      </h1>
      <span
        className="inline-block text-9xl"
        style={{
          WebkitTextStroke: "2px rgba(255,255,255,0.18)",
          color: "transparent",
        }}
      >
        SOFTWARE
      </span>
      <div>
        <span className="text-9xl text-[#3D5A35]">BOILER</span>
        <span className="text-9xl text-[#D4924A]">PLATE</span>
      </div>
    </section>
  );
}
