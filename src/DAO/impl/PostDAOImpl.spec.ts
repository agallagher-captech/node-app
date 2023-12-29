// import { PrismaClient } from '@prisma/client'
import { Post } from '@prisma/client'
import PostDAOImpl from './PostDAOImpl'
import { MockContext, createMockContext } from './context'

let mockCtx: MockContext

// define mocks
const mockPost1: Post = {
    "postID": 1,
    "username": "admin",
    "content": "mock post 1",
    "likes": 0
}
const mockPost2: Post = {
    "postID": 2,
    "username": "admin",
    "content": "mock post 2",
    "likes": 0
}
const mockCreatedPost: Post = {
    "postID": 3,
    "username": "admin",
    "content": "mock created post",
    "likes": 0
}
const mockUpdatedPost1: Post = {
    "postID": 1,
    "username": "admin",
    "content": "UPDATE UPDATE UPDATE",
    "likes": 0
}
const mockPosts: Post[] = [mockPost1, mockPost2]

beforeEach(() => {
    mockCtx = createMockContext()
  })

describe("test all post functions", () => {

    it("gets all posts", async () => {
        // Arrange
        mockCtx.prisma.post.findMany.mockResolvedValue(mockPosts)
        const dao = new PostDAOImpl(mockCtx.prisma)

        // Act
        const result = await dao.getAllPosts()

        // Assert
        expect(result).toEqual(mockPosts)
        expect(mockCtx.prisma.post.findMany).toHaveBeenCalledTimes(1)
        expect(mockCtx.prisma.post.findMany).toHaveBeenCalledWith()
    })

    it("creates a post", async () => {
        // Arrange
        mockCtx.prisma.post.create.mockResolvedValue(mockCreatedPost)
        const dao = new PostDAOImpl(mockCtx.prisma)
        const createData = {
            data: {
                username: "admin",
                content: "mock created post",
                likes: 0,
            }
         }

        // Act
        const result = await dao.createPost("admin", "mock created post")

        // Assert
        expect(result).toEqual(mockCreatedPost)
        expect(mockCtx.prisma.post.create).toHaveBeenCalledTimes(1)
        expect(mockCtx.prisma.post.create).toHaveBeenCalledWith(createData)
    })

    it("gets a post by id", async () => {
        // Arrange
        mockCtx.prisma.post.findUnique.mockResolvedValue(mockPost1)
        const dao = new PostDAOImpl(mockCtx.prisma)
        const findByIDData = {
            where: {
                postID: 1,
            }
        }

        // Act
        const result = await dao.getPostByID(1)

        // Assert
        expect(result).toEqual(mockPost1)
        expect(mockCtx.prisma.post.findUnique).toHaveBeenCalledTimes(1)
        expect(mockCtx.prisma.post.findUnique).toHaveBeenCalledWith(findByIDData)
    })

    it("updates a post", async () => {
        // Arrange
        mockCtx.prisma.post.update.mockResolvedValue(mockUpdatedPost1)
        const dao = new PostDAOImpl(mockCtx.prisma)
        const updateData = {
            where: {
                postID: mockUpdatedPost1.postID,
            },
            data: {
                username: mockUpdatedPost1.username,
                content: mockUpdatedPost1.content
            }
        }

        // Act
        const result = await dao.updatePostByID(mockUpdatedPost1.postID, mockUpdatedPost1.username, mockUpdatedPost1.content)

        // Assert
        expect(result).toEqual(mockUpdatedPost1)
        expect(mockCtx.prisma.post.update).toHaveBeenCalledTimes(1)
        expect(mockCtx.prisma.post.update).toHaveBeenCalledWith(updateData)
    })

    it("deletes a post by id", async () => {
        // Arrange
        mockCtx.prisma.post.delete.mockResolvedValue(mockPost1)
        const dao = new PostDAOImpl(mockCtx.prisma)
        const deleteData = {
            where: {
                postID: mockPost1.postID,
            }
        }

        // Act
        const result = await dao.deletePostByID(mockPost1.postID)

        // Assert
        expect(result).toEqual(mockPost1)
        expect(mockCtx.prisma.post.delete).toHaveBeenCalledTimes(1)
        expect(mockCtx.prisma.post.delete).toHaveBeenCalledWith(deleteData)
    })

})
