import { Book } from '../common/interfaces';
import {AxiosPromise} from "axios";


export default interface IBookServices {

    getAllBooks() : Promise<{data: Book[]}>,

    getBookById(id:string) : AxiosPromise<{data: Book}>




}