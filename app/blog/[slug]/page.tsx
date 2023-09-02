export const revalidate = 420; //refresh page every 420s

interface Post {
  //shape of each post
  title: string;
  content: string;
  slug: string;
}

interface Props {
  params: { slug: string };
}

export default async function BlogPostPage({ params }: Props) {
  //deduped
  try {
    const response = await fetch("http://localhost:3000/api/content");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const posts: Post[] = await response.json();

    const post = posts.find((post)=>post.slug === params.slug)! // ! means this is not null

    return (
      <div className="flex flex-col p-5 items-center justify-start">
        <h1 className=" text-2xl mb-5">{post.title}</h1>
        <p className=" w-96">{post.content}</p>
      </div>
    );
    // Process the fetched posts here
  } catch (error) {
    console.error("Error fetching data:", error);
    return <h1>Error fetching the post, please try again</h1>;
  }
}
