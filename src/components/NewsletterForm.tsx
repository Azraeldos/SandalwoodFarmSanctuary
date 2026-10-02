import { useId, useState, type FormEvent } from "react"

const NEWSLETTER_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbymGGEp2HzEewvTaudj8Myekvx_07mWEbMa7jNa3Yb4db7GwXBPG3rf7AjuVZL1ti30/exec"

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export function NewsletterForm() {
  const formId = useId()
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [pending, setPending] = useState(false)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!email.trim()) {
      setError("Please enter your email.")
      setSubmitted(false)
      return
    }
    if (!isEmail(email)) {
      setError("Please enter a valid email.")
      setSubmitted(false)
      return
    }

    setError("")
    setPending(true)

    try {
      // Apps Script reads e.parameter.email — send form fields, not JSON
      const body = new URLSearchParams({ email: email.trim() })
      const response = await fetch(NEWSLETTER_ENDPOINT, {
        method: "POST",
        body,
      })

      if (!response.ok) {
        throw new Error("Signup failed")
      }

      setSubmitted(true)
      setEmail("")
    } catch {
      setError("Something went wrong. Please try again.")
      setSubmitted(false)
    } finally {
      setPending(false)
    }
  }

  const emailErrorId = error ? `${formId}-email-error` : undefined
  const fieldClass =
    "w-full rounded-xl border bg-cream px-3 py-2.5 font-display text-base tracking-[-0.01em] text-forest focus:outline-none focus:ring-2 focus:ring-sage/60 disabled:opacity-60 " +
    (error ? "border-terracotta focus:border-terracotta" : "border-forest/20 focus:border-moss")

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-3">
      <label htmlFor={`${formId}-email`} className="block font-display text-base font-bold tracking-[-0.01em] text-forest">
        Email for farm notes
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <div className="min-w-0 flex-1">
          <input
            id={`${formId}-email`}
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={fieldClass}
            value={email}
            disabled={pending}
            aria-invalid={Boolean(error)}
            aria-describedby={emailErrorId}
            onChange={(event) => {
              setEmail(event.target.value)
              setError("")
              setSubmitted(false)
            }}
          />
          {error ? (
            <p id={emailErrorId} className="mt-1.5 font-display text-sm tracking-[-0.01em] text-terracotta" role="alert">
              {error}
            </p>
          ) : null}
        </div>
        <button
          type="submit"
          disabled={pending}
          className="shrink-0 rounded-full bg-ochre px-5 py-2.5 font-display text-sm font-bold tracking-[-0.01em] text-forest hover:bg-gold disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? "Signing up…" : "Sign up"}
        </button>
      </div>
      {submitted ? (
        <p className="rounded-xl bg-sage/20 px-4 py-3 font-display text-base tracking-[-0.01em] text-forest" role="status">
          Thank you! — you’re on the list for seasonal farm notes.
        </p>
      ) : null}
    </form>
  )
}
