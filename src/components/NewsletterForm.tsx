import { useId, useState, type FormEvent } from "react"

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

type NewsletterFormProps = {
  compact?: boolean
}

export function NewsletterForm({ compact = false }: NewsletterFormProps) {
  const formId = useId()
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

  if (compact) {
    return (
      <form onSubmit={onSubmit} noValidate className="space-y-3">
        <label htmlFor={`${formId}-email`} className="block text-sm font-semibold text-forest">
          Email for farm notes
        </label>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
          <div className="min-w-0 flex-1">
            <input
              id={`${formId}-email`}
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              className={fieldClass}
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
          <button
            type="submit"
            className="shrink-0 rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-white hover:bg-clay"
          >
            Sign up
          </button>
        </div>
        {submitted ? (
          <p className="rounded-xl bg-sage/20 px-4 py-3 text-sm text-forest" role="status">
            Thank you. This newsletter signup is a front-end sketch only and was not sent.
          </p>
        ) : null}
      </form>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="space-y-5 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-forest/10 sm:p-8"
    >
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
