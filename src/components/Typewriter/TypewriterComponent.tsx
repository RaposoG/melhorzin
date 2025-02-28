"use client";
import Typewriter from "typewriter-effect";

export default function TypewriterComponent() {
  return (
    <h1 className="hidden flex-wrap pb-10 lg:block xl:text-6xl 2xl:text-7xl">
      <Typewriter
        options={{
          strings: ["I'm Matheus Souza."],
          autoStart: true,
          loop: true,
        }}
      />
    </h1>
  );
}
