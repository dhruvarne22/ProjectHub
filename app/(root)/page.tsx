import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import ProjectCard, {ProjectTypeCard} from "@/components/ProjectCard";
import { PROJECT_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";
import { ThreeDCardDemo } from "@/components/AirCard";
import { Boxes } from "@/components/ui/background-boxes";


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





 <div className="h-[730px] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full  [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <h1 className="heading relative">
      Get Projects Ideas<br />At Your Fingertips
    </h1>
    < p className="sub-heading !max-w-3xl relative">Be Recognized in the socieity by contributing your project.</p>
    <SearchForm query={query}/>

      </div>




     
<section className="section_container">
  <p className="text-30-semibold"
  >{query ? `Search results for "${query}"` : 'Trendy Projects'}</p>


 <ul className="mt-7 card_grid grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-1 justify-center ">
  {posts?.length > 0 ? (
posts.map((post: ProjectTypeCard, index:number)=> (
<ThreeDCardDemo key={post._id} post={post}/>
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
