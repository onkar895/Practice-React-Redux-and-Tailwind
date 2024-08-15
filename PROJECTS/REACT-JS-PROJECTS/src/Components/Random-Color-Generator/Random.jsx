import React, { useEffect, useState } from 'react';

const Random = () => {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#000000');

  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  // Hexadecimal (hex) is a numbering system that uses 16 symbols to represent numbers, including the digits 0–9 and the letters A–F. In hex, each digit can represent a value from 0–15 in decimal, with A–F representing 10–15. For example, A represents 10, B represents 11, and so on.
  const handleCreateRandomHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  };

  const handleCreateRandomRgbColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  useEffect(() => {
    if (typeOfColor === 'rgb') handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  const Effects = "bg-white px-5 py-1 rounded-md hover:brightness-150 hover:transition-transform hover:ease-in-out hover:duration-500 hover:-translate-y-1 transition-transform duration-500 group-hover:opacity-80 group-hover:bg-black group-hover:text-white hover:!bg-white hover:!text-black hover:!opacity-100"

  return (
    <>
      <div
        className="w-[100vw] h-[100vh] block m-auto text-center relative"
        style={{ backgroundColor: color }}
      >
        <div className='space-y-10 py-5 text-black font-bold absolute top-1/4 left-1/2 transform -translate-x-1/2 max-sm:w-[100vw]'>
          <h1 className="text-4xl text-white ">Random Color Generator</h1>
          <div className='group space-x-5 max-sm:space-y-5'>
            <button
              className={Effects}
              onClick={() => setTypeOfColor('hex')}
            >
              Create HEX Color
            </button>
            <button
              className={Effects}
              onClick={() => setTypeOfColor('rgb')}
            >
              Create RGB Color
            </button>
            <button
              className={Effects}
              onClick={typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}
            >
              Create Random Color
            </button>
          </div>
          <div>
            <div className="bg-white rounded-md block m-auto w-[35vw] max-sm:w-[85vw] hover:brightness-150 font-bold text-2xl py-5 ">
              <h2>{typeOfColor === 'rgb' ? 'Rgb Color' : 'Hex Color'}</h2>
              <h3>{color}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Random;
