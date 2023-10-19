
// import

// import "□□□"
// import "ファイルパス or パッケージ名"
// import './App.css'

// import ◯◯◯ from "□□□"
// import 名前 from "ファイル"
// const 名前 = 0

// import { △△△ } from "□□□"
// const obj = {a: 0, b: 1}
// console.log(obj.a);

// const {a, b } = {a: 0, b: 1}
// console.log(a);

// パッケージを使えるようにしている
import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import axios from 'axios';

// import TextFiled from "./components/TextField"

function App() {
  // const [count, setCount] = useState(0)
  // const [list, setList] = useState([])
  const [text, setText] = useState("")

  return (
    <div>
  <h1>プロフィールカード</h1>
 <div class="profile-card">
        <img class="profile-image" src="https://placehold.jp/150x150.png" alt="プロフィール画像"></img>
        <div class="name">ジェーン・ドー</div>
        <div class="occupation">冒険家</div>
        <div class="contact-info">
            <p>メール: jane@example.com</p>
            <p>電話: 123-456-7890</p>
        </div>

  
  </div>
  
  </div>
)
  
}

export default App
