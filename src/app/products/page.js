'use client';
import React, { useState, useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import { productData } from '../constants/productsData'; // Assume it has the list of products
import Loader from '../components/Loader';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

  // Categories data
  const categoriesData = [
    { name: 'Chair', image: '/images/products/chair/chair1.png' },
    { name: 'Cake', image: '/images/products/cake/cake1.png' },
    { name: 'Lamp', image: '/images/products/lamp/lamp1.png' },
    { name: 'Table', image: '/images/products/table/table1.png' },
    { name: 'Flower', image: '/images/products/flower/flower1.png' },
    { name: 'Chair', image: '/images/products/chair/chair1.png' },
    { name: 'Cake', image: '/images/products/cake/cake1.png' },
    { name: 'Lamp', image: '/images/products/lamp/lamp1.png' },
    { name: 'Table', image: '/images/products/table/table1.png' },
    { name: 'Flower', image: '/images/products/flower/flower1.png' },
  ];


export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(productData); // For search and category filtering
  const [searchValue, setSearchValue] = useState('');
  const productsPerPage = 10;

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  useEffect(() => {
    setLoading(true);

    // Simulate a 1.5-second loading delay
    const timer = setTimeout(() => {
      const startIndex = (currentPage - 1) * productsPerPage;
      const endIndex = startIndex + productsPerPage;
      setVisibleProducts(filteredProducts.slice(startIndex, endIndex));
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [currentPage, filteredProducts]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    if (value === '') {
      // If search is cleared, show all products
      setFilteredProducts(productData);
    }
  };

  const handleSearchClick = () => {
    if (searchValue.trim() !== '') {
      const searchedProducts = productData.filter((product) =>
        product.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredProducts(searchedProducts);
      setCurrentPage(1); // Reset to the first page after filtering
    }
  };

  const handleCategoryClick = (category) => {
    if (category === 'All Products') {
      setFilteredProducts(productData);
    } else {
      const filtered = productData.filter(
        (product) => product.category === category
      );
      setFilteredProducts(filtered);
    }
    setCurrentPage(1);
  };

  
  return (
    <div>
      <Breadcrumb name='Our Products' />

      <div className='flex p-4 py-8 md:p-8 lg:p-12 2xl:p-10 flex-col'>
        <div className='w-full'>
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={0}
            slidesPerView={2}
            draggable
            autoplay={{ delay: 3000 }}
            loop={true}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            breakpoints={{
              // For screens >= 640px (Tablet)
              760: {
                slidesPerView: 4, // Show 4 slides on tablet
              },
              // For screens >= 1024px (Laptop and above)
              1024: {
                slidesPerView: 6, // Show 7 slides on laptop and above
              },
              1240: {
                slidesPerView: 7, // Show 7 slides on laptop and above
              },
            }}
            className='!h-[170px] z-10'
          >
         {categoriesData.map((category, index) => (
        <SwiperSlide key={index}>
          <CategoryCard name={category.name} image={category.image} />
        </SwiperSlide>
      ))}
          </Swiper>
        </div>

        <div className='flex justify-end my-3'>
          <div className='flex justify-between w-full lg:w-1/3'>
            <input
              type='text'
              id='search'
              className='bg-white border border-gray-200 text-gray-900 text-base rounded-lg rounded-tr-none rounded-br-none focus:ring-blue-500 focus:border-blue-500 block w-full p-3'
              placeholder='Search...'
              value={searchValue}
              onChange={handleSearchChange}
              required
            />
            <button
              className='p-2 bg-primary text-sm text-white font-semibold px-4 rounded-lg rounded-tl-none rounded-bl-none'
              onClick={handleSearchClick}
            >
              Search
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className='w-full flex flex-col'>
          {loading ? (
            <Loader />
          ) : (
            <div className='w-full flex flex-wrap'>
              {visibleProducts.map((product, index) => (
                <div key={index} className='w-full md:w-1/3 xl:w-1/5 p-4'>
                  <ProductCard name={product.name} image={product.image} />
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {!loading && (
            <div className='flex justify-center items-center mt-8 space-x-4'>
              <button
                className={`px-4 py-2 rounded-lg ${
                  currentPage === 1
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-primary text-white'
                }`}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>

              <span className='text-gray-700 font-medium'>
                Page {currentPage} of {totalPages}
              </span>

              <button
                className={`px-4 py-2 rounded-lg ${
                  currentPage === totalPages
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-primary text-white'
                }`}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
