import Image from "next/image"
import { IoIosArrowForward } from "react-icons/io"

export default function YourBrainBlog() {
    const date = new Date()
    return (
        <section className="pt-20 max-w-4xl h-auto justify-self-center relative mb-1">
            <div className="w-full">
                <h1 className="md:text-4xl mt-10 justify-self-center ">YourBrain Blog</h1>
                <p className="flex justify-self-start text-xl mt-8">What is YourBrain ?</p>
                <p className="flex justify-self-start text-justify font-thin mt-4">You came across a great tweet, bookmarked it and thought to revisit later, and hola now it is part of the 200 already present tweet and you are literally scrolling down each one to find the one you need now.
                    Similar is the case with your YouTube watch later.  
                </p>
                <p className="flex justify-self-start text-justify font-thin mt-1">Even if you have some thought over that and want to write down alongwith, you move to your notes and now everything is distorted into 3 different apps places !! </p>
                <p className="flex justify-self-start text-justify  mt-1">This is no longer true. YourBrain takes away 3 of your major painpoints :</p>
                <ul className="">
                    <li className="font-thin flex items-center"><IoIosArrowForward className="w-3 h-3 text-gray-400" />{`Save all links at "ONE PLACE"`}</li> 
                    <li className="font-thin flex items-center"><IoIosArrowForward className="w-3 h-3 text-gray-400" />Retrieve Fast</li> 
                    <li className="font-thin flex items-center"><IoIosArrowForward className="w-3 h-3 text-gray-400" />Save Catagorically</li> 
                </ul>
                <p className="flex justify-self-start text-justify  mt-2">Additional Features :</p>
                <ul className="list-disc">
                    <li className="font-thin flex items-center"><IoIosArrowForward className="w-3 h-3 text-gray-400" />{`Edit, delete anytime`}</li> 
                    <li className="font-thin flex items-center"><IoIosArrowForward className="w-3 h-3 text-gray-400" />Save with your custom notes and title </li> 
                    <li className="font-thin flex items-center"><IoIosArrowForward className="w-3 h-3 text-gray-400" />Save Catagorically</li> 
                    <li className="font-thin flex items-center"><IoIosArrowForward className="w-3 h-3 text-gray-400" />Save Catagorically</li> 
                    <li className="font-thin flex items-center"><IoIosArrowForward className="w-3 h-3 text-gray-400" />Share Indiviual content or the entire Brain</li> 
                </ul>
                {/* <Image src={'https://ik.imagekit.io/mrityunjay/Screenshot%202025-07-30%20232246.png?updatedAt=1753897990655'} height={500} width={300} alt="edit" /> */}
            </div>
        </section>
    )
}