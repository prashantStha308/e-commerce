"use client";

import React from 'react'
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import CatSubNav from '@/app/components/CatSubNav';
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