import { Container } from "@/components/container";
import { getBlogs } from "@/utils/mdx";
import { Metadata } from "next";
import { Link } from "next-view-transitions";
import { Heading } from "@/components/heading";
import { Subheading } from "@/components/subheading";
import { Scales } from "@/components/scales";
import { MotionDiv } from "@/components/motion-div";

export const metadata: Metadata = {
  title: "All blogs | Minimal Portfolio Website Template - Aceternity UI Pro",
  description:
    "A perfect portfolio website template that showcases your skills, minimal and smooth microinteractions, perfect for developers and designers.",
};

export default async function BlogsPage() {
  const allBlogs = await getBlogs();

  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-4 md:px-8 md:pt-20 md:pb-10">
        <Scales />
        <Heading>All blogs</Heading>
        <Subheading>
          I'm a software engineer with a passion for building scalable and
          efficient systems. I'm currently working as a software engineer at
          Google.
        </Subheading>
        <div className="shadow-section-inset dark:shadow-section-inset-dark my-4 flex flex-col gap-8 border-y border-neutral-100 px-4 py-6 dark:border-neutral-800">
          {allBlogs.map((blog, idx) => (
            <MotionDiv
              key={blog.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.05 * idx }}
            >
              <Link key={blog.title} href={`/blog/${blog.slug}`}>
                <div className="flex flex-col justify-between md:flex-row md:items-center">
                  <h2 className="text-primary text-base font-bold tracking-tight">
                    {blog.title}
                  </h2>
                  <p className="text-secondary text-sm md:text-sm">
                    {new Date(blog.date || "").toLocaleDateString("en-us", {
                      weekday: "long",
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <p className="text-secondary max-w-lg pt-2 text-sm md:text-sm">
                  {truncate(blog.description || "", 150)}
                </p>
              </Link>
            </MotionDiv>
          ))}
        </div>
      </Container>
    </div>
  );
}
