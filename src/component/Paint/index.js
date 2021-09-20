import { useState} from "react";

const Paint = () => {
  const canvas = document.getElementById('can')
  const [parametrs, setParametrs] = useState({width: '600', height: '400', pixelSize:'10', color: 'red'})
  const [isMouseDown, setIsMouseDown] = useState(false)

  const MouseDown = (event) => {
    const ctx = event.currentTarget.getContext('2d')
    setIsMouseDown(true)
    ctx.beginPath()
  }

  const MouseUp = () => {
    console.log('Мышка отжата!')
    setIsMouseDown(false)
  }

  const MouseMove = (event) => {
    if(isMouseDown) {
      const ctx = event.currentTarget.getContext('2d')
      const x = event.nativeEvent.offsetX
      const y = event.nativeEvent.offsetY
      console.log('x: ', x, 'y: ', y)

      ctx.lineTo(x,y)
      ctx.lineWidth = parametrs.pixelSize * 2
      ctx.strokeStyle = parametrs.color
      ctx.stroke()

      ctx.beginPath()
      ctx.fillStyle = parametrs.color
      console.log('x: ', x, 'y: ', y)
      ctx.arc(x, y, parametrs.pixelSize, 0, Math.PI * 2, true)
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(x,y)
    }
  }

  return(
    <div>
      <canvas
        id='can'
        className='canvas'
        onMouseDown={(e) => MouseDown(e)}
        onMouseUp={MouseUp}
        onMouseMove={(e) => MouseMove(e)}
        width={500}
        height={500}
      />
    </div>
  )
}

export default Paint