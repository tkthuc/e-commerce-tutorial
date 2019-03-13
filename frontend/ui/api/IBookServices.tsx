import { Book } from '../common/interfaces';


export default interface IBookServices {

    getAllBooks() : Promise<{data: Book[]}>,

    getBookById(id:string) : Promise<{data: Book}>




}