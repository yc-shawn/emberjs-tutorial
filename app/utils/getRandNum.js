export async function getRandomNumber() {
  return new Promise(resolve => {
    const randNum = Math.floor(Math.random() * 100);
    console.log('Generated: ', randNum);
    setTimeout(() => {
      resolve(randNum);
    }, 1000);
  })
}
