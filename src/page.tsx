import React from 'react';
import { ConfigProvider, theme } from 'antd';

import { RouterProvider } from 'react-router-dom';

import { getRouter } from './router';

import { selectTheme } from '@/store/features/theme.slice';
// import { useGetCategoriesQuery } from '@/store/apis/categories';

import { useAppSelector } from '@/hooks/redux';
import { useTheme } from '@/hooks/useTheme';

import Loading from '@/components/Loading';
// import { selectCategories } from './store/features/categories.slice';
// import { type CategoryType } from 'typings/categories';

const Page = () => {
  const themeToken = useTheme();
  const currentTheme = useAppSelector(selectTheme);
  // const categories: CategoryType[] = useAppSelector(selectCategories);

  const { defaultAlgorithm, darkAlgorithm } = theme;

  // const { isLoading: categoriesIsLoading } = useGetCategoriesQuery({});

  return (
    // !categoriesIsLoading ? (
    <ConfigProvider
      theme={{
        algorithm: currentTheme === 'dark' ? darkAlgorithm : defaultAlgorithm,

        token: {
          // colorPrimary: themeToken.bgtPrimaryColor,
          // fontFamily: themeToken.bgtFontFamily,
          ...themeToken,
        },
        components: {
          Layout: {
            // triggerBg: themeToken.bgtWhiteColor,
            // triggerColor: themeToken.bgtPrimaryColor,
          },

          Menu: {
            // colorIcon: themeToken.bgtWhiteColor,
            // itemSelectedBg: themeToken.bgtLightColor,
            // iconSize: 10,
          },
        },
        cssVar: false,
        hashed: true,
      }}
    >
      <React.Suspense fallback={<Loading />}>
        <RouterProvider router={getRouter()} />
      </React.Suspense>
    </ConfigProvider>
  );
  // ) : (
  //   <Loading />
  // );
};

export default Page;
