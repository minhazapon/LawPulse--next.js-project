



export default async function getPost() {

 
   const result = await fetch('https://raw.githubusercontent.com/minhazapon/LawPulse--next.js-project/refs/heads/main/public/shop.json')

   return result.json()



}
