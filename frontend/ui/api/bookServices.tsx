import * as React from 'react';
import axios from 'axios';

import { Book } from '../common/interfaces';
import IBookServices from './IBookServices';




export const BookServices : IBookServices  ={

    getAllBooks() {
        return axios.get("/products") as any;
    },

    getBookById(id:string)  {
        return axios.get(`/products/${id}`) as any;
    }




}