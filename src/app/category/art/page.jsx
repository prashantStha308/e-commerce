"use client";

import React from 'react'
import Header from '@/app/_components/Header';
import Footer from '@/app/_components/Footer';
import CatSubNav from '@/app/_components/CatSubNav';
import Art from './Art';

const CategoryArt = () => {

  return (
    <section id='category_art'>
      <Header currentPage={'category'} />
      <CatSubNav currentPage={'art'} />
      <Art />
      <Footer />
    </section>
  )
}

export default CategoryArt