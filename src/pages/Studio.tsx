import StudioCanvas from "../components/studio/StudioCanvas";
import StudioSidebar from "../components/studio/StudioSidebar";

function Studio() {
  return (
    <main className="min-h-screen bg-[#F8F5EE]">
      <div className="mx-auto max-w-[1440px] px-8 py-16 lg:px-16">

        <p className="text-sm uppercase tracking-[0.35em] text-[#F45A2A]">
          AI DESIGN STUDIO
        </p>

        <h1 className="mt-4 text-6xl font-black">
          Design your perfect furniture.
        </h1>

        <div className="mt-16 grid gap-12 lg:grid-cols-[380px_1fr]">

          <StudioSidebar />

          <StudioCanvas />

        </div>

      </div>
    </main>
  );
}

export default Studio;