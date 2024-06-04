import React from 'react'
import { MdOutlineArrowRightAlt } from 'react-icons/md'

function Blog() {

    const blogs = [
        {id: 1, title: "Creating Streamlined Safeguarding Processes with OneRen", image:"/src/assets/Blog/blog1.png"},
        {id: 2, title: "What are your safeguarding responsibilities and how can you manage them?", image:"/src/assets/Blog/blog2.png"},
        {id: 3, title: "Revamping the Membership Model with Triathlon Australia", image:"/src/assets/Blog/blog3.png"}
    ]

  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12'>
        <div className='text-center md:w-1/2 mx-auto'>
            <h2 className='text-4xl font-semibold text-neutralDGrey mb-4'>Caring is the new marketing</h2>
            <p className='text-sm text-neutralDGrey md:w-3/4 mb-8 mx-auto'>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lots more​</p>
        </div>
        {/* All Blogs */}
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 items-center justify-between'>
            {blogs.map(blog => <div key={blog.id} className='mx-auto relative mb-12 cursor-pointer' >
                <img src={blog.image} alt="" />
                <div>
                    <h3>{blog.title}</h3>
                    <div className='flex items-center gap-8'>
                      <a href="/" className='font-bold text-brandPrimary hover:text-neutralDGrey'>Read More <MdOutlineArrowRightAlt size={20} className='inline-block ml-2' /></a>
                    </div>
                </div>
            </div>)}
        </div>
    </div>
  )
}

export default Blog