interface ColorsDevices {
  [key: string]: string;
}

export function colorNameToRgb(colorName: string) {
  const colorDictionary: ColorsDevices = {
    black: 'rgb(0, 0, 0)',
    white: 'rgb(255, 255, 255)',
    red: 'rgb(231 51 51 / 91%)',
    green: 'rgb(139 222 181 / 69%)',
    blue: 'rgb(67 67 133)',
    yellow: 'rgb(248 255 47 / 67%)',
    cyan: 'rgb(0, 255, 255)',
    magenta: 'rgb(255, 0, 255)',
    silver: 'rgb(192, 192, 192)',
    gray: 'rgb(128, 128, 128)',
    maroon: 'rgb(128, 0, 0)',
    olive: 'rgb(128, 128, 0)',
    purple: 'rgb(87 24 87 / 39%)',
    teal: 'rgb(0, 128, 128)',
    navy: 'rgb(0, 0, 128)',
    gold: 'rgb(255 180 52 / 53%)',
    pink: 'rgb(255, 192, 203)',
    rosegold: 'rgb(241 191 199)',
    lightblue: 'rgb(173, 216, 230)',
    darkblue: 'rgb(0, 0, 139)',
    lightgreen: 'rgb(144, 238, 144)',
    darkgreen: 'rgb(0, 100, 0)',
    lightgray: 'rgb(211, 211, 211)',
    darkgray: 'rgb(169, 169, 169)',
    midnight: 'rgb(74 74 85)',
    spacegray: 'rgb(79,91,102)',
    midnightgreen: 'rgb(40 55 42 / 82%)',
    coral: 'rgb(255, 127, 80)',
    graphite: 'rgb(65, 66, 76)',
    sierrablue: 'rgb(191, 218, 247)',
    spaceblack: 'rgb(51, 51, 52)',
    'sky blue': 'rgb(135, 206, 235)',
    'space gray': 'rgb(79,91,102)',
    'rose gold': 'rgb(241 191 199)',
  };

  colorName = colorName.toLowerCase();

  return colorDictionary[colorName] || 'Unknown color';
}
