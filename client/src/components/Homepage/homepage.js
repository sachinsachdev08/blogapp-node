import Navbar from "../Navbar/navbar"
import Gallery from "../Homepage-Contents/gallery"
import Latestarticles from "../LatestArticles/latestarticles"
import Toppost from "../TopPosts/toppost"
export default function Homepage(){
    return(
      <>
      <Navbar/>
      <Gallery/>
      <Latestarticles/>
      <Toppost/>
      </>
    )
}