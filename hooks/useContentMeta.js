import useSWR from 'swr';

import { useEffect } from 'react';
import { debounce } from '../utils/helper';
import { fetcher } from '../utils/fetcher'

import axios from "axios";






async function incrementLikes(slug) {
  const res = await useSWR('http://cmsku.herokuapp.com/api/project/like/' + slug, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  return res.json();
}


export const useContentMeta = slug => {
  const baseUrl = "http://cmsku.herokuapp.com/api/project/"


  const url = baseUrl + slug


  const { data, error, mutate } = useSWR(url, fetcher)


  async function addLike() {
    if (!data || data.like >= 5) return;

    // Mutate optimistically
    mutate(
      {
        like: data.like + 1,
      },
      false
    );

    await incrementLikes(slug);

    debounce(() => {
      mutate();
    }, 1000)();
  }

  return {
    like: data?.like ?? 0 ,
    isError: error,
    // addLike,
  };
}

export default useContentMeta