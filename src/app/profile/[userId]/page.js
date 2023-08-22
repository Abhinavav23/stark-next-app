'use client';
import React from "react";
import {useParams, useRouter} from 'next/navigation';

const User = ({params}) => {
    // const {user} = useParams();
    // console.log('user', user);

    const navigate = useRouter();

    console.log('params', params);
  const userList = [
    {
      username: "Abhinav",
      id: "1001",
    },
    {
      username: "Aswath",
      id: "1002",
    },
    {
      username: "Suraj",
      id: "1003",
    },
  ];
  return(
    <section>
      <h2>User Details</h2>
      <button onClick={() => navigate.push('/address')}>go to profile</button>
    </section>
  );
};

export default User;
