import Link from 'next/link'
 

export default function MenuItem({title,address,Icons}){
  return (
    <Link href={address} className='hover:bg-amber-500'>
        <Icons className="text-2xl sm:hidden " />
        <p className='uppercase hidden sm:inline text-sm'> {title}</p>
    </Link>
  )
}

 