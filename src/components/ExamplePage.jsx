/**
 * Reusable page shell for every example: title, explanation, "why it matters",
 * the interactive demo, the important code, and the expected result.
 * Every example page reuses this instead of repeating the same JSX.
 */
const ExamplePage = ({ title, explanation, why, code, expected, children }) => (
  <article className="space-y-6">
    <header className="space-y-2">
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h1>
      <p className="text-sm text-muted-foreground">{explanation}</p>
    </header>

    <section className="rounded-lg border border-border bg-accent/40 p-4">
      <h2 className="text-sm font-semibold uppercase tracking-wide text-accent-foreground">Why it is useful</h2>
      <p className="mt-1 text-sm text-foreground/80">{why}</p>
    </section>

    <section className="rounded-lg border border-border bg-card p-4 shadow-sm">
      <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">Live example</h2>
      {children}
    </section>

    {code && (
      <section>
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Important code
        </h2>
        <pre className="code-block">{code.trim()}</pre>
      </section>
    )}

    {expected && (
      <section className="rounded-lg border border-border border-l-4 border-l-primary bg-secondary/60 p-4">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Expected result</h2>
        <p className="mt-1 text-sm text-foreground/80">{expected}</p>
      </section>
    )}
  </article>
);

export default ExamplePage;
