import { cn } from '@/lib/utils'
import Image from 'next/image'

interface HomeCardProps {
    img: string
    title: string
    description: string
    handleClick: () => void
    className?: string
}
const HomeCard = ({img, title, description, handleClick, className}
    : HomeCardProps) => {

  return (
    <div className={cn('rounded-[14px] px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[220px] cursor-pointer',className)}
        onClick={handleClick}>
          <div className='flex-center glassmorphism size-12 rounded-[10px]'>
            <Image src={img}
            alt={title}
            width={23} height={23}/>
          </div>
          <div className='flex flex-col gap-2'>
            <h1 className='text-[21px] font-bold'>{title}</h1>
            <p className='text-[14px] font-normal'>{description}</p>
          </div>
        </div>
  )
}

export default HomeCard
