import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import React from "react";

const Home = () => {
  return (
    <SignedIn>
      <h1>PUSSYnDICK</h1>
      <UserButton />
    </SignedIn>
  );
};

export default Home;
