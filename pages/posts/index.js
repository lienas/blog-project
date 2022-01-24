import React from 'react';
import AllPosts from "../../components/posts/all-posts";
import {getAllPosts} from "../../lib/posts-utils";

const AllPostsPage = (props) => {
    return (
        <AllPosts posts={props.posts}/>
    );
};

export function getStaticProps() {
    const allPosts = getAllPosts();
    return {
        props: {
            posts : allPosts
        },
        revalidate: 60
    }
}

export default AllPostsPage;
