import React from 'react';
import card1 from '../src/image/card1_ambulance.jpg';
import Card from './Card';
import Sdata from './Sdata';

export default function Service() {
    return (
        <>
        <div className="my-5">
            <h1 className="text-center">Our Services</h1>
        </div>
        
        <div className="container">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row  gy-3">
                    {
                        Sdata.map((val,ind)=>{
                          return  <Card key={ind} cardimg={val.imgrc} title={val.title}/>
                        })
                    }
                   
                   

                     

                    </div>

                </div>

            </div>
        </div>

                  
        </>
    )
}
