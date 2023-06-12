import { FC } from "react";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "about page !!!"
}

const About: FC = () => {
  return (
    <>
    <h1>about page</h1>
    <p>hi</p>
    </>
  )
}

export default About;