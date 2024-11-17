import { useState } from "react"
import FilmCard from "../components/FilmCard/FilmCard"

import { FilmType } from "../components/FilmCard/filmTypes"

const dummyFilms = [
  {id:"1",
    title: "Побег из Претории",
    rating: "6.70",
    genre: ["триллер"],
    image: "https://s3-alpha-sig.figma.com/img/b83f/32e8/a2b2eb0f21b711459d9469b73cfb4519?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BG~AJAbdmAjkl29WiyAqdjYWjn6pxc~dEHo5zZ8j8MZZB3BNfaXUriM6Lcza-SEfnAS6hBaabQYED2rfl9vrVzrCimOj~XhTO918HrCqnpqBDN-o1fH0l~C5OQ2tT0u82klwB5Mj~F8RSIyLvzQsoheQVHj3hAZ5mMOpIX~XI6do-nuncodqMGeERprlEoGKBy4Xo148Ux2Kqumtp166CMLG04N5XsSWb0xe~BleE2LPPw7zgaIfObJscIjVDlgTAnTJkv8uI2W5lgjrmuZN6FSaWv2DuTiP8AoLgn96YCn0q9zdE9QM0KHD7Kk876NvoHYnJ8TpTuKWDWgq5YQKjw__"
  },
  {id:"2",
    title: "Джокер",
    rating: "8.50",
    genre: ["триллер", "драма", "криминал"],
    image: "https://s3-alpha-sig.figma.com/img/7a18/8e13/0f7ceb74f39c8622dfb623220e93a372?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b4RigQaLnllC9PqcP~iP8Jh-ffper7-lzWoneHVw8Z0SKRcZPv2V8D8ubRNq6kMy2Lr0LdZ2AIxkGSkQ0hS8gQeAk4TT8Elan4oNOfNjvwYPSCKOv9e7Vc8sP6o6p51JUVZ6C4HCY5AT6JH1LSPbnrkbR6t4W6OQOEn4zg8QJWRyV9uUr8pWlAVIRNuwqYdZ1CfTuqf-24IVMwrS-xQiA6PBF628HjIdl7bHXZEEocDr6WtVHQ36yh~In5wX8-bq2dAA3mlJFUDR3NXhtdHleFPuyDcTnT-k9dSZomsoBPl01QmEalj3plwsUsdTuyJPuh8ueSQEwej2fwMedsW0qQ__"
  },
  {id:"3",
    title: "Джокер",
    rating: "8.50",
    genre: ["триллер", "драма", "криминал"],
    image: ""},
    {id:"4",
      title: "Джокер",
      rating: "8.50",
      genre: ["триллер", "драма", "криминал"],
      image: ""}
]

const Films = () => {

  const [films, setFilms] = useState<FilmType[]>(dummyFilms)
  
  return (
    <div className="">
      <h2>Films</h2>
      <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-5 w-full max-w-full box-border">{films.map((item)=>{
        return <FilmCard key={item.id} film={item}/>
      })}</div>
    </div>
  )
}
export default Films