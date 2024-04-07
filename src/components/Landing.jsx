import Image from "next/image"
import { landing } from "../../public"
import GetStarted from "./GetStarted"
const Landing = () => {
  return (
    <div className="flex items-center">
      <div className="flex flex-col gap-y-9 text-[#E5E5CB]">
        <h1 className="text-[60px] font-semibold font-outfit leading-tight">Welcome to <br /> <span className="text-[74px] font-bold">Mugen Minds</span></h1>
        <p className="text-[20px] max-w-[600px]">
          Welcome to MugenMinds! Dive into a treasure trove of study resources - from question papers to detailed notes and bonus materials - designed to make your academic journey smoother and more rewarding. Explore, learn, and excel with us as we embark on this academic adventure together!
        </p>
        <GetStarted/>
      </div>
      <div className="image-fade">
        <Image src={landing} height={700} width={700} />
      </div>
    </div>
  )
}

export default Landing
