import React from 'react';
import NgoList from '../components/NgoList';
import {NgoMain} from '../components/NgoMain';

const Ngo = () => {
    const NGO = [
        {
        id:'u1',
        name:"Dipjyoti Kashyap",
        image:"https://picsum.photos/200" , 
        places: 3
        },
        {
        id:'u2',
        name:"Hema Gohain",
        image:"https://picsum.photos/200" , 
        places: 4
        },
        {
        id:'u3',
        name:"Jivanjyoti",
        image:"https://picsum.photos/200" , 
        places: 4
        },
        {
        id:'u4',
        name:"Chirantan",
        image:"https://picsum.photos/200" , 
        places: 4
        },
              ];
            //   <NgoMain/>
    return (
    <NgoList items={NGO}/>,
    <NgoMain/>
    )
    
};

export default Ngo