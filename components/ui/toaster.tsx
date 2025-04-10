import { toast } from 'react-toastify';

export const toastError = (message: String) => {
  toast.error(message, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });
};

export const toastSuccess = (message: String) => {
  toast.success(message, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });
};
export const toastInfo = (message: String) => {
  toast.info(message, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  });
};
