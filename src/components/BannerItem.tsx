interface BannerItemProps {
  title: string;
  description: string;
}

export function BannerItem({ title, description }: BannerItemProps) {
  return (
    <div className="w-full bg-diablo bg-right-bottom bg-no-repeat pt-[130px]">
      <h1 className="text-4xl text-white font-bold w-9/12">{title}</h1>

      <p>{description}</p>

      <button>Jogar Agora</button>
    </div>
  );
}
