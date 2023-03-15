import Logo from '/assets/logo-blizzard.png';
import MenuIcon from '/assets/banner-hero/icons/menu.svg';

export function Menu() {
  return (
    <header className="w-full flex justify-between py-6">
      <img src={Logo} alt="Logo dá página escrito Blizzard" />

      <img src={MenuIcon} alt="ícone de menu" className="lg:collapse" />
    </header>
  );
}
