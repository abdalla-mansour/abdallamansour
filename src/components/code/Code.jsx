import React from 'react';
import Img from '../../assets/code/code.svg';
import './code.css';

const Code = () => {
  return (
    <div className="Code" id="code">
      <div class="strips">
        <div class="s-one"></div>
        <div class="s-two"></div>
        <div class="s1-one"></div>
        <div class="s1-two"></div>
      </div>
      <div className="code-right">
        <h1>Build Website</h1>
        <p>
          Start now to design a personal website for you and display all your
          work and achievements in terms of performance, budget, quality and
          visitor statistics
        </p>
        <div className="button">
          <a href="https://wa.me/+0201068978663">Contact</a>
        </div>
      </div>
      <div className="code-left">
        <img src={Img} alt="" />
      </div>
    </div>
  );
}

export default Code;