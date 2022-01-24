import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import {getFeaturedPosts} from "../lib/posts-utils";

function HomePage(props) {

    // Hero Section
    // featured Posts

    return (
        <>
            <Hero/>
            <FeaturedPosts posts={props.posts}/>
        </>
    )

}

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts();
    return {
        props: {
            posts : featuredPosts
        },
        revalidate: 60
    }
}

export default HomePage
