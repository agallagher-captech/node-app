import { Post } from '../../models/Post';
import PostDAO from '../PostDAO'
import { PrismaClient } from "@prisma/client";
export default class PostDAOImpl implements PostDAO {
    constructor(private db: PrismaClient = new PrismaClient() ){}
    async getAllPosts(): Promise<Post[]> {
        return this.db.post.findMany()
    }
}

export const PostDAOImplSingleton = new PostDAOImpl()
