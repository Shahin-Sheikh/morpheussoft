import Link from "next/link";
import { notFound } from "next/navigation";

// Mock blog data (replace with API or database in a real app)
const blogPosts = [
  {
    id: "1",
    title: "Blog Post 1",
    content:
      "This is the content for Blog Post 1. Lorem ipsum dolor sit amet...",
  },
  {
    id: "2",
    title: "Blog Post 2",
    content:
      "This is the content for Blog Post 2. Consectetur adipiscing elit...",
  },
  {
    id: "3",
    title: "Blog Post 3",
    content: "This is the content for Blog Post 3. Sed do eiusmod tempor...",
  },
  {
    id: "4",
    title: "Blog Post 4",
    content: "This is the content for Blog Post 4. Ut enim ad minim veniam...",
  },
  {
    id: "5",
    title: "Blog Post 5",
    content:
      "This is the content for Blog Post 5. Quis nostrud exercitation...",
  },
  {
    id: "6",
    title: "Blog Post 6",
    content: "This is the content for Blog Post 6. Ullamco laboris nisi...",
  },
  {
    id: "7",
    title: "Blog Post 7",
    content: "This is the content for Blog Post 7. Duis aute irure dolor...",
  },
  {
    id: "8",
    title: "Blog Post 8",
    content: "This is the content for Blog Post 8. Excepteur sint occaecat...",
  },
  {
    id: "9",
    title: "Blog Post 9",
    content: "This is the content for Blog Post 9. Cupidatat non proident...",
  },
];

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    notFound(); // Show 404 page if post is not found
  }

  return (
    <div className="flex flex-col gap-4 items-center justify-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <div>
        <p>{post.content}</p>
      </div>
      <Link href="/blog" className="text-blue-600 hover:underline">
        Back to Blog
      </Link>
    </div>
  );
}
