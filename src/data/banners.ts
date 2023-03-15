import DiabloHero from '/assets/banner-hero/games/diablo-bg.png';
import DiabloLogo from '/assets/banner-hero/games/diablo-logo.png';
import DiabloGif from '/assets/banner-hero/games/diablo-animation.gif';
import DiabloGifCover from '/assets/banner-hero/games/diablo-animation-cover.png';

import HearthstoneHero from '/assets/banner-hero/games/hearthstone-bg.png';
import HearthstoneLogo from '/assets/banner-hero/games/hearthstone-logo.png';
import HearthstoneGif from '/assets/banner-hero/games/hearthstone-animation.gif';
import HearthstoneGifCover from '/assets/banner-hero/games/hearthstone-animation-cover.png';

import WowHero from '/assets/banner-hero/games/wow-bg.png';
import WowLogo from '/assets/banner-hero/games/wow-logo.png';
import WowGif from '/assets/banner-hero/games/wow-animation.gif';
import WowGifCover from '/assets/banner-hero/games/wow-animation-cover.png';


export interface BannerProps {
  id: string;
  title: string;
  description: string;
  banner_hero: string;
  logo: string;
  gif_animated: string
  gif_cover: string;
}

export const banners: BannerProps[] = [
  {
    id: 'diablo_id',
    title: 'Retorne à escuridão com o game Diablo IV',
    description: 'O retorno de Lilith traz uma era de escuridão e sofrimento',
    banner_hero: DiabloHero,
    logo: DiabloLogo,
    gif_animated: DiabloGif,
    gif_cover: DiabloGifCover
  },
  {
    id: 'hearthstone_id',
    title: 'Novo pacote de expansão de Hearthstone',
    description: 'A Horda e a Aliança se encontraram no Vale Alterac para lutar',
    banner_hero: HearthstoneHero,
    logo: HearthstoneLogo,
    gif_animated: HearthstoneGif,
    gif_cover: HearthstoneGifCover
  },
  {
    id: 'wow_id',
    title: 'Desbrave as Terras Sombrias em Shadowlands!',
    description: 'O que jaz além do mundo que você conhece?',
    banner_hero:WowHero,
    logo:WowLogo,
    gif_animated:WowGif,
    gif_cover:WowGifCover
  },
];
