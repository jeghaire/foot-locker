import React from "react";

const NotFound = () => {
  return (
    <div
      className={"flex min-h-screen items-center justify-center text-center"}
    >
      <section className={"flex flex-col space-y-4"}>
        <h1 className={"heading-2 max-w-xl"}>
          Looks like this pair got lost in the closet - let&apos;s find it
          together!
        </h1>

        <p className={"text-base"}>
          Try finding a pair in the search bar at the top of this page.
        </p>
      </section>
    </div>
  );
};

export default NotFound;
