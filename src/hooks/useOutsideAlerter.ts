import { useEffect, RefObject, Dispatch, SetStateAction } from 'react';

export function useOutsideAlerter(
  ref: RefObject<HTMLElement>,
  setState: Dispatch<SetStateAction<boolean>>
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setState(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}
