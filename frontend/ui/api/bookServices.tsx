import * as React from 'react';
import axios, {AxiosPromise} from 'axios';

import { Book } from '../common/interfaces';
import IBookServices from './IBookServices';


//TODO: integrate with backend

export const BookServices : IBookServices  ={

    getAllBooks() {
        return axios.get("/products") as any;
    },

    getBookById(id:string)  {
        const token = localStorage.getItem('token');

        return axios.get(
            `/products/${id}`,
            { headers: {"Authorization" : `Bearer ${token}`} }
        ) as AxiosPromise;
    }




}