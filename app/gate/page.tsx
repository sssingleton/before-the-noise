"use client";

import { useState, FormEvent } from "react";

export default function Gate() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: value }),
    });

    if (res.ok) {
      window.location.href = "/";
    } else {
      setError(true);
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6">
      <div className="max-w-sm w-full space-y-8 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl text-foreground tracking-tight">
          Before The Noise
        </h1>
        <p className="text-muted text-xs tracking-[0.3em] uppercase">
          Cake Records
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <input
            type="password"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Password"
            autoFocus
            className="w-full bg-transparent border border-muted/40 rounded px-4 py-3 text-foreground text-sm placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
          />
          {error && (
            <p className="text-accent text-xs tracking-wide">
              Incorrect password.
            </p>
          )}
          <button
            type="submit"
            disabled={loading || !value}
            className="w-full py-3 text-xs tracking-[0.3em] uppercase text-background bg-accent hover:bg-accent/90 transition-colors rounded disabled:opacity-40"
          >
            {loading ? "..." : "Enter"}
          </button>
        </form>
      </div>
    </div>
  );
}
