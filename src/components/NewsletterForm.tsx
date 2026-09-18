import { useId, useState, type FormEvent } from "react"

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export function NewsletterForm() {
  const formId = useId()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
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
    setSubmitted(true)
  }

  const emailErrorId = error ? `${formId}-email-error` : undefined
  const fieldClass =
    "w-full rounded-xl border bg-cream px-3 py-2.5 text-ink focus:outline-none focus:ring-2 focus:ring-sage/60 " +
    (error ? "border-terracotta focus:border-terracotta" : "border-forest/20 focus:border-moss")

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="space-y-5 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-forest/10 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor={`${formId}-name`} className="block text-sm font-semibold text-forest">
            Name
          </label>
          <input
            id={`${formId}-name`}
            type="text"
            autoComplete="name"
            className="mt-2 w-full rounded-xl border border-forest/20 bg-cream px-3 py-2.5 text-ink focus:border-moss focus:outline-none focus:ring-2 focus:ring-sage/60"
            value={name}
            onChange={(event) => {
              setName(event.target.value)
              setSubmitted(false)
            }}
          />
        </div>
        <div>
          <label htmlFor={`${formId}-email`} className="block text-sm font-semibold text-forest">
            Email
          </label>
          <input
            id={`${formId}-email`}
            type="email"
            autoComplete="email"
            className={`mt-2 ${fieldClass}`}
            value={email}
            aria-invalid={Boolean(error)}
            aria-describedby={emailErrorId}
            onChange={(event) => {
              setEmail(event.target.value)
              setError("")
              setSubmitted(false)
            }}
          />
          {error ? (
            <p id={emailErrorId} className="mt-1.5 text-sm text-terracotta" role="alert">
              {error}
            </p>
          ) : null}
        </div>
      </div>

      {submitted ? (
        <p className="rounded-xl bg-sage/20 px-4 py-3 text-sm text-forest" role="status">
          Thank you. This newsletter signup is a front-end sketch only and was not sent.
        </p>
      ) : null}

      <button
        type="submit"
        className="w-full rounded-full bg-terracotta px-5 py-3 text-sm font-semibold text-white hover:bg-clay sm:w-auto"
      >
        Sign up
      </button>
    </form>
  )
}
