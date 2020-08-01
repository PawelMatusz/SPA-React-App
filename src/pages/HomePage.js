import React from 'react';
import Article from '../components/Article';

const articles = [
  {
    id: 1,
    title: 'Czym jest teoria strun',
    author: 'Jan Nowak',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cum quasi repudiandae numquam minima? Aliquam soluta repellat aliquid praesentium tempore! Non illo dicta cupiditate ipsam at, saepe rerum eveniet veritatis.',
  },
  {
    id: 1,
    title: 'Czym jest paradoks Fermiego',
    author: 'Jan Nowak',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cum quasi repudiandae numquam minima? Aliquam soluta repellat aliquid praesentium tempore! Non illo dicta cupiditate ipsam at, saepe rerum eveniet veritatis.',
  },
  {
    id: 1,
    title: 'Ciemna Materia i Ciemna Energia',
    author: 'Jan Nowak',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cum quasi repudiandae numquam minima? Aliquam soluta repellat aliquid praesentium tempore! Non illo dicta cupiditate ipsam at, saepe rerum eveniet veritatis.',
  },
];

const HomePage = () => {
  const artList = articles.map(article => (
    <Article key={article.id} {...article} />
  ));
  return <div className='home'>{artList}</div>;
};

export default HomePage;
