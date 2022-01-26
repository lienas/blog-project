import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import {getFeaturedPosts} from "../lib/posts-utils";
import Head from "next/head";

function HomePage(props) {

    // Hero Section
    // featured Posts

    return (
        <>
            <Head>
                <title>Thomas' BLOG</title>
                <meta
                    name='description'
                    content='I post about ....'
                />
            </Head>
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
