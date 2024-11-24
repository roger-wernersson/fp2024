import { any } from "zod"

type Database = {}
type Customer  = {
    address: string
}

// DB Layer

const getCustomer = (db: Database) => (id: string) => {
    return db.findOne(Customer, id)
}

const saveCustomer = (db: Database) => (customer: Customer) => {
    return db.save(customer)
}

type GetCustomer = (id: string) => Customer
type SaveCustomer = (customer: Customer) => void

// Workflow Layer
const setCustomerAddress = (getCustomer: GetCustomer) => (saveCustomer: SaveCustomer) => (id: string) => (address: string) => {
    const customer = getCustomer(id)
    const updatedCustomer = updateAddress(customer, address)
    saveCustomer(updatedCustomer)
}


// Controller

type CompositionRoot = ReturnType<typeof composeSystem>

function setupController(root: CompositionRoot) {
    const api:any = {}

    api.POST('/customer/:id/address', (req) => {
        root.setCustomerAddressWithDb(req.params.id)(req.req.address)
    })    
}



function composeSystem() {
    const db: any = {} // Connect DB



    const customerFunctions = {
        setCustomerAddressWithDb: setCustomerAddress(getCustomer(db))(saveCustomer(db))
    }

    return customerFunctions
}

const add = (a: number,b: number) => a + b
const three = add(1,2)
const addCurried = (a: number) => (b: number) => a + b
addCurried(1)
const threeC = addCurried(1)(2)

function updateAddress(customer: Customer, address: string) {
    return {
        ...customer,
        address,
    }
}

