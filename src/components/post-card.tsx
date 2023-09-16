'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button
} from '@nextui-org/react'
import { IconHeartCode, IconMessageCircle, IconRepeat } from '@tabler/icons-react'
import { type Post } from '@/types/types'

interface Props {
  post: Post
}

const PostCard = ({ post }: Props) => {
  const [isFollowed, setIsFollowed] = useState(false)
  const {
    created_at: createdAt,
    content,
    user: { name, user_name: userName, avatar_url: avatarUrl }
  } = post
  return (
    <Card className="w-full bg-transparent shadow-none hover:bg-slate-800 transition-colors ease-in-out duration-300 border-b border-white/20 rounded-none cursor-pointer">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Link href={`/${userName}`}>
            <Avatar radius="full" src={avatarUrl} className='w-10 h-10'/>
          </Link>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {name}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              @{userName}
            </h5>
          </div>
        </div>
        <Button
          className={
            isFollowed
              ? 'bg-transparent text-foreground border-default-200'
              : ''
          }
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? 'bordered' : 'solid'}
          onPress={() => {
            setIsFollowed(!isFollowed)
          }}
        >
          {isFollowed ? 'Unfollow' : 'Follow'}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-xs text-white">
        <p>{content}</p>
        <span className="pt-2">{new Date(createdAt).toLocaleDateString()}</span>
      </CardBody>
      <CardFooter className="gap-3">
        <IconMessageCircle className='h-6 w-6' />
        <IconHeartCode className='h-6 w-6' />
        <IconRepeat className='h-6 w-6' />
      </CardFooter>
    </Card>
  )
}

export default PostCard
