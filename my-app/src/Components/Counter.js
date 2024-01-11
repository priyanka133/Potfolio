
import React from 'react'

import { FaRegSmile } from "react-icons/fa";
import { BsAward } from "react-icons/bs";
import { GoProjectRoadmap } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";

import { Col, Container, Row } from 'react-bootstrap';

import CountUp from 'react-countup';



const Counter = () => {
   
    const counters =  [
        {
            id: 1,
            icon: <FaRegSmile color="#eeafca"/>,
            title: <span><strong>Happy Clients</strong> consequuntur voluptas nostrum aliquid ipsam architecto ut."</span>,
            start: 0,
            end: 65
        
            
          },
          {
            id: 2,
            icon: <GoProjectRoadmap   color="#eeafca"/>,
            title: <span><strong>Projects </strong> adipisci atque cum quia aspernatur totam laudantium et quia dere tan"</span>,
            start: 0,
            end: 85
        
          },
          {
            id: 3,
            icon: <MdOutlineWatchLater color="#eeafca"/>,
            title: <span><strong>Years of experience </strong> aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel"</span>,
            start: 0,
            end: 12
        
          },
          {
            id: 4,
            icon: <BsAward   color="#eeafca"/>,
            title: <span><strong>Awards</strong>  rerum asperiores dolor alias quo reprehenderit eum et nemo pad der"</span>,
            start: 0,
            end: 15
        
          },
        
    ]
    
   return(
  <div className='Services'>
           
            <Container>
            <Row >
                    {
                      counters.map((a) => {
                        return (
                          <>
                            <Col className="row col-lg-6 ">
                              <div className="col-md-2">
                                <h1>{a.icon}</h1>
                              </div>
                              <div className="col-8">
                                <h1>
                                  <CountUp
                                    start={a.start}
                                    end={a.end}
                                    duration={1}>ok</CountUp>
                                </h1>
                                <p>{a.title}</p>

                              </div>
                            </Col>
                          </>
                        )
                      })
    
                    }
                  </Row>

            </Container>
</div>
       ) } 
export default Counter;






