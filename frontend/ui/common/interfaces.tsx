export interface Book {
    id: number,
    name: string,
    price: number,
    authors: string[],
    description?: string
}