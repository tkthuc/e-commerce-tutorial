import * as React from 'react';
import {FunctionComponent} from "react";

import './modal.css';

export default function(WrappedComponent : FunctionComponent) : any {
    return (props) => {
       return (
           <div className="modal-bookstore">
               <div className="modal-bookstore-content">
                    <WrappedComponent {...props}></WrappedComponent>
               </div>
            </div>
       )
    }
}