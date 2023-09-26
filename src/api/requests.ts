import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, AxiosStatic } from "axios";

import imageDetail from './image.json';
import pod from './pod.json';

export type Pod = typeof pod;
export type ImageDetail = typeof imageDetail;
export const emptyImageDetail: ImageDetail = {id: "", name: "", created_at: "", file: ""};

const apiHostName = process.env.VUE_APP_API_HOST_NAME

export const getImageList = 
async () :Promise<ImageDetail[]> => {
  try {
    const response: AxiosResponse<ImageDetail[]> = await axios.get(
      `${apiHostName}/wallpaper/image/`
    );
    console.log(response);
    return response.data;
  } catch (error: any) {
    console.log(error);
    return [emptyImageDetail];
  }
}

export const getLatestImagePromise = 
async () :Promise<ImageDetail> => {
  try {
    const response: AxiosResponse<ImageDetail> = await axios.get(
      `${apiHostName}/wallpaper/image/latest/`
    );
    console.log(response);
    return response.data;
  } catch (error: any) {
    console.log(error);
    return emptyImageDetail;
  }
}