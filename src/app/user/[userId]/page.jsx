import Header from '@/app/_components/Header';
import UserInfo from './_userInfo';
import React from 'react';

const UserPage = async ({ params }) => {
  const { userId } = await params;

  return (
    <>
      <Header />

      {/* Main container */}
        <UserInfo uId={userId} />

    </>
  );
};

export default UserPage;
