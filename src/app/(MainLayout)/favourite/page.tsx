'use client'
import { selectCurrentUser } from '@/redux/features/auth/authSlice';
import { useGetAllFavouritesBooksQuery } from '@/redux/features/books/bookApi';
import { useAppSelector } from '@/redux/hooks';
import React from 'react';

const FavouritePage = () => {
      const user = useAppSelector(selectCurrentUser);
      const { data: favouriteBooks } = useGetAllFavouritesBooksQuery(user?.userId);
      console.log("favrt books",favouriteBooks);
    return (
        <div>
            
        </div>
    );
};

export default FavouritePage;