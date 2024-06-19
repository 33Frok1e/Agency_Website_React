import React from 'react'
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitterX } from 'react-icons/bs';
import Icon from '../assets/Icon.png'
import { motion } from 'framer-motion';
import { fadeIn } from '../variant';

function MyFooter() {
  return (
    <Footer container>
      <div className="w-full">
        <motion.div
        variants={fadeIn('up',0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
        
        className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div className='space-y-4 mb-8'>
          <a className='text-2xl flex items-center space-x-3 font-semibold' href=""><img className='w-7 inline-block items-center' src={Icon} alt='logo' /><span className='text-[#263238]'>QUIRKY</span></a>
          <div>
            <p className='mb-1'>Copyright © 2024 Quirky ltd.</p>
            <p>All rights reserved</p>
          </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Introduction</Footer.Link>
                <Footer.Link href="#">Affiliate</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </motion.div>
        <Footer.Divider />
        <motion.div
        variants={fadeIn('down',0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
        
        className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Quircky™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitterX} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </motion.div>
      </div>
    </Footer>
  )
}

export default MyFooter