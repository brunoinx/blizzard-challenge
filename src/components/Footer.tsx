import { useEffect, useState } from 'react';

import { Button } from './Button';

import LogoBattleNet from '/assets/logo-battle-net.png';

import ListIcon from '/assets/icons/list-icon.svg';
import ShareIcon from '/assets/icons/share.svg';
import BuyIcon from '/assets/icons/buy.svg';

import WindowsIcon from '/assets/icons/windows.svg';
import AppleIcon from '/assets/icons/apple.svg';
import LinuxIcon from '/assets/icons/linux.svg';

export function Footer() {
  const [iconSO, setIconSO] = useState('');
  const [textButton, setTextButton] = useState('');

  useEffect(() => {
    const userAgent = window.navigator.userAgent;

    if (/\((?=.*\bwindows\b).*\)/i.test(userAgent)) {
      setIconSO(WindowsIcon);
      setTextButton('Windows');
    } else if (/\((?=.*\bapple\b).*\)/i.test(userAgent)) {
      setIconSO(AppleIcon);
      setTextButton('Apple');
    } else if (/\((?=.*\blinux\b).*\)/i.test(userAgent)) {
      setIconSO(LinuxIcon);
      setTextButton('Linux');
    }
  }, []);

  return (
    <section className="bg-footer bg-cover bg-no-repeat">
      <div className="pt-16 pl-6">
        <img src={LogoBattleNet} alt="Logo do footer escrito battle net" />

        <h1 className="text-white text-3xl font-bold my-7">
          Baixe agora o battle.net
        </h1>

        <div className="grid gap-6 mb-12">
          <div className="flex items-center">
            <img src={ListIcon} alt="" />
            <span className="text-zinc-400 text-lg ml-2">
              Seus jogos em um só lugar
            </span>
          </div>

          <div className="flex items-center">
            <img src={ShareIcon} alt="" />
            <span className="text-zinc-400 text-lg ml-2">
              Conecte-se aos seus amigos
            </span>
          </div>

          <div className="flex items-center">
            <img src={BuyIcon} alt="" />
            <span className="text-zinc-400 text-lg ml-2">
              Compre jogos e itens digitais
            </span>
          </div>
        </div>

        <Button name={`Baixar para ${textButton}`} icon={iconSO} />
      </div>
    </section>
  );
}
