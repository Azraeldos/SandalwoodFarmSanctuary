import { Link } from "react-router-dom"
import { PageHeader, Section } from "../components/PageHeader"
import { formatPostDate, posts } from "../data/content"

export function Blog() {
  return (
    <>
      <PageHeader
        kicker="Journal"
        title="Blog"
        lede="A place for farm notes, rescue stories, and event recaps. These three posts are placeholders."
      />
      <Section>
        <div className="grid gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-forest/10 md:grid md:grid-cols-[280px_1fr]"
            >
              <img
                src={post.image}
                alt=""
                className="h-52 w-full object-cover md:h-full"
              />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-moss">
                  {formatPostDate(post.date)}
                </p>
                <h2 className="mt-2 font-display text-2xl text-forest">
                  <Link to={`/blog/${post.slug}`} className="hover:text-moss">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-soil">{post.excerpt}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="mt-4 inline-flex text-sm font-semibold text-terracotta hover:text-clay"
                >
                  Read post
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  )
}
