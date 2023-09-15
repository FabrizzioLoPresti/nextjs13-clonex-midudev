import { type Post } from '@/types/types'
import PostCard from './post-card'

interface Props {
  posts: Post[]
}

const PostList = ({ posts }: Props) => {
  return (
    <>
      {posts?.map((post: Post) => (
          <PostCard key={post.id} post={post} />
      ))}
    </>
  )
}

export default PostList
