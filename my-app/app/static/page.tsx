import React from 'react'

export default function Static(){
    return (
        <div>This will generate a static page</div>
    )
}
export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://localhost:3000/api/blogs')
    const posts = await res.json()
   
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
  }