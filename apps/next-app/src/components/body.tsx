import { Card } from "@repo/ui/components/ui/card";
import Link from "next/link";
import { useRouter } from "next/router";
import SEO from "./seo";

const BodyComponent = ({ allPostsData }: any) => {
  const router = useRouter();

  return (
    <>
      <SEO
        title="Welcome to our blog"
        description="Your blog description"
        canonical={`https://yourblog.com/${router.locale}`}
        locale={router.locale || "en"}
      />
      <h1>Welcome to our blog</h1>
      <ul className="space-y-4">
        {allPostsData?.map(({ slug, date, title, author }: any) => (
          <li key={slug}>
            <Card className="p-4 border rounded-lg shadow-md">
              <Link legacyBehavior href={`/posts/${slug}`}>
                <a className="block font-semibold text-blue-500 hover:underline">
                  {title}
                </a>
              </Link>
              <p className="text-gray-500 mt-2">{date}</p>
              <p className="text-gray-500">{author}</p>
            </Card>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BodyComponent;
