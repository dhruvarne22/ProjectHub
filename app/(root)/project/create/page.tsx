import { auth } from '@/auth';
import StartupForm from '@/components/ProjectForm'
import { redirect } from 'next/navigation';
import React from 'react'

const Page = async () => {
    const session = await auth();

    if(!session) redirect("/");
  return (
    <>
    <section className='pink_container  !min-h-[230px]'>
<h1 className='heading'> Submit Your Project Idea</h1>
    </section>
    <StartupForm/>
    </>
  )
}

export default Page