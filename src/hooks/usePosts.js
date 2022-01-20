import React, { useMemo } from 'react'
import _ from 'lodash'

export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        console.log('Отрабаотала ф-я сортед')
        if (sort) {
            return _.sortBy([...posts], sort);
        }
        return posts;
    }, [sort, posts]);

    return sortedPosts;
}

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort)

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
    }, [query, sortedPosts]);

    return sortedAndSearchedPosts;
}