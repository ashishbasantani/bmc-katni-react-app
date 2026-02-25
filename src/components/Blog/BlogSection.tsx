import { BLOGS } from "../../data/blogs";

const BlogSection = () => {
  return (
    <section className="bg-white">
      <div className="container-page section-padding">

        {/* Header (Same formatting as Services) */}
        <div className="text-left mb-[var(--spacing-2xl)]">
          <p className="text-sm font-semibold tracking-widest text-[var(--primary-purple)] mb-2">
            LATEST NEWS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)]">
            Our Latest News & Blogs
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {BLOGS.map((blog) => (
            <div
            key={blog.id}
            className="group bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
            >
            {/* Image */}
            <div className="relative overflow-hidden">
                <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <span className="absolute top-4 left-4 bg-[var(--primary-purple)] text-white text-xs font-semibold px-4 py-1 rounded-full">
                {blog.category}
                </span>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex items-center gap-3 text-gray-500 text-sm mb-3">
                <span>{blog.date}</span>
                <span>•</span>
                <span>{blog.readTime}</span>
                </div>

                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 leading-snug transition-colors duration-300 group-hover:text-[var(--primary-purple)] cursor-pointer">
                {blog.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {blog.description}
                </p>

                <button className="text-[var(--primary-purple)] font-semibold text-sm hover:underline">
                Read More →
                </button>
            </div>
            </div>
        ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;