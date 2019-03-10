import * as React from 'react';

import IBookServices from './IBookServices';

export const BookServices : IBookServices  ={

    getAllBooks() {
        return Array.from({length: 1000}, (v, k) => k+1).map(
            (val,index) => {
                 return {
                     id: index,
                     name: `Harry Potter ${index}`,
                     quantity: 1,
                     price: 1000,
                     authors: ["JK Rowling"]
                 }
             }
        );
    }

}