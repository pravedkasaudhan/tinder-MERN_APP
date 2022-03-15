import React, { useState,useEffect } from 'react';
import './TinderCards.css';
import TinderCard from 'react-tinder-card';
import axios from '../axios';


function TinderCards() {
    const [people, setPeople] = useState([
        // {
        //     name: "Elon Musk",
        //     url: 'https://media.gettyimages.com/photos/of-tesla-and-space-x-elon-musk-attends-the-2015-vanity-fair-oscar-picture-id464172224?s=594x594'
        // },
        // {
        //     name: "Jeff Beroz",
        //     url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRze-h2FzjX3-dTT01Mp4Yx_bqzB2wrAd4Tcw&usqp=CAU'
        // }

    ]);
    useEffect(()=>{
        async function fetchData(){
            const req =await axios.get('/tinder/card');

            setPeople(req.data);
        }
        fetchData();
    },[])
    console.warn(people);

    const Swiped=(direction,name)=>{
        console.log("removing : "+name);
    };
    const outOfFrame=(name)=>{
        console.log(name+" left the screen!");
    }
    return (
        <div className="tinderCards">
            <div className="tinderCards_cardContainer">

                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up","down"]}
                        onSwipe={(dir)=>Swiped(dir,person.name)}
                        onCardLeftScreen={()=>outOfFrame(person.name)}
                    >
                        <div style={{backgroundImage:`url(${person.imgUrl})`}}
                             className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
