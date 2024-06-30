import SEO from "@/components/seo";
import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import { getAllPostSlugs, getPostData } from "../../../lib/posts";
import { Card } from "@repo/ui/components/ui/card";

interface PostPageProps {
  postData: {
    title: string;
    date: string;
    author: string;
    contentHtml: string;
    slug: string;
  };
}

export default function PostPage({ postData }: PostPageProps) {
  const router = useRouter();

  return (
    <>
      <SEO
        title={postData.title}
        description={postData.contentHtml
          .substring(0, 160)
          .replace(/<[^>]*>?/gm, "")}
        canonical={`https://yourblog.com/${router.locale}/${postData.slug}`}
        locale={router.locale || "en"}
      />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4">{postData.title}</h1>
          <div className="flex items-center mb-4">
            <p className="text-gray-500 mr-4">{postData.date}</p>
            <p className="text-gray-500">{postData.author}</p>
          </div>
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </Card>
      </article>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const paths = getAllPostSlugs(locales || ["en"]);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostPageProps> = async ({
  params,
  locale,
}) => {
  const postData = await getPostData(params?.slug as string, locale || "en");
  return {
    props: {
      postData,
    },
  };
};
