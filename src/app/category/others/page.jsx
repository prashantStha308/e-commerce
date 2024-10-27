"use client";

import React from 'react'
import Header from '@/app/_components/Header';
import Footer from '@/app/_components/Footer';
import CatSubNav from '@/app/_components/CatSubNav';
import Others from './Others';

const CategoryOthers = () => {

  return (
    <section id='category_beauty'>
      <Header currentPage={'category'} />
      <CatSubNav currentPage={'others'} />
      <Others />
      <Footer />
    </section>
  )
}

export default CategoryOthers