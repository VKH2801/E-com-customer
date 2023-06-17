"use client";
import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import LinkButton from "./components/buttons/LinkButton";
import Navbar from "./sections/navbar";
import Herosection from "./sections/herosection/herosection";
import About from "./sections/aboutsection/About";
import Getstarted from "./sections/stepssection/Getstarted";
const inter = Inter({ subsets: ["latin"] });
import ClientOnly from "./components/ClientOnly";
import EmptyState from "./components/EmptyState";
import Container from "./components/Container";
import { useState, useEffect } from "react";
import ListingCard from "./components/posts/ListingCard";
import axios from "axios";
import UserStatus from "./components/UserStatus";
import { useSession } from "next-auth/react";
import EmptyUserStatus from "./components/EmptyUserStatus";
import { CustomFilter, Hero, SearchBar } from "./components";
import {  CarpetProps, TileProps } from "../../types";
import TileCard from "./components/TileCard";
import CarpetCard from "./components/CarpetCard";

export default function Home() {
  const tileData: TileProps[] = [
    {
      name: 'High Quality EVA Yoga Tiles Black',
      type: 'EVA',
      color: 'Black',
      detail: 'The high density of EVA makes the bricks more durable and heavier, more resilient, recovers quickly and leaves no marks than regular Yoga bricks.',
      feature: 'Non-slip, non-toxic, waterproof, durable, lightweight.',
      material: 'Premium foam PVC (beautiful gloss) Premium EVA (High density)',
      size: '23cm x 15cm x 7.5cm',
      src: '/images/t-black.png',
      usage: 'Support for stretching and balancing exercises as well as specific yoga poses and movements',
    },
     {
      name: 'High Quality EVA Yoga Tiles Pink',
      type: 'EVA',
      color: 'Pink',
      detail: 'The high density of EVA makes the bricks more durable and heavier, more resilient, recovers quickly and leaves no marks than regular Yoga bricks.',
      feature: 'Non-slip, non-toxic, waterproof, durable, lightweight.',
      material: 'Premium foam PVC (beautiful gloss) Premium EVA (High density)',
      size: '23cm x 15cm x 7.5cm',
      src: '/images/t-pink.png',
      usage: 'Support for stretching and balancing exercises as well as specific yoga poses and movements',
    },
    {
      name: 'High Quality EVA Yoga Tiles Green',
      type: 'EVA',
      color: 'Green',
      detail: 'The high density of EVA makes the bricks more durable and heavier, more resilient, recovers quickly and leaves no marks than regular Yoga bricks.',
      feature: 'Non-slip, non-toxic, waterproof, durable, lightweight.',
      material: 'Premium foam PVC (beautiful gloss) Premium EVA (High density)',
      size: '23cm x 15cm x 7.5cm',
      src: '/images/t-green.png',
      usage: 'Support for stretching and balancing exercises as well as specific yoga poses and movements',
    },
     {
      name: 'High Quality EVA Yoga Tiles Blue',
      type: 'EVA',
      color: 'Blue',
      detail: 'The high density of EVA makes the bricks more durable and heavier, more resilient, recovers quickly and leaves no marks than regular Yoga bricks.',
      feature: 'Non-slip, non-toxic, waterproof, durable, lightweight.',
      material: 'Premium foam PVC (beautiful gloss) Premium EVA (High density)',
      size: '23cm x 15cm x 7.5cm',
      src: '/images/t-blue.png',
      usage: 'Support for stretching and balancing exercises as well as specific yoga poses and movements',
    },
     {
      name: 'High Quality EVA Yoga Tiles Violet',
      type: 'EVA',
      color: 'Violet',
      detail: 'The high density of EVA makes the bricks more durable and heavier, more resilient, recovers quickly and leaves no marks than regular Yoga bricks.',
      feature: 'Non-slip, non-toxic, waterproof, durable, lightweight.',
      material: 'Premium foam PVC (beautiful gloss) Premium EVA (High density)',
      size: '23cm x 15cm x 7.5cm',
      src: '/images/t-violet.png',
      usage: 'Support for stretching and balancing exercises as well as specific yoga poses and movements',
    },
    {
      name: 'High Quality EVA Yoga Tiles Orange',
      type: 'EVA',
      color: 'Orange',
      detail: 'The high density of EVA makes the bricks more durable and heavier, more resilient, recovers quickly and leaves no marks than regular Yoga bricks.',
      feature: 'Non-slip, non-toxic, waterproof, durable, lightweight.',
      material: 'Premium foam PVC (beautiful gloss) Premium EVA (High density)',
      size: '23cm x 15cm x 7.5cm',
      src: '/images/t-orange.png',
      usage: 'Support for stretching and balancing exercises as well as specific yoga poses and movements',
    },
  ];
   const carperData: CarpetProps[] = [
    {
      name: 'Premium TPE Yoga Mat Black',
      type: 'TPE',
      color: 'Black',
      year: '2022',
      origin: 'China',
      structure: '2-layer',
      material: 'Super durable TPE',
      size: 'D x R x C - 183 x 61 x 0.6 (cm)',
      src: '/images/c-black.png',
      floor_grip: 'Yoga mats have a high grip on the floor, very firm, and do not cause dangerous slips for practitioners',
    },
     {
      name: 'Premium TPE Yoga Mat Grey',
      type: 'TPE',
      color: 'Grey',
      year: '2022',
      origin: 'China',
      structure: '2-layer',
      material: 'Super durable TPE',
      size: 'D x R x C - 183 x 61 x 0.6 (cm)',
      src: '/images/c-grey.png',
      floor_grip: 'Yoga mats have a high grip on the floor, very firm, and do not cause dangerous slips for practitioners',
    },
     {
      name: 'Premium TPE Yoga Mat Red',
      type: 'TPE',
      color: 'Red',
      year: '2022',
      origin: 'China',
      structure: '2-layer',
      material: 'Super durable TPE',
      size: 'D x R x C - 183 x 61 x 0.6 (cm)',
      src: '/images/c-red.png',
       floor_grip: 'Yoga mats have a high grip on the floor, very firm, and do not cause dangerous slips for practitioners',
    },
  ];
   return (
    <main className="overflow-hidden">
      <Hero></Hero>
      <div className='mt-12 sm:px-16 px-6 py-4 max-w-[1440px] mx-auto' id='discover'>
         <div className="mt-12 w-full flex justify-between  items-center flex-wrap gap-5">
        <div className='flex flex-col items-start justify-start gap-y-2.5 text-black-100'>
          <h1 className='text-4xl font-extrabold'>Tiles Catalogue</h1>
          <p>Explore tiles you might like</p>
        </div>
         <Image
                    src='/images/rec.png'
                    alt='close'
                    width={50}
                    height={50}
                    className='object-contain '
                  />
        </div>
        <div className=" mt-12 w-full flex justify-between  items-center flex-wrap gap-5">
          <SearchBar></SearchBar>
          <div className=" flex justify-start flex-wrap items-center gap-2">
            <CustomFilter ></CustomFilter>
          </div>
        </div>
        {/* card tile */}
        <section>
            <div className='grid grid-cols-2 gap-4 justify-center pt-14'>
              {tileData?.map((tile) => (
                <TileCard  tile={tile} key={tile.name}/>
              ))}
            </div>
          </section>
      </div>
      <div className='mt-12 sm:px-16 px-6 py-4 max-w-[1440px] mx-auto'>
        <div className="mt-12 w-full flex justify-between  items-center flex-wrap gap-5">
          <div className='flex flex-col items-start justify-start gap-y-2.5 text-black-100'>
            <h1 className='text-4xl font-extrabold'>Carpets Catalogue</h1>
            <p>Explore carpets you might like</p>
          </div>
           <Image
                    src='/images/cp.png'
                    alt='close'
                    width={50}
                    height={50}
                    className='object-contain '
                  />
        </div>
        
        <div className=" mt-12 w-full flex justify-between  items-center flex-wrap gap-5">
          <SearchBar></SearchBar>
          <div className=" flex justify-start flex-wrap items-center gap-2">
            <CustomFilter ></CustomFilter>
          </div>
        </div>
        {/* card tile */}
        <section>
            <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14'>
              {carperData?.map((carpet) => (
                <CarpetCard  carpet={carpet} key={carpet.name}/>
              ))}
            </div>
          </section>
      </div>
    </main>
  );
}
