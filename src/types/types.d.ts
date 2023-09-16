import { type Database } from './database'

// export interface Post {
//   id: string
//   created_at: string
//   content: string
//   user_id: string
//   user: {
//     name: string
//     user_name: string
//     avatar_url: string
//   }
// }

export type Post = Database['public']['Tables']['posts']['Row'] & {
  user: Database['public']['Tables']['users']['Row']
}
