import { Magic } from 'magic-sdk';

// Construct with an API key:
const createMagic = () => {
  return (
    typeof window !== "undefined" && 
    new Magic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_API_KEY)
  );
};

export const magic = createMagic();

console.log("Magic setup: ", magic);
