import Breadcrumb from "../components/Breadcrumb";
import fallbackImage from "../assets/blogs/fallback.jpeg";
import { blogs, mediumProfileUrl } from "../data/blogs";
import "./BlogsPage.css";
import "./PageLayout.css";

function BlogsPage() {
  return (
    <>
      <Breadcrumb
        items={[
          { label: "Home", to: "/" },
          { label: "Blogs" },
        ]}
      />

      <header className="cp-page-intro">
        <div>
          <h1 className="cp-heading">
            Writing about software, machine learning and the way technology
            shapes our attention.
          </h1>
        </div>

        <div>
          <p className="cp-body">
            Selected writing from the original portfolio archive, linked to the
            published posts on Medium.
          </p>
          <a
            className="cp-mono cp-page-external-link"
            href={mediumProfileUrl}
            target="_blank"
            rel="noreferrer"
          >
            Medium profile ↗
          </a>
        </div>
      </header>

      <section className="cp-blog-list" aria-label="Published blogs">
        {blogs.map((blog) => (
          <a
            className="cp-blog-row"
            key={blog.url}
            href={blog.url}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="cp-blog-image"
              src={blog.image}
              alt={blog.imageAlt}
              loading="lazy"
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src = fallbackImage;
              }}
            />

            <div>
              <time className="cp-mono" dateTime={blog.date}>
                {blog.date}
              </time>
              <h2>{blog.title}</h2>
              {blog.description && <p>{blog.description}</p>}
            </div>

            <span className="cp-index-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        ))}
      </section>
    </>
  );
}

export default BlogsPage;
