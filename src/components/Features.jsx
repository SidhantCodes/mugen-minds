import Image from "next/image";
import { img1,img21,img22 } from "../../public";
const Features = () => {
  return (
    <section id="features" className="flex gap-x-6 text-[#E5E5CB] mt-40">
      <div className="imgs flex flex-col gap-y-6">
        <div className="flex">
          <Image className="rounded-md" src={img1} height={200} width={450} />
        </div>
        <div className="flex gap-x-6">
          <Image className="rounded-md" src={img21} height={210} width={210} />
          <Image className="rounded-md" src={img22} height={210} width={210} />
        </div>
      </div>
      <div className="content bg-[#191919] p-10 rounded-2xl text-center">
        <h1 className="font-bold text-[52px]">What you’ll get</h1>
        <p className="text-[22px] max-w-[350px] mt-7">Welcome to MugenMinds! Dive into a treasure trove of study resources - from question papers to detailed notes and bonus materials - designed to make your academic journey smoother and more rewarding. Explore, learn, and excel with us as we embark on this academic adventure together!</p>
      </div>
    </section>
  )
}

export default Features
