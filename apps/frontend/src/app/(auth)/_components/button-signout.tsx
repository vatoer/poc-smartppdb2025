"use client";
import { Button } from "@workspace/ui/components/button";
import { signOut } from "next-auth/react";

const ButtonSignout = () => {
  return (
    <div>
      <Button variant={"outline"} onClick={() => signOut()}>
        Signout
      </Button>
    </div>
  );
};

export default ButtonSignout;
