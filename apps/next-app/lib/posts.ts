import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData(locale: string) {
  const localePostsDirectory = path.join(postsDirectory, locale);
  const fileNames = fs.readdirSync(localePostsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(localePostsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as { date: string; title: string; author: string }),
    };
  });

  return allPostsData;
}

export function getAllPostSlugs(locales: string[]) {
  let slugs: { params: { slug: string }; locale: string }[] = [];

  locales.forEach((locale) => {
    const localePostsDirectory = path.join(postsDirectory, locale);
    const fileNames = fs.readdirSync(localePostsDirectory);

    const localeSlugs = fileNames.map((fileName) => {
      return {
        params: {
          slug: fileName.replace(/\.md$/, ""),
        },
        locale: locale,
      };
    });

    slugs = [...slugs, ...localeSlugs];
  });

  return slugs;
}

export async function getPostData(slug: string, locale: string) {
  const fullPath = path.join(postsDirectory, locale, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...(matterResult.data as { date: string; title: string; author: string }),
  };
}
