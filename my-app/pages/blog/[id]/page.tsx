import { useRouter } from 'next/router';
import { getAllBlogIds, getBlogData } from '../../lib/blog';

export default function BlogPost({ blogData }) {
  const router = useRouter();
  
  // If the page is not yet generated, this will be displayed initially
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <article>
      <h1>{blogData.title}</h1>
      <p>{blogData.date}</p>
      <div dangerouslySetInnerHTML={{ __html: blogData.contentHtml }} />
    </article>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllBlogIds();
  return {
    paths,
    fallback: true, // See the "fallback" section below
  };
}

// This function gets called at build time
export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const blogData = await getBlogData(params.id);
  return {
    props: {
      blogData,
    },
  };
}
