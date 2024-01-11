import React from 'react'
import { FaRegSmile } from "react-icons/fa";
import { BsAward } from "react-icons/bs";
import { GoProjectRoadmap } from "react-icons/go";
import { MdOutlineWatchLater } from "react-icons/md";
import Title from './Title'
import Counter from './Counter'
export default function About() {
  return (
    <div>
      <section id="about" className="about mt-5">
      <div className="container">

        <div className="row no-gutters">
          <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
          <div className="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch">
            <div className="content d-flex flex-column justify-content-center">
              <h3>Voluptatem dignissimos provident quasi</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
              </p>
             <div>
              <Counter></Counter>
             </div>
            </div>
          </div>
        </div>

      </div>
     <div className='container'>
      <div className='row'>
      <div className="  col-12 skills">
        <Title titles="Skills" desc="Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas." /> 
          </div>
          <div className="col-6">
            <p>HTML
              <div class="progress">
                <div className="progress-bar"   role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
              </div>
            </p>
          </div>

          <div className="col-6">
            <p>PHP
              <div class="progress">
                <div className="progress-bar" role="progressbar" style={{ width: "35%" }} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">35%</div>
              </div>
            </p>
          </div><div className="col-6">
            <p>CSS
              <div class="progress">
                <div className="progress-bar" role="progressbar" style={{ width: "65%" }} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">65%</div>
              </div>
            </p>
          </div><div className="col-6">
            <p>WORDPRESS/CMS
              <div class="progress">
                <div className="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100%</div>
              </div>
            </p>
          </div><div className="col-6">
            <p>JAVASCRIPT
              <div class="progress">
                <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
              </div>
            </p>
          </div><div className="col-6">
            <p>PHOTOSHOP
              <div class="progress">
                <div className="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
              </div>
            </p>
          </div>
          </div>
              </div>
    </section>
    </div>
  )
}
