import Image from "next/image"
import { loginreg } from "../../public"
const SideImage = () => {
  return (
    <div className="flex overflow-y-hidden h-screen w-1/2">
      <Image src={loginreg} alt="login" />
      <div className="absolute text-[#E5E5CB] top-80 left-[12.5%]">
        <h2 className="text-[58px] flex font-marcellus">MugenMinds</h2>
        <p className="font-light absolute font-outfit w-[650px] text-center text-[22px] -left-36">
          Dive into a treasure trove of study resources - from question papers to detailed notes and bonus materials.
        </p>
      </div>
    </div>
  )
}

export default SideImage
