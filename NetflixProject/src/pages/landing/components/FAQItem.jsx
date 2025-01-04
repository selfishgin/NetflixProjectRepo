import React from 'react'
import plus from "../../../icons/plus.svg"
import { motion, AnimatePresence } from "motion/react"

const FAQItem = ({ item, openItem, setOpenItem }) => {
    const itemOpen = openItem === item.id

    return (
        <button onClick={() => {
            setOpenItem(prevState => prevState !== item.id ? item.id : null)
        }
        } className='bg-[#2D2D2D] w-full'>
            <div className='flex items-center justify-between px-[24px] py-[28px] border-b-[1px] border-black hover:bg-[#404040] transition duration-200 ease-in'>
                <h3 className='text-[24px] text-white'>{item.title}</h3>
                <img className={`${itemOpen && "rotate-45"}`} src={plus} alt="" />
            </div>

            <AnimatePresence initial={false}>
                {itemOpen && (
                    <motion.section
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { height: 0 }
                        }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                        <div className='px-[24px] py-[28px]'>
                            <p className='text-left text-[24px] text-white'>
                                {item.desc.includes("[break]") ? (   /* bunu yaziram ki [break] olmayan textlerde <br /> ishlemesin */
                                    <>
                                        {item.desc.split("[break]")[0]}
                                        <br />
                                        <br />
                                        {item.desc.split("[break]")[1]}
                                    </>
                                ) : (
                                    item.desc
                                )}

                            </p>
                        </div>
                    </motion.section>
                )}
            </AnimatePresence>
        </button>
    )
}

export default FAQItem