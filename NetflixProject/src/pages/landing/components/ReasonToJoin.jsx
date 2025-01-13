import React from 'react'
import ReasonCard from './ReasonCard'
import enjoy from '../../../icons/enjoyIco.svg'
import download from '../../../icons/downIco.svg'
import watch from '../../../icons/watchIco.svg'
import forKids from '../../../icons/kidsIco.svg'
import { useTranslation } from 'react-i18next';

const ReasonToJoin = () => {
  const { t } = useTranslation();

  const items = [
    {
      title: t('enjoyOnYourTV'),
      desc: t('enjoyOnYourTVDescription'),
      img: enjoy
    },
    {
      title: t('downloadYourShowsToWatchOffline'),
      desc: t('downloadYourShowsToWatchOfflineDescription'),
      img: download
    },
    {
      title: t('watchEverywhere'),
      desc: t('watchEverywhereDescription'),
      img: watch
    },
    {
      title: t('createProfilesForKids'),
      desc: t('createProfilesForKidsDescription'),
      img: forKids
    }
  ]




  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'>
      <h2 className='col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 font-medium text-[24px] text-white'>
        {t('moreReasonsToJoin')}
      </h2>
      {items.map(item => (
        <ReasonCard key={item.id} item={item} />
      ))}
    </div>
  );

}

export default ReasonToJoin