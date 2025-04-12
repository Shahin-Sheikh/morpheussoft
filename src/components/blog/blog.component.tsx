"use client"; // Required for client-side navigation with Link
import Link from "next/link";

// Mock blog data (replace with API or database in a real app)
const blogPosts = [
  { id: "1", title: "Blog Post 1" },
  { id: "2", title: "Blog Post 2" },
  { id: "3", title: "Blog Post 3" },
  { id: "4", title: "Blog Post 4" },
  { id: "5", title: "Blog Post 5" },
  { id: "6", title: "Blog Post 6" },
  { id: "7", title: "Blog Post 7" },
  { id: "8", title: "Blog Post 8" },
  { id: "9", title: "Blog Post 9" },
];

export default function Blog() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold">Blog</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id} className="text-lg">
            <Link
              href={`/blog/${post.id}`}
              className="text-blue-600 hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <p>
          This is a simple blog page created using React and Next.js. It serves
          as a placeholder for future blog content. The page is styled using
          Tailwind CSS for a clean and modern look. The font used is Geist,
          which provides a sleek and professional appearance. The layout is
          responsive, ensuring that it looks great on all devices.
        </p>
      </div>
    </div>
  );
}
