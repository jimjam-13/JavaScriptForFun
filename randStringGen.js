export const randStringGen = (count, chars) => {
  try {
    const allowedChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const randStringArray = []
    for (let i = 0; i < count; i++) {
      let randString = ''
      while (randString.length < chars) randString += allowedChars[Math.floor(Math.random() * allowedChars.length)]
      randStringArray.push(randString)
    }
    console.log('randArray: ', randStringArray)
    return randStringArray
  } catch (error) {
    console.log(error)
  }
}
