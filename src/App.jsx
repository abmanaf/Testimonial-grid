import React from 'react'

function App() {
  return (
    <div className='grid lg:grid-cols-2 xl:grid-cols-4 gap-5 w-5/5 2xl:w-5/6 mt-2 mx-auto'>
      <div className='bg-moderate-violet rounded-lg col-span-1 lg:col-span-2 xl:grid-cols-4 text-white p-10 shadow-2xl'>
        <div className='flex relative'>
          <div className='flex items-center gap-3 '>
            <div className='outline outline-2 outline-white rounded-full'>
              <img className='w-8 h-8  rounded-full' src="./images/image-daniel.jpg" alt="image-daniel" />
            </div>
            <div className='flex flex-col' style={{lineHeight: '1.3'}}>
              <span className='text-md text-light-grayish-blue font-semibold'>Daniel Clifford</span>
              <span className='text-sm text-light-gray font-semibold'>Verified Graduate</span>
            </div>
          </div>
          <div className='absolute flex -top-6 right-10'>
            <img src="./images/bg-pattern-quotation.svg" alt="" />
          </div>
        </div>
        <div className='mt-2 z-10 relative'>
          <p className='text-xl font-semibold' style={{lineHeight: '1.3'}}>I received a job offer mid-course, and the subjects I learned were current,
             if not more so, in the company I joined. I honestly feel I got every penny's worth.
          </p>
          <p className='mt-3 text-sm text-light-gray font-semibold'>
            " I was an EMT for many years before I joined the bootcamp. I've been looking
            to make a transition and have heard some people who had an amazing experience here. 
            I signed up for the free intro course and found it incredibly fun! I enrolled shortly
            thereafter. The next 12 weeks was the best and most grueling time of my life. since
            completing the course. I've successfully switched careers, working as a software Engineer at a VR startup. "
          </p>
        </div>
      </div>
      <div className='bg-very-dark-grayish-blue col-span-1  rounded-lg text-white p-10  shadow-2xl'>
          <div className='flex items-center gap-3 '>
            <div className='outline outline-2 outline-white rounded-full'>
              <img className='w-8 h-8 outlin rounded-full' src="./images/image-jonathan.jpg" alt="image-daniel" />
            </div>
            <div className='flex flex-col' style={{lineHeight: '1.3'}}>
              <span className='text-md text-light-grayish-blue font-semibold'>Jonathan Walter</span>
              <span className='text-sm text-light-gray font-semibold'>Verified Graduate</span>
            </div>
          </div>
         
        <div className='mt-2'>
          <p className='text-xl font-semibold' style={{lineHeight: '1.3'}}>
            The team was very supportive and kept me motivated
          </p>
          <p className='mt-5 text-sm text-light-gray font-semibold'>
            " I started as a total newbie with virtually no coding
            skills. I now work as a mobile engineer for a big company.
            This was one of the best investments I've made in myself. "
          </p>
        </div>
      </div>
      <div className='bg-white rounded-lg col-span-1 xl:row-span-2 text-black p-10 shadow-2xl'>
      <div className='flex items-center gap-3 '>
        <div className='outline outline-2 outline-white rounded-full'>
          <img className='w-8 h-8 rounded-full' src="./images/image-kira.jpg" alt="image-daniel" />
        </div>  
            <div className='flex flex-col' style={{lineHeight: '1.3'}}>
              <span className='text-md text-very-dark-grayish-blue font-semibold'>Kira Whittle</span>
              <span className='text-sm text-light-gray font-semibold'>Verified Graduate</span>
            </div>
          </div>
         
        <div className='mt-2'>
          <p className='text-xl font-bold text-very-dark-grayish-blue' style={{lineHeight: '1.3'}}>
            Such a life-changing experience. Highly recommended!
          </p>
          <p className='mt-7 text-sm text-gray-400 font-semibold'>
            " Before joining the bootcamp, I've never written a line of code. I needed
            some structure from professionals who can help me learn programming step by
            step. I was encouraged to enroll by a former student of theirs who can only 
            say wonderful things about the program. The entire curruculum and staff did not
            disappoint. They were very hands-on and i never had to wait long for assistance.
            The agile team project, in particular, was outstanding. It took my learning 
            to the next level in a way that no tutorial could ever have. In fact, I've 
            often referred to it during interviews as an example of my development experience.
            it certainly helped me land a job as a full-stack developer agter receiving multiple offers. 100% recommend!"
          </p>
        </div>
      </div>
      <div className='bg-white rounded-lg col-span-1  text-black p-10 shadow-2xl'>
      <div className='flex items-center gap-3 '>
          <div className='outline outline-2 outline-white rounded-full'>
            <img className='w-8 h-8  rounded-full' src="./images/image-jeanette.jpg" alt="image-daniel" />
           </div>
            <div className='flex flex-col' style={{lineHeight: '1.3'}}>
              <span className='text-md text-very-dark-grayish-blue font-semibold'>Jonathan Walter</span>
              <span className='text-sm text-light-gray font-semibold'>Verified Graduate</span>
            </div>
          </div>
         
        <div className='mt-2'>
          <p className='text-xl font-bold' style={{lineHeight: '1.3'}}>
            An overall wonderful and rewarding experience
          </p>
          <p className='mt-7 text-sm text-gray-400 font-semibold'>
            " Than you for the wonderful experience! I now have a job I really 
            emjoy, and make a good living while doing something I love "
          </p>
        </div>
      </div>
      <div className='bg-very-dark-blackish-blue rounded-lg col-span-1 xl:col-span-2 text-white p-10 shadow-2xl'>
      
      <div className='flex items-center gap-3 '>
          <div className='outline outline-2 outline-white rounded-full'>
            <img className='w-8 h-8 rounded-full' src="./images/image-patrick.jpg" alt="image-daniel" />
          </div>
            <div className='flex flex-col' style={{lineHeight: '1.3'}}>
              <span className='text-md text-light-grayish-blue font-semibold'>Patrick Abrams</span>
              <span className='text-sm text-light-gray font-semibold'>Verified Graduate</span>
            </div>
          </div>
        <div className='mt-2'>
          <p className='text-xl font-semibold' style={{lineHeight: '1.3'}}>
            Awesome teaching support from TAs who did the bootcamp themselves.
            Getting guidance from them and learning from their experience was easy.
          </p>
          <p className='mt-7 text-sm text-light-gray font-semibold'>
            " The staff seem genuinely concerned about my progress which I find really refreshing.
            The program gave me the confidence neccessary to be able to go out in the world and present
            myself as a capable junior developer. The standard is above the rest. You will get the personal 
            attention you need from an incredible community of smart and amazing people. "
          </p>
        </div>
      </div>
    </div>
  )
}

export default App