// src/app/components/FontSelector.tsx

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFont } from '../redux/slices/fontSlice';
import { RootState } from '../redux/store';
import { fonts } from '../fonts/fontsConfig';

const FontSelector: React.FC = () => {
  const dispatch = useDispatch();
  const currentFont = useSelector((state: RootState) => state.font.currentFont);

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
        id="font-menu"
        aria-haspopup="true"
        aria-expanded="true"
      >
        Font
      </button>
      <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="font-menu">
          {fonts.map((font) => (
            <button
              key={font.name}
              className={`${
                currentFont === font.value ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
              } block px-4 py-2 text-sm w-full text-left hover:bg-gray-100 hover:text-gray-900`}
              role="menuitem"
              onClick={() => dispatch(setFont(font.value))}
            >
              {font.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FontSelector;