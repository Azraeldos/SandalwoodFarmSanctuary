import { useId, useState, type FormEvent } from "react"
import { contactTopics } from "../data/content"

type Topic = (typeof contactTopics)[number]["value"]

type FormState = {
  topic: Topic
  name: string
  email: string
  comments: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const initialState: FormState = {
  topic: "general",
  name: "",
  email: "",
  comments: "",
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function validate(state: FormState): FormErrors {
  const errors: FormErrors = {}

  if (!state.name.trim()) errors.name = "Please enter your name."
  if (!state.email.trim()) errors.email = "Please enter your email."
  else if (!isEmail(state.email)) errors.email = "Please enter a valid email."
  if (!state.comments.trim()) errors.comments = "Please add a comment."

  return errors
}

export function ContactForm() {
  const formId = useId()
  const [state, setState] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setState((current) => ({ ...current, [key]: value }))
    setErrors((current) => ({ ...current, [key]: undefined }))
    setSubmitted(false)
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate(state)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    setSubmitted(true)
  }

  const selectedLabel = contactTopics.find((item) => item.value === state.topic)?.label

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="space-y-5 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-forest/10 sm:p-8"
    >
      <div>
        <label htmlFor={`${formId}-topic`} className="block text-sm font-semibold text-forest">
          What can we help with?
        </label>
        <select
          id={`${formId}-topic`}
          className="mt-2 w-full rounded-xl border border-forest/20 bg-cream px-3 py-2.5 text-ink focus:border-moss focus:outline-none focus:ring-2 focus:ring-sage/60"
          value={state.topic}
          onChange={(event) => update("topic", event.target.value as Topic)}
        >
          {contactTopics.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id={`${formId}-name`}
          label="Name"
          value={state.name}
          error={errors.name}
          onChange={(value) => update("name", value)}
          autoComplete="name"
        />
        <Field
          id={`${formId}-email`}
          label="Email"
          type="email"
          value={state.email}
          error={errors.email}
          onChange={(value) => update("email", value)}
          autoComplete="email"
        />
      </div>
      <Field
        id={`${formId}-comments`}
        label="Comments"
        value={state.comments}
        error={errors.comments}
        onChange={(value) => update("comments", value)}
        placeholder="Tell us a little about your question, gift, event, or reservation…"
        multiline
      />

      {submitted ? (
        <p className="rounded-xl bg-sage/20 px-4 py-3 text-sm text-forest" role="status">
          Thank you. Your {selectedLabel?.toLowerCase()} note is a front-end sketch only
          and was not sent. Replace this form with a service when you are ready.
        </p>
      ) : null}

      <button
        type="submit"
        className="w-full rounded-full bg-terracotta px-5 py-3 text-sm font-semibold text-white hover:bg-clay sm:w-auto"
      >
        Send message
      </button>
    </form>
  )
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  multiline = false,
  placeholder,
  autoComplete,
}: {
  id: string
  label: string
  value: string
  onChange: (value: string) => void
  error?: string
  type?: string
  multiline?: boolean
  placeholder?: string
  autoComplete?: string
}) {
  const describedBy = error ? `${id}-error` : undefined
  const fieldClass =
    "mt-2 w-full rounded-xl border bg-cream px-3 py-2.5 text-ink focus:outline-none focus:ring-2 focus:ring-sage/60 " +
    (error ? "border-terracotta focus:border-terracotta" : "border-forest/20 focus:border-moss")

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-forest">
        {label}
      </label>
      {multiline ? (
        <textarea
          id={id}
          rows={5}
          className={fieldClass}
          value={value}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          onChange={(event) => onChange(event.target.value)}
        />
      ) : (
        <input
          id={id}
          type={type}
          className={fieldClass}
          value={value}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          onChange={(event) => onChange(event.target.value)}
        />
      )}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-terracotta" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}
