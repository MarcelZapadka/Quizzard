import React from 'react'
import '../HomePage/HomePage.scss'
import Button from 'react-bootstrap/Button';
import { FcGraduationCap, FcApproval, FcClock } from "react-icons/fc";

function HomePage() {
  return (
    <section className='home'>
      <div className='background'>
      {/* <img className='question-marks' src="https://private-user-images.githubusercontent.com/110595617/264262233-6b9e60ad-001d-47fc-b97c-d3de804a7645.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE2OTMzODA2NDUsIm5iZiI6MTY5MzM4MDM0NSwicGF0aCI6Ii8xMTA1OTU2MTcvMjY0MjYyMjMzLTZiOWU2MGFkLTAwMWQtNDdmYy1iOTdjLWQzZGU4MDRhNzY0NS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBSVdOSllBWDRDU1ZFSDUzQSUyRjIwMjMwODMwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIzMDgzMFQwNzI1NDVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02NTI5NmQ5NzI1YTc5NmUwNmE5Zjg1OWQxNmI5N2YwZTU3YmU2NjNkMWRjMWZiNGVmZTQyZWJlMTdkM2U4YzBhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.AmPkEXUX5NmZo9XL_hB509VCkay9gODXfGwkzjLfbQQ" alt="QuestionMarks" /> */}
      </div>

      <div className='dashboard'>
       <h1 className='hello'>Hello Marcel! <FcGraduationCap className='cap-icon'/></h1>
       <p>Last Quiz result:</p>
       <section className='last-results-wrapper'>
          <div className='results'>
            <div className='results-details'>
              <p className='score'>7/10</p>
              <FcApproval className='icon'/>
            </div>
            <p className='text'>ANSWERS</p>
          </div>
          <div className='results'>
            <div className='results-details'>
              <p className='score'>46</p>
              <FcClock className='icon'/>
            </div>
            <p className='text'>SECONDS</p>
        </div>
       </section>
       <section className='buttons-wrapper'>
        <Button className='button' variant="primary"> Start new Quiz </Button>
        <Button className='button' variant="primary"> Continue Quizz </Button>
       </section>
      </div>
    </section>
  )
}

export default HomePage
