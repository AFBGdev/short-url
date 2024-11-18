import { toast } from 'react-toastify';

export function useNotify() {
  const notify = (message: string) => {
    toast(message);
  }
  
  return {
    notify
  }
}