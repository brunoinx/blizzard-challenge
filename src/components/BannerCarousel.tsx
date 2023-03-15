import { useState } from 'react';

import { Menu } from './Menu';
import { Button } from './Button';

import { banners } from '../data/banners';
import { gameIcons } from '../data/game-icons';
import clsx from 'clsx';

export function BannerCarousel() {
  const [bannerSelected, setBannerSelected] = useState(banners[0]);

  function handleSelectedBannerGame(game_id: string) {
    if (game_id.includes('0') || game_id.includes('1')) return null;

    const bannerSelected = banners.find(game => game.id === game_id);

    setBannerSelected(bannerSelected!);
  }

  return (
    <section
      className={clsx('w-full bg-top bg-no-repeat', {
        'bg-diablo': bannerSelected.id === 'diablo_id',
        'bg-hearthstone': bannerSelected.id === 'hearthstone_id',
        'bg-wow': bannerSelected.id === 'wow_id',
      })}
    >
      <div className="bg-black/25 w-full h-full min-h-[635px] px-6 pb-16">
        <Menu />

        <div className="mt-[51px] w-9/12">
          <h1 className="text-4xl text-white font-bold">
            {bannerSelected.title}
          </h1>

          <p className="text-lg font-medium text-zinc-300 mt-4">
            {bannerSelected.description}
          </p>

          <div className="mt-8">
            <Button name="Jogue agora" />
          </div>

          <div className="flex items-center justify-between mt-12">
            {gameIcons.map(icon => (
              <img
                key={icon.id}
                src={icon.img}
                className={clsx('cursor-pointer', {
                  'mix-blend-luminosity opacity-90':
                    icon.id !== bannerSelected.id,
                })}
                onClick={() => handleSelectedBannerGame(icon.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
