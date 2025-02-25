import { ISetState } from '@/types';
import React from 'react';
import Image, { StaticImageData } from 'next/image';

const Gender = ({
  name,
  img,
  selected,
  setSelected,
}: {
  name: string;
  img: StaticImageData;
  selected: string | null;
  setSelected: ISetState<string | null>;
}) => {
  const handleSelected = (name: string) => {
    if (selected === name) {
      setSelected(null);
    } else {
      setSelected(name);
    }
  };

  return (
    <div
      onClick={() => handleSelected(name)}
      className={`flex flex-col items-center justify-center px-4 py-1 rounded-lg shadow-[4px_4px_4px_rgba(0,0,0,0.25)] cursor-pointer ${
        selected === name ? ' border-2 border-orange ' : 'border-0'
      }`}
    >
      <Image src={img} alt='' />
      <p>{name}</p>
    </div>
  );
};

export default Gender;
