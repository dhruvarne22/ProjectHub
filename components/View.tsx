import React from 'react'
import Ping from './Ping'
import { client } from '@/sanity/lib/client'
import { PROJECT_VIEWS_QUERY } from '@/sanity/lib/queries'
import { writeClient } from '@/sanity/lib/write-client'

const View = async ({id} : {id : string}) => {
const {views}  = await client.withConfig({useCdn: false}).fetch(PROJECT_VIEWS_QUERY, {id});
await writeClient.patch(id).set({views : views + 1}).commit();

  return <div className='view-container'>
    <div className="absolute -top-3 right-2">
        <Ping/>
    </div>

    <p className='view-text'>
        <span className='font-black'>{views} Views</span>
    </p>
  </div>
}

export default View