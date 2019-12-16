import axios from 'axios';
import React from 'react';


export const getNews = async (news) => {
  console.log("what is THIS: " + news)
  const response = await axios.get(`https://newsapi.org/v2/top-headlines?sources=${news}&apiKey=ee20649b69c44ceebde93d742bf5b536`)
  console.log(response);
  return response;
}

