import React from 'react'
import Title from './Title'
import { BiWorld } from "react-icons/bi";

import Card from 'react-bootstrap/Card';
import { FaDribbble } from "react-icons/fa";
import { Col, Container, Row } from 'react-bootstrap';
import { MdOutlineSpeed } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";

const Services = () => {
    const xyz = [
        {
            icon: <FaDribbble color='#FBFBFB' className="innericon mb-5 fs-2 fw-bolder" />,
            title: "Lorem Ipsum",
            desc: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"
          },
          {
            icon: <IoDocumentTextOutline color='#FBFBFB' className="mb-5 fs-2 fw-bolder" />,
            title: "Sed ut perspiciatis",
            desc: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"
          },
          {
            icon: <MdOutlineSpeed color='#FBFBFB' className="mb-5 fs-2 fw-bolder" />,
            title: "Magni Dolores",
            desc: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"
          },
          {
            icon: <BiWorld color='#FBFBFB' className="mb-5 fs-2 fw-bolder" />,
            title: " Nemo Enim",
            desc: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"
          },
        
 


    ]
 return(
  <div className='Services'>
            <Title titles="Services" desc="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas." />
            <Container>
            <Row>
          {
            xyz.map((a) => {
              return (
                <>
                  <Col lg={3}>
                    <Card className="border border-color-#FBFBFB ">
                      <Card.Body  >
                        <div className="iconser service-icon fs-3   d-grid justify-content-center">{a.icon}</div>
                        <Card.Title className=" d-grid justify-content-center">{a.title}</Card.Title>
                        <Card.Text className=" d-grid justify-content-center text-center ">{a.desc}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              )
            })
          }
        </Row>

            </Container>
            
</div>
  ) }
export default Services;

    




