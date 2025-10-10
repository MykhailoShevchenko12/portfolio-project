import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { clearError } from '../../store/features/errorSlice';

const Error = () => {
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.info(error);
      dispatch(clearError());
    }
  }, [error, dispatch]);

  return <ToastContainer position="top-right" autoClose={2000} />;
};

export default Error;
