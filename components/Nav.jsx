"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProvidersS } from "next-auth/react";

const Nav = () => {
  const isUserLoggedIn = true;
  return (
    <nav className="flex-between" w-full mp-16 pt-3>
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="logoError"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo-text"> AI PROMPTER </p>
      </Link>

      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
