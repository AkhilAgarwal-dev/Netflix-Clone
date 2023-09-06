import {useSelector} from "react-redux";
const GPTSearchBar = () => {
  const langKey = useSelector(store=>store.config.lang)
  return (
    <div className="pt-[10%] flex justify-center">
      <form className='w-1/2 bg-black grid grid-col-12'>
        <input type = "text" className=' p-4 m-4 col-span-6' placeholder={lang.langKey.hindi.gptSearchplaceholder}/>
        <button className=" col-span-4 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">{lang[langKey].gptSearchplaceholder}</button>
      </form>
    </div>
  )
}

export default GPTSearchBar;