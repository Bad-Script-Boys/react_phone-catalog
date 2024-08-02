// useNotification.ts
import { toast } from 'react-toastify';

const useNotification = () => {
  const notifySuccess = (message: string) => {
    toast.success(message);
  };

  const notifyInfo = (message: string) => {
    toast.info(message);
  };

  const notifyError = (message: string) => {
    toast.error(message);
  };

  const notifyWarning = (message: string) => {
    toast.warning(message);
  };

  return {
    notifySuccess,
    notifyInfo,
    notifyError,
    notifyWarning,
  };
};

export default useNotification;
