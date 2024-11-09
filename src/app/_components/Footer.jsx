"use client"
import React from 'react'

const Footer = () => {
  return (

<footer className="font-sans tracking-wide bg-white dark:bg-gray-900 py-10 px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="text-[#FFA726] font-semibold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-5">
            <li>
              <a href="#" className="footer-link">Our Story</a>
            </li>
            <li>
              <a href="#" className="footer-link">Newsroom</a>
            </li>
            <li>
              <a href="#" className="footer-link">Careers</a>
            </li>
            <li>
              <a href="#" className="footer-link">Blog</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#FFA726] font-semibold text-lg mb-6">Services</h4>
          <ul className="space-y-5">
            <li>
              <a href="#" className="footer-link">Web Development</a>
            </li>
            <li>
              <a href="#" className="footer-link">Testing Automation</a>
            </li>
            <li>
              <a href="#" className="footer-link">AWS Development Services</a>
            </li>
            <li>
              <a href="#" className="footer-link">Mobile App Development</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#FFA726] font-semibold text-lg mb-6">Platforms</h4>
          <ul className="space-y-5">
            <li>
              <a href="#" className="footer-link">Hubspot</a>
            </li>
            <li>
              <a href="#" className="footer-link">Marketo Integration Services</a>
            </li>
            <li>
              <a href="#" className="footer-link">Marketing Glossary</a>
            </li>
            <li>
              <a href="#" className="footer-link">UIPath</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-[#FFA726] font-semibold text-lg mb-6">Company</h4>
          <ul className="space-y-5">
            <li>
              <a href="#" className="footer-link">Accessibility</a>
            </li>
            <li>
              <a href="#" className="footer-link">About</a>
            </li>
            <li>
              <a href="#" className="footer-link">Contact</a>
            </li>
            <li>
              <a href="#" className="footer-link">Learn more</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t text-center border-[#6b5f5f] pt-8 mt-8">
        <p className="text-gray-900 dark:text-gray-300 text-[15px]">
© NovaNest. All rights reserved.
        </p>
      </div>
    </footer>

)
}

export default Footer