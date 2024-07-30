import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { userId } = auth();
  return (
    <div className="border-[1px] mx-auto rounded-full mt-8 sticky top-0 z-50 bg-white">
      <ul className="flex justify-between py-4 px-8">
        {!userId ? (
          <></>
        ) : (
          <>
            <Link href="/dashboard">
              <li>Dashboard</li>
            </Link>
            <Link href="/admins">
              <li>Adminstrators</li>
            </Link>
            <Link href="/applicationdetails">
              <li>App Details</li>
            </Link>
            <Link href="/manage">
              <li>Manage</li>
            </Link>
          </>
        )}
        <div className="flex gap-6 items-center justify-center w-full">
          {!userId ? (
            <>
              <Link href="/sign-up">
                <li>Home</li>
              </Link>
              <Link href="/sign-in">
                <li>Use Case</li>
              </Link>
              <Link href="/sign-up">
                <li>Features</li>
              </Link>
              <Link href="/sign-up">
                <li>Team</li>
              </Link>
            </>
          ) : (
            <>
              <Link href="/profile">
                <li>Profile</li>
              </Link>
              <li className="flex items-center">
                <UserButton />
              </li>
            </>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
