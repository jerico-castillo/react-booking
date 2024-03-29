import { QueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Hotel, HotelCountByType } from "../types/hotelType";

export const queryClient = new QueryClient();

export const fetchHotelCountByCity = async (url: string): Promise<string[]> => {
  try {
    const response = await axios.get("http://localhost:8800/api" + url);
    return response.data;
  } catch (error) {
    // 에러 처리 로직
    console.error(error);
    throw error; // 에러를 다시 throw하여 컴포넌트에서 처리할 수 있도록 합니다.
  }
};

export const fetchHotelCountByType = async (
  url: string
): Promise<HotelCountByType[]> => {
  try {
    const response = await axios.get("http://localhost:8800/api" + url);
    return response.data;
  } catch (error) {
    // 에러 처리 로직
    console.error(error);
    throw error; // 에러를 다시 throw하여 컴포넌트에서 처리할 수 있도록 합니다.
  }
};

export const fetchHotelByHotelId = async (url: string): Promise<Hotel> => {
  try {
    const response = await axios.get("http://localhost:8800/api" + url);
    return response.data;
  } catch (error) {
    // 에러 처리 로직
    console.error(error);
    throw error; // 에러를 다시 throw하여 컴포넌트에서 처리할 수 있도록 합니다.
  }
};

export const fetchHotelData = async (url: string): Promise<Hotel[]> => {
  try {
    const response = await axios.get("http://localhost:8800/api" + url);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// export const fetchHotelByPriceRange = async (
//   url: string
// ): Promise<HotelsByPriceRange[]> => {
//   try {
//     const response = await axios.get("http://localhost:8800/api" + url);
//     return response.data;
//   } catch (error) {
//     // 에러 처리 로직
//     console.error(error);
//     throw error; // 에러를 다시 throw하여 컴포넌트에서 처리할 수 있도록 합니다.
//   }
// };

// export const fetchHotelByDestination = async (
//   url: string
// ): Promise<HotelsByPriceRange[]> => {
//   try {
//     const response = await axios.get("http://localhost:8800/api" + url);
//     return response.data;
//   } catch (error) {
//     // 에러 처리 로직
//     console.error(error);
//     throw error; // 에러를 다시 throw하여 컴포넌트에서 처리할 수 있도록 합니다.
//   }
// };
