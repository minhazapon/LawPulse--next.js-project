import getPost from "../dataFech/page"



export default async function page() {


    const data = await getPost()

    console.log(data)


  return (
    <div>

      
    </div>
  )
}
