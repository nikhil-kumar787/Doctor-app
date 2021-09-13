import Image from 'next/image'
import banner from '../assests/images/banner.jpeg'

function Banner() {
    return (
        <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[600px]' >
            <Image src= {banner}
            layout='fill' objectFit='cover' 
            />
            <div className='absolute top-1/2 w-full text-center'>
                
                <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>Watch Now</button>
                <p className='text-sm sm:text-lg'>We Care for you.</p>
            </div>
        </div>
    )
}

export default Banner