'use client';

import { UsePreview } from "../lib/sanity.preview";
import BlogList from "./BlogList";

interface Props {
    query: string
}

export default function PreviewBlogList({query}: Props) {
    const posts = UsePreview(null, query)
    return <BlogList posts={posts}/>
}