(function () {
  // =================== Declare Variables ===================
  const body = document.body
  const rgbController = document.getElementById('rgb-controller')
  const hexDisplay = document.getElementById('hex-display')
  const redOutput = document.getElementById('red-output')
  const greenOutput = document.getElementById('green-output')
  const blueOutput = document.getElementById('blue-output')

  const rgbData = {
    red: 0,
    green: 0,
    blue: 0
  }

  // =================== Declare Functions ===================
  function readRgb(event) {
    if (event.target.matches('#red')) {
      rgbData.red = event.target.value
    } else if (event.target.matches('#green')) {
      rgbData.green = event.target.value
    } else if (event.target.matches('#blue')) {
      rgbData.blue = event.target.value
    }
    // console.log(rgbData)
  }

  function showRgb() {
    redOutput.innerText = rgbData.red
    greenOutput.innerText = rgbData.green
    blueOutput.innerText = rgbData.blue
  }

  // 16進位數必須有兩個digit
  function twoDigit(data) {
    return (data.length < 2) ? '0' + data : data
  }

  function rgbToHex(data) {
    let hexRed = twoDigit(parseInt(rgbData.red, 10).toString(16))
    let hexGreen = twoDigit(parseInt(rgbData.green, 10).toString(16))
    let hexBlue = twoDigit(parseInt(rgbData.blue, 10).toString(16))
    return `#${hexRed}${hexGreen}${hexBlue}`
  }

  function showHex() {
    const hex = rgbToHex(rgbData).toUpperCase()
    hexDisplay.innerText = hex
    return hex
  }

  function updateBackgroundColor(hex) {
    body.style.backgroundColor = hex;
  }

  // =================== Event Listener ===================
  // 用 change 事件取得 slider 數值
  rgbController.addEventListener('change', function (event) {
    readRgb(event)
    showRgb()
    let hex = showHex()
    updateBackgroundColor(hex)
  })

  // 用 input 事件取得 slider 數值
  rgbController.addEventListener('input', function (event) {
    readRgb(event)
    showRgb()
    let hex = showHex()
    updateBackgroundColor(hex)
  })
})()