"use client";

import React from 'react'
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import CatSubNav from '@/app/components/CatSubNav';
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