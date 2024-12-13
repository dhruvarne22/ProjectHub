import React from 'react'
import Ping from './Ping'
import { client } from '@/sanity/lib/client'
import { PROJECT_VIEWS_QUERY } from '@/sanity/lib/queries'
import { writeClient } from '@/sanity/lib/write-client'

const View = async ({id} : {id : string}) => {
const {views}  = await client.withConfig({useCdn: false}).fetch(PROJECT_VIEWS_QUERY, {id});
await writeClient.patch(id).set({views : views + 1}).commit();

  return <div className='view-container'>
    <div className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
 
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    
  {views} Views
  </span>
</div>


 


  </div>
}

export default View