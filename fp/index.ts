import { z } from 'zod'
const isA = z

function calculatePi() {
    return 3.14
}

function add(a: number, b: number) {
    return a + b
}

const db: any

function getUser(userId: string) {
    return db.findUser(userId)
}

function now() {
    return new Date()
}

class SystemInfo {
    now: Date
}

function getStateNow(system: SystemInfo) {
    const now = system.now
}


type User = {
    name: string
    createdTimestamp: Date
}

function createUser(name: string, now: Date): User {
    return {
        name,
        createdTimestamp: now
    }
}

const ProductId = isA.number().int().brand('ProductId')
type ProductId = isA.infer<typeof ProductId>

type PostNewUserRequestStd = {
    name: string
    age: number
}

const isAn = isA

const Name = isA.string().length(10)
const Age = isA.number().int().positive().min(20).max(99)

const PostNewUserRequest = isAn.object({
    name: Name,
    age: Age,
    myFunc: () => boolean
})
type PostNewUserRequest = isA.infer<typeof PostNewUserRequest>

const express: any = null

express.post('/users', (req) => {
    const input = PostNewUserRequest.parse(req.body)
    createNewUser(input)
})


function createNewUser(req: PostNewUserRequest) {
    // blag
}

const customerId = CustomerId.parse(12)
const productId = ProductId.parse(13)
const ponyo: CustomerId = productId

type Id = CustomerId | ProductId
