import axios, { AxiosInstance } from 'axios';
import { environment } from '@/global';

export const supabaseApi: AxiosInstance = axios.create({
  baseURL: `${environment.SUPABASE_API_URL}/rest/v1`
});