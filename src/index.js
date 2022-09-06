import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function Hi() {
  return <div class="body">
    <div className="main">
      <div className="header">
        <h1 class="name"><b>FARYA JAMAL</b></h1><br />
        <p class="contact"><b>Contact:</b><br /><br />
          <b> Mobile : 03323545685</b><br />
          <b>Address : Block#17 Fb Area,Karachi.</b><br />
          <b>Email : ftjamal@gmail.com</b></p>

      </div>
      <div className="one">
        <h2 class="h">OBJECTIVE</h2>
        
        <p>
          To excel among the Professionals. Where I can utitlize my skills with
          strong commitment and dedication, for the progressive growth of the
          company.
        </p>

        <h2 class="h">EDUCATION</h2>

        <ul>
          <li>
            DECEMBER,17
            <br />
            B.A (Government college for women).
          </li>
          <li>
            JULY,14
            <br />
            Intermediate (Government college for women)
          </li>
          <li>
            JULY,12
            <br />
            Matriculation(Rose Petal School)
          </li>
        </ul>

        <h2 class="h">HOBBIES</h2>
      
        <ul>
          <li>Reading</li>
          <li>Searching</li>
        </ul>

        <h2 class="h">SKILLS</h2>
        <ul>
          <li>Html</li>
          <li>Css</li>
          <li>Javascript</li>
        </ul>

        <h2 class="h"> LANGUAGES</h2>
        
        <ul>
          <li>English</li>
          <li>Urdu</li>
          <li>Arabic(basic)</li>
        </ul>

        <h2 class="h">REFERENCE</h2>
        <p>will be furnished on request</p>

      </div>
      <div class="footer"></div>
    </div>
  </div>
}

ReactDOM.render(<Hi />, document.querySelector("#root"));
