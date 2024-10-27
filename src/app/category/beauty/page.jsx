"use client";

import React from 'react'
import Header from '@/app/_components/Header';
import Footer from '@/app/_components/Footer';
import CatSubNav from '@/app/_components/CatSubNav';
import Beauty from './Beauty';

const CategoryBeauty = () => {

  return (
    <section id='category_beauty'>
      <Header currentPage={'category'} />
      <CatSubNav currentPage={'beauty'} />
      <Beauty />
      <Footer />
    </section>
  )
}

export default CategoryBeauty