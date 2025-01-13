import FAQItem from './FAQItem'
import { useState } from 'react'
import { useTranslation } from 'react-i18next';


const FAQ = () => {
    const [openItem, setOpenItem] = useState(null)
    const { t } = useTranslation();

    const items = [
        {
            title: t('whatIsNetflix'),
            desc: t('whatIsNetflixDesc'),
            id: 1
        },
        {
            title: t('howMuchDoesNetflixCost'),
            desc: t('howMuchDoesNetflixCostDesc'),
            id: 2
        },
        {
            title: t('whereCanIWatch'),
            desc: t('whereCanIWatchDesc'),
            id: 3
        },
        {
            title: t('howDoICancel'),
            desc: t('howDoICancelDesc'),
            id: 4
        },
        {
            title: t('whatCanIWatchOnNetflix'),
            desc: t('whatCanIWatchOnNetflixDesc'),
            id: 5
        },
        {
            title: t('isNetflixGoodForKids'),
            desc: t('isNetflixGoodForKidsDesc'),
            id: 6
        },
        {
            title: t('whyAmISeeingThisLanguage'),
            desc: t('whyAmISeeingThisLanguageDesc'),
            id: 7
        },
    ]

  return (
    <div className='mt-[64px]'>
        <h2 className='text-[24px] font-medium text-white mb-4'>{t('faq')}</h2>
        <div className='flex flex-col gap-[8px]'>
            {
                items.map(item => <FAQItem item={item} openItem={openItem} setOpenItem={setOpenItem}/>)
            }
        </div>
    </div>
  )
}

export default FAQ