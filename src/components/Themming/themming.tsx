import { useCallback } from 'react';
import { useMicodeStore } from '@/src/stores';
import { Moon, Sun } from './icons';
import { ThemeButton } from './styles';

export const Themming = () => {
  const { dark, setDark } = useMicodeStore();

  const handleDark = useCallback(() => {
    setDark(dark => !dark);
  }, []);

  return (
    <ThemeButton onClick={handleDark} aria-label='themming'>
      {dark ? <Moon /> : <Sun />}
    </ThemeButton>
  );
};
