import React from 'react';
import { HIKES_PER_PAGE } from '../../helpers/constants';
import HikeCard from '../Cards/HikeCard';

export default function Hikes({ hikes, page }) {
  const startIndex = (page - 1) * HIKES_PER_PAGE;
  const selectedHikes = hikes.slice(startIndex, startIndex + HIKES_PER_PAGE);
  return selectedHikes.map((hike) => (
      <HikeCard key={hike.id} hike={hike}/>
  ));
}
