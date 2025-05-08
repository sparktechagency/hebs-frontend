import { BaseQueryApi } from "@reduxjs/toolkit/query";

export type TBook = {
  _id: string;
  name: string;
  author: string;
  description: string;
  summary: string;
  coverImage: string;
  quantity: number;
  status: string; // e.g., "instock"
  isDiscount: boolean;
  discountPrice?: {
    type: string; // e.g., "percentage"
    amount: number;
    currency: string;
  };
  price: {
    amount: number;
    currency: string;
  };
  format: string; // e.g., "paper"
  isArabic: boolean;
  bookLanguage: string; // e.g., "arabic"
  level: string; // e.g., "intermediate"
  weight: number;

  category: {
    _id: string;
    title: string;
    ageGroup: string;
  };

  grade: {
    _id: string;
    title: string;
  };

  bookCollection: {
    _id: string;
    title: string;
  };

  __v?: number;
};

export  type TUsers = {
_id:string;
name:string;
email:string;
role:string;
status:string;
}

export type TError = {
    data: {
      message: string;
      stack: string;
      success: boolean;
    };
    status: number;
  };
  export type TMeta = {
    limit: number;
    page: number;
    total: number;
    totalPage: number;
  };
  export type TResponse<T> = {
    data?: {
        result: T; 
        meta?: TMeta;
      };
  error?: TError;
  meta?: TMeta;
  success: boolean;
  message: string;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

export type TQueryParam = {
  name: string;
  value: boolean | React.Key;
};


 export type BookApiResponse = {
  statusCode: number
  status: string
  message: string
  meta: {
    totalData: number
    totalPage: number
    currentPage: number
    limit: number
  }
  data: TBook[]
}