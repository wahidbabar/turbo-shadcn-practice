import BodyComponent from "@/components/body";
import { GetStaticProps } from "next";
import { getSortedPostsData } from "../../lib/posts";

interface HomeProps {
  allPostsData: {
    date: string;
    title: string;
    author: string;
    slug: string;
  }[];
}

export default function Home({ allPostsData }: HomeProps) {
  return (
    <>
      <BodyComponent allPostsData={allPostsData} />
    </>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async ({ locale }) => {
  console.log("locale", locale);
  const allPostsData = getSortedPostsData(locale || "en");
  return {
    props: {
      allPostsData,
    },
  };
};
