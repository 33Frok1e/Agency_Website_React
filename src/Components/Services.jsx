import React from 'react'
import membership1 from '/src/assets/Membership Logo/membership1.png';
import membership2 from '/src/assets/Membership Logo/membership2.png';
import membership3 from '/src/assets/Membership Logo/membership3.png';
import { motion } from 'framer-motion';
import { fadeIn } from '../variant';

function Services() {

    const services = [
        {id: 1, title: "Membership Organisation", description: "Our membership management software provides full automation of membership renewals and payments", image: membership1 },
        {id: 2, title: "National Association", description: "Our membership management software provides full automation of membership renewals and payments", image: membership2 },
        {id: 3, title: "Clubs And Groups", description: "Our membership management software provides full automation of membership renewals and payments", image: membership3 }
    ]

  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto'>
        <motion.div 
        variants={fadeIn('up',0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}

        className='text-center my-8'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>Our Clients</h2>
            <p className='text-neutralDGrey'>We have been working with some Fortune 500+ clients</p>
            
            {/* Company Logo */}
            <div className='my-12 flex flex-wrap justify-between items-center gap-8'>
                <img src="/src/assets/Company Logo/Company1.png" alt="" />
                <img src="/src/assets/Company Logo/Company2.png" alt="" />
                <img src="/src/assets/Company Logo/Company3.png" alt="" />
                <img src="/src/assets/Company Logo/Company4.png" alt="" />
                <img src="/src/assets/Company Logo/Company5.png" alt="" />
                <img src="/src/assets/Company Logo/Company6.png" alt="" />
                <img src="/src/assets/Company Logo/Company3.png" alt="" />
            </div>
        </motion.div>

        {/* services card */}
        <motion.div
        variants={fadeIn('left',0.5)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}

        className='mt-20 md:w-1/2 mx-auto text-center'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-3'>Manage your entire community in a single system</h2>
            <p className='text-neutralDGrey'>Who is Quirky suitable for?</p>
        </motion.div>

        {/* Cards */}
        <motion.div
        variants={fadeIn('right',0.7)}
        initial="hidden"
        whileInView={'show'}
        viewport={{once: false, amount: 0.7}}
        
        className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
            {
                services.map(service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-x-4 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
                    <div>
                        <div className='bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'><img src={service.image} alt="" className='-ml-5' /></div>
                        <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>
                        <p className='text-sm text-neutralGrey'>{service.description}</p>
                    </div>
                </div>)
            }
        </motion.div>

    </div>
  )
}

export default Services