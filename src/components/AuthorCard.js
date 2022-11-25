import React from 'react';
import pic from './images/bg.png' 

export default function AuthorCard({isActive, setIsActive}) {
function handleActive(e) {
e.preventDefault();
setIsActive({
    active:true,
    name:e.target.id
})
}
 return (
<div className="py-6">
<main>
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div id="intro" className="bg-[#
    3EAEAEA] h-auto my-6 py-8 rounded-lg border-4">
      <div id="avatar" className="flex justify-center py-2">
        <img className="w-40" src={pic} alt="JB image" />
      </div>

      <div id="content" className="prose lg:prose-xl px-2">
        <h1 className="text-center text-gray-800 text-3xl capitalize m-2 font-medium">Hannah Kettor</h1>
        <small className="text-center block text-md mb-3 text-gray-800">Student</small>
        <p className="text-justify text-lg mt-2 p-3 m-2 text-gray-800">Hello,  My name is Hannah kettor a student
        of starz university specializing in the discipline in System Administration and software programming,
        i have developed a desire to advance in an online data collection network,in the area of selling
        products online especially for Global business which requires people with moderate understanding
        of technology.
      
      
 </p>

        <div className="p-6 max-w-full mx-auto">
            <ul className="flex justify-center items-center gap-4">
              <li className={`border border-zinc-500 rounded-lg p-4 ${isActive.active && isActive.name === "education" && 'bg-[#FF8F56]'}`}>
               <a href="#education" id="education" onClick={handleActive} className="font-roboto font-bold text-xl text-black">Education</a>
              </li>
              <li className={`border border-zinc-500 rounded-lg p-4 ${isActive.active && isActive.name === "work" && 'bg-[#FF8F56]'}`}>
              <a href="#work" id="work" onClick={handleActive}
              className="font-roboto text-xl">Work</a>
              </li>
              <li className={`border border-zinc-500 rounded-lg p-4 ${isActive.active && isActive.name === "hobbies" && 'bg-[#FF8F56]'}`}>
                <a href="#hobbies" id="hobbies" onClick={handleActive} className="font-roboto text-xl">Hobbies</a>
              </li>
            </ul>
        </div>

      </div>
    </div>
    </div>

    </main>
    
    </div>
    
  )
    }