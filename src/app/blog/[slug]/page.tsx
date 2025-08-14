import { Container } from "@/components/container";
import { Metadata } from "next";
import { getBlogFrontMatterBySlug, getSingleBlog } from "@/utils/mdx";
import { redirect } from "next/navigation";
import { Scales } from "@/components/scales";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const data = await params;
  const frontmatter = await getBlogFrontMatterBySlug(data.slug);

  if (!frontmatter) {
    return {
      title: "Blog not found",
    };
  }

  return {
    title: frontmatter.title + " by Manu Arora",
    description: frontmatter.description,
  };
}

export default async function SingleBlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const data = await params;
  const blog = await getSingleBlog(data.slug);

  if (!blog) {
    redirect("/blog");
  }

  const { content, frontmatter } = blog;

  console.log(frontmatter);

  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-8 md:pt-20 md:pb-10">
        <Scales />
        <img
          src={frontmatter.image}
          alt={frontmatter.title}
          className="rouned-full mx-auto mb-20 max-h-96 w-full max-w-2xl rounded-2xl object-cover shadow-xl"
        />
        <div className="prose prose-sm dark:prose-invert mx-auto">
          {content}
        </div>
      </Container>
    </div>
  );
}
