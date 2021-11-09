import { lightTheme } from "./lightTheme";
import { darkTheme } from "./darkTheme";

const getTheme = ({ theme }: { theme: any }) => {
  const themeKeys = Object.keys(theme);
  const themeValues = Object.values(theme);

  const generatedTheme = themeKeys.map((key, index) => {
    return [key, themeValues[index]];
  });

  return generatedTheme;
};

export { lightTheme, darkTheme, getTheme };
