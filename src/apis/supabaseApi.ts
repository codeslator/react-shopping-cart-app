import axios, { AxiosInstance } from 'axios';
import { environment } from '@/global';

export const supabaseApi: AxiosInstance = axios.create({
  baseURL: `${environment.SUPABASE_API_URL}/rest/v1`,
  headers: {
    'Authorization': `Bearer ${environment.SUPABASE_API_KEY}`,
    'apikey': environment.SUPABASE_API_KEY
  }
});