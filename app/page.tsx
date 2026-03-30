export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-sans">
      {/* Hero */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 sm:py-32">
        <div className="max-w-2xl w-full space-y-8 text-center">
          <p className="text-muted text-xs tracking-[0.35em] uppercase">
            Cake Records presents
          </p>

          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl leading-[0.9] tracking-tight text-foreground">
            Before
            <br />
            The Noise
          </h1>

          <p className="text-accent text-sm sm:text-base tracking-[0.2em] uppercase">
            An invitation-only songwriter session series by Cake Records
          </p>

          {/* Decorative rule */}
          <div className="flex justify-center pt-4">
            <div className="w-12 h-px bg-accent/40" />
          </div>
        </div>
      </main>

      {/* Concept */}
      <section className="flex justify-center px-6 pb-24 sm:pb-32">
        <div className="max-w-lg text-center">
          <p className="text-foreground/80 text-base sm:text-lg leading-relaxed font-light">
            Three to four songwriters. Three songs each. Forty-five minutes in a
            space that feels like nowhere else. Fully acoustic — no PA, no
            stage. You hear the song before the world does.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-8 px-6">
        <p className="text-center text-muted text-xs tracking-wide">
          © Cake&nbsp;Records · beforethenoise.thecakerecords.com
        </p>
      </footer>
    </div>
  );
}
