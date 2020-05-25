import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload
        </p>

        <a className="App-link" href="https://react.org" target="_blank" rel="noopener noreferer">Learn React</a>
      </header> */}

      <div className="MenuBarTextAlign">
        <a target="_blank" rel="noopener" class="alert alert-danger" href="#">หน้าแรก</a>
        <a target="_blank" rel="noopener" class="alert alert-info" href="#">หน้าแรก</a>
        <a target="_blank" rel="noopener" class="alert alert-success" href="#">หน้าแรก</a>
      </div>

      <div class="alert alert-primary">ใช้งาน Bootstrap ใน React!!!</div>
      <div class="alert alert-secondary">ใช้งาน Bootstrap ใน React!!!</div>
      <div class="alert alert-dark">ใช้งาน Bootstrap ใน React!!!</div>
      <div class="alert alert-light">ใช้งาน Bootstrap ใน React!!!</div>
      <div class="alert alert-success">ใช้งาน Bootstrap ใน React!!!</div>
      <div class="alert alert-warning">ใช้งาน Bootstrap ใน React!!!</div>

      <div className="MenuBarTextAlign">
        <button type="button">แบบปกติ</button>
        <button type="button" class="btn btn-primary">แบบปกติ</button>
        <button type="button" class="btn btn-secondary">แบบ btn-primary สีน้ำเงิน</button>
        <button type="button" class="btn btn-info">แบบ btn-secondary สีเทาเข้ม</button>
        <button type="button" class="btn btn-warning">แบบ btn-info สีฟ้า</button>
        <button type="button" class="btn btn-danger">แบบ btn-warning สีแดง</button>

      </div>

      <div>
        <div class="btn-group">
          <button class="btn">หน้าแรก</button>
          <button class="btn">เว็บบอร็ด</button>
          <button class="btn">บทความ</button>
          <button class="btn">ติดต่อเรา</button>
        </div>
      </div>

      <div class="MenuBarTextAlign">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title"> Basic Angular</h3>
            <p class="card-text">ศึกษาการใช้งาน Angular แบบ Step by Step</p>
            <a href="#" class="btn btn-info">อ่านต่อ...</a>
          </div>
        </div>
      </div>

      <div class="MenuBarTextAlign">
        <div class="card-deck">

          <div class="card border-primary">
            <div class="card-body">
              <h3 class="card-title">ASP.NET Core MVC</h3>
              <p class="card-text">เรียนรู้พื้นฐานการใช้งาน ASP.NET Core MVC ด้วยภาษา C#</p>
              <a href="#" class="btn btn-info">อ่านต่อ...</a>
            </div>
          </div>

          <div class="card border-primary">
            <div class="card-body">
              <h3 class="card-title">Basic WEB API</h3>
              <p class="card-text">ศึกษาการสร้าง WEB API</p>
              <a href="#" class="btn btn-info">อ่านต่อ...</a>
            </div>
          </div>

          <div class="card border-primary">
            <div class="card-body">
              <h3 class="card-title">Basic WEB API</h3>
              <p class="card-text">ศึกษาการสร้าง WEB API</p>
              <a href="#" class="btn btn-info">อ่านต่อ...</a>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}

export default App;
