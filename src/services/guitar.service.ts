import { AxiosError } from "axios";
import { supabaseApi } from "@/apis";
import { Guitar } from "@/global";

export class GuitarService {
  static getAll = async (): Promise<Guitar[]> => {
    try {
      const { data } = await supabaseApi.get<Guitar[]>('/guitars', {
        params: {
          select: '*'
        }
      });
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data);
      }
      throw new Error("Can't fetch data!");
    }
  };
}