interface BlogIdProps {
    params:Promise<{blogId:string}>;
}

const BlogIdPage =async ({params}:BlogIdProps) => {

    const {blogId} = await params;

  return (
    <div>
        <h1>Hello from the blog id page</h1>
        <p>Blog id: {blogId}</p>
    </div>
  )
}

export default BlogIdPage