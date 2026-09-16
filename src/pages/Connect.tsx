import { useId, useState, type FormEvent } from "react"
import { PageHeader, Section } from "../components/PageHeader"

const formTypes = [
  { value: "contact", label: "Contact us" },
  { value: "volunteer", label: "Volunteer" },
  { value: "events", label: "Events" },
  { value: "donations", label: "Donations" },
] as const

type FormKind = (typeof formTypes)[number]["value"]

type FormState = {
  kind: FormKind
  name: string
  email: string
  message: string
  availability: string
  interests: string
  eventInterest: string
  guests: string
  giftType: "money" | "supplies"
  notes: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const initialState: FormState = {
  kind: "contact",
  name: "",
  email: "",
  message: "",
  availability: "",
  interests: "",
  eventInterest: "",
  guests: "",
  giftType: "money",
  notes: "",
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function validate(state: FormState): FormErrors {
  const errors: FormErrors = {}

  if (!state.name.trim()) errors.name = "Please enter your name."
  if (!state.email.trim()) errors.email = "Please enter your email."
  else if (!isEmail(state.email)) errors.email = "Please enter a valid email."

  if (state.kind === "contact" && !state.message.trim()) {
    errors.message = "Please include a message."
  }
  if (state.kind === "volunteer") {
    if (!state.availability.trim()) errors.availability = "Please share your availability."
    if (!state.interests.trim()) errors.interests = "Please tell us how you would like to help."
  }
  if (state.kind === "events") {
    if (!state.eventInterest.trim()) errors.eventInterest = "Please tell us which event interests you."
    if (!state.guests.trim()) errors.guests = "Please enter a guest count."
  }
  if (state.kind === "donations" && !state.notes.trim()) {
    errors.notes = "Please add a short note about your gift."
  }

  return errors
}

export function Connect() {
  const formId = useId()
  const [state, setState] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submittedKind, setSubmittedKind] = useState<FormKind | null>(null)

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setState((current) => ({ ...current, [key]: value }))
    setErrors((current) => ({ ...current, [key]: undefined }))
    setSubmittedKind(null)
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate(state)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    setSubmittedKind(state.kind)
  }

  const selectedLabel = formTypes.find((item) => item.value === state.kind)?.label

  return (
    <>
      <PageHeader
        kicker="Write to us"
        title="Connect"
        lede="Choose a form below. This is a front-end skeleton: nothing is sent to a server yet."
      />
      <Section>
        <div className="mx-auto max-w-2xl">
        <form
          onSubmit={onSubmit}
          noValidate
          className="space-y-5 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-forest/10 sm:p-8"
        >
          <div>
            <label htmlFor={`${formId}-kind`} className="block text-sm font-semibold text-forest">
              Which form do you need?
            </label>
            <select
              id={`${formId}-kind`}
              className="mt-2 w-full rounded-xl border border-forest/20 bg-cream px-3 py-2.5 text-ink focus:border-moss focus:outline-none focus:ring-2 focus:ring-sage/60"
              value={state.kind}
              onChange={(event) => update("kind", event.target.value as FormKind)}
            >
              {formTypes.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>

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

          {state.kind === "contact" ? (
            <Field
              id={`${formId}-message`}
              label="Message"
              value={state.message}
              error={errors.message}
              onChange={(value) => update("message", value)}
              multiline
            />
          ) : null}

          {state.kind === "volunteer" ? (
            <>
              <Field
                id={`${formId}-availability`}
                label="Availability"
                value={state.availability}
                error={errors.availability}
                onChange={(value) => update("availability", value)}
                placeholder="Saturday mornings, weekday evenings…"
              />
              <Field
                id={`${formId}-interests`}
                label="Interests"
                value={state.interests}
                error={errors.interests}
                onChange={(value) => update("interests", value)}
                placeholder="Animal care, gardens, events…"
                multiline
              />
            </>
          ) : null}

          {state.kind === "events" ? (
            <>
              <Field
                id={`${formId}-event`}
                label="Event interest"
                value={state.eventInterest}
                error={errors.eventInterest}
                onChange={(value) => update("eventInterest", value)}
                placeholder="Harvest day, school visit, private tour…"
              />
              <Field
                id={`${formId}-guests`}
                label="Guest count"
                type="number"
                value={state.guests}
                error={errors.guests}
                onChange={(value) => update("guests", value)}
              />
            </>
          ) : null}

          {state.kind === "donations" ? (
            <>
              <fieldset>
                <legend className="block text-sm font-semibold text-forest">Gift type</legend>
                <div className="mt-2 flex flex-wrap gap-3">
                  {(
                    [
                      ["money", "Monetary"],
                      ["supplies", "Supplies / in-kind"],
                    ] as const
                  ).map(([value, label]) => (
                    <label
                      key={value}
                      className="inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-sm ring-1 ring-forest/15"
                    >
                      <input
                        type="radio"
                        name="giftType"
                        value={value}
                        checked={state.giftType === value}
                        onChange={() => update("giftType", value)}
                      />
                      {label}
                    </label>
                  ))}
                </div>
              </fieldset>
              <Field
                id={`${formId}-notes`}
                label="Notes"
                value={state.notes}
                error={errors.notes}
                onChange={(value) => update("notes", value)}
                placeholder="Amount range, supplies list, or dedication…"
                multiline
              />
            </>
          ) : null}

          {submittedKind ? (
            <p
              className="rounded-xl bg-sage/20 px-4 py-3 text-sm text-forest"
              role="status"
            >
              Thank you. Your {selectedLabel?.toLowerCase()} form is a skeleton only
              and was not sent. Replace this page with a form service when you are
              ready.
            </p>
          ) : null}

          <button
            type="submit"
            className="w-full rounded-full bg-terracotta px-5 py-3 text-sm font-semibold text-white hover:bg-clay sm:w-auto"
          >
            Submit {selectedLabel?.toLowerCase()}
          </button>
        </form>
        </div>
      </Section>
    </>
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
