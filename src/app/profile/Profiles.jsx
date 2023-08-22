import React from "react";
import Link from "next/link";

export const Profiles = () => {
  const userIds = ["1001", "1002", "1003", "1004"];
  return (
    <section>
      {/* <Link href="profile/1001">1001</Link>
        <Link href="profile/1002">1002</Link>
        <Link href="profile/1003">1003</Link> */}
      {userIds.map((id) => {
        return (
          <>
            <Link href={`/profile/${id}`}>{id}</Link>
            <br />
          </>
        );
      })}
    </section>
  );
};
