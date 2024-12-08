import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import ProjectCard, {ProjectTypeCard} from "@/components/ProjectCard";
import { PROJECT_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";



export default async function Home({searchParams} : {
  searchParams: Promise<{query? : string}>
}) {
 
const query = (await searchParams).query;
const params = {search: query || null}
const session = await auth();

console.log(session?.id);


const {data: posts} = await sanityFetch({query : PROJECT_QUERY, params});

  return (
    <>

    <section className="pink_container">
    <h1 className="heading">
      Create Your Project <br />Connect With Like-Minded People
    </h1>
    < p className="sub-heading !max-w-3xl">Submit Project, Vote on Idea and Get Noticed By Like Minded-People</p>


    <SearchForm query={query}/>
    </section>
     
<section className="section_container">
  <p className="text-30-semibold"
  >{query ? `Search results for "${query}"` : 'Trendy Projects'}</p>


 <ul className="mt-7 card_grid">
  {posts?.length > 0 ? (
posts.map((post: ProjectTypeCard, index:number)=> (
  <ProjectCard key={post?._id} post={post}/>
  
))
  ): (
    <p className="no-results"> No Project Found</p>
  )}
 </ul>
 
 </section>
 <SanityLive/>
    </>
  );
}
