import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect (( ) => {
    console.log("Sürekli Çalışır")
  })
  useEffect (() => {
    console.log("İlk Render Edildiğinde Çalışır")
  },[])
  useEffect (() => {
    console.log("Count Değeri Değiştiğinde Çalışır, ve her zaman render yapıldıgında çalışır")
  },[count])
  
  return (
    <>
      <div>
        <div>
          UseEffect konu anlatımı
        </div>
        <div>{count}</div>
        <div><button onClick={() => {
          setCount(count+1);
        }}>
          Count Değerini Değiştir</button></div>
      </div>
    </>
  )
}

export default App
