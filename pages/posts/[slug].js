import PostContent from "../../components/posts/post-detail/post-content";
import {getPostData, getPostFiles} from "../../lib/posts-utils";

import Head from "next/head";

function PostDetailPage(props) {
    return (
        <>
            <Head>
                <title>
                    {props.post.title}
                </title>
            </Head>
            <PostContent post={props.post}/>
        </>
    )
}

export function getStaticProps(context) {
    const {params} = context;
    const {slug} = params;

    const postData = getPostData(slug);

    return {
        props: {
            post: postData
        },
        revalidate: 600
    }
}

export function getStaticPaths() {
    const postFiles = getPostFiles();
    const slugs = postFiles.map(fileName => fileName.replace(/\.md$/, ''));
    return {
        paths: slugs.map(slug => ({params: {slug: slug}})),
        fallback: false
    }
}

export default PostDetailPage;
