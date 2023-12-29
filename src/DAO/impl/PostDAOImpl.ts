import PostDAO from '../PostDAO'
import { Post, PrismaClient } from "@prisma/client";
export default class PostDAOImpl implements PostDAO {
    constructor(private db: PrismaClient = new PrismaClient() ){}
    async getAllPosts(): Promise<Post[]> {
        return this.db.post.findMany()
    }
    async createPost(username: string, content: string): Promise<Post> {
        const post = await this.db.post.create({
            data: {
                username: username,
                content: content,
                likes: 0,
            },
        })
        return post
    }
}

export const PostDAOImplSingleton = new PostDAOImpl()
