import { useState, useEffect } from 'react';

const NewsSection = () => {
  const [externalNews, setExternalNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=SUA_CHAVE_DE_API'
        );
        const data = await response.json();
        setExternalNews(data.articles);
      } catch (error) {
        console.error('Erro ao buscar notícias externas:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h2>Notícias Externas</h2>
      <ul>
        {externalNews.map((news) => (
          <li key={news.title}>{news.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default NewsSection;
