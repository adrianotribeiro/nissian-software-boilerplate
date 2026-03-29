import { Hero } from "./components/hero/hero";

function App() {
  return (
    <div
      className="min-h-screen text-white antialiased flex items-center justify-center"
      style={{
        fontFamily: "Inter, sans-serif",
        backgroundColor: "#0D0D0D",
      }}
    >
      <Hero />
    </div>
  );
}

export default App;
