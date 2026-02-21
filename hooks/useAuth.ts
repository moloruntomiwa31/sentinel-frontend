import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { authApi } from '../lib/api';
import { useAuthStore } from '../store/authStore';

export const useRegister = () => {
  const router = useRouter();
  
  return useMutation({
    mutationFn: authApi.register,
    onSuccess: () => {
      router.push('/auth/login');
    },
  });
};

export const useLogin = () => {
  const router = useRouter();
  const setAuth = useAuthStore((state) => state.setAuth);
  
  return useMutation({
    mutationFn: authApi.login,
    onSuccess: (data) => {
      setAuth(data.user, data.access, data.refresh);
      router.push('/dashboard');
    },
  });
};

export const useLogout = () => {
  const router = useRouter();
  const logout = useAuthStore((state) => state.logout);
  
  return () => {
    logout();
    router.push('/auth/login');
  };
};