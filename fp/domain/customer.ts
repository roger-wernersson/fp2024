import { number, z } from 'zod'
const isA = z

const validateCustomerId = (id: number) => id > 20 && id < 1000

export const CustomerId = isA.number().int().refine(validateCustomerId).brand('CustomerId')
export type CustomerId = z.infer<typeof CustomerId>
export const CustomerName = isA.string().brand('CustomerName')
export type CustomerName = z.infer<typeof CustomerName>

const Customer = isA.object({
    name: CustomerName,
    id: CustomerId
})
export type Customer = z.infer<typeof Customer>

type Input = {
    name: string
    id: number
    category: string
}


export function createCustomer(input: Input): Customer {
    return {
        name: CustomerName.parse(input.name),
        id: CustomerId.parse(input.id)
    }
}
