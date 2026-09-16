import { Link, Navigate, useParams } from "react-router-dom"
import { Section } from "../components/PageHeader"
import { formatPostDate, getPost } from "../data/content"

export function BlogPost() {
  const { slug } = useParams()
  const post = slug ? getPost(slug) : undefined

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  return (
    <article>
      <header className="relative isolate min-h-[42svh] overflow-hidden">
        <img src={post.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-forest/70" />
        <div className="relative mx-auto flex min-h-[42svh] max-w-3xl flex-col justify-end px-4 py-12 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-parchment">
            {formatPostDate(post.date)}
          </p>
          <h1 className="mt-2 font-display text-4xl font-medium text-cream sm:text-5xl">
            {post.title}
          </h1>
        </div>
      </header>
      <Section>
        <div className="mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-soil sm:text-lg">
          {post.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-3xl">
          <Link
            to="/blog"
            className="text-sm font-semibold text-terracotta hover:text-clay"
          >
            Back to the journal
          </Link>
        </div>
      </Section>
    </article>
  )
}
