import { NewsType } from "./NewsTypes";
import eye from './../../assets/images/eye.png'
import comment from './../../assets/images/comment.png'
import img from './../../assets/images/ppp.png'
type NewsProp = {
  news: NewsType;
}


const NewsCard = ({news}: NewsProp) => {
  const {title, description, date, views, comments, image} = news
  return(
  <div style={{backgroundImage: `url(${img})`}} className="bg-cover flex rounded-md flex-col mx-auto h-[500px] w-[60%] xl:w-[85%]">
    <div className="flex ml-[24px] mt-[26px]">
      <p className="text-left font-[700] text-[15px]">{date}</p>
      <div className=" items-center flex ml-[10px]">
        <img src={eye}/>
        <p className=" font-[700] ml-[5px] text-[15px]">{views}</p>
      </div>
      <div className=" items-center flex ml-[10px]">
        <img src={comment}/>
        <p className=" font-[700] ml-[5px] text-[15px]">{comments}</p>
      </div>
    </div>
    <div className=" text-left mt-auto ml-[24px] mb-[65px]">
      <p className="mb-[25px] font-[900] text-[45px]">{title}</p>
      <p className=" font-[500] text-[20px]">{description}</p>
    </div>
  </div>
  )
}  
export default NewsCard