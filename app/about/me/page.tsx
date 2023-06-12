import { Metadata } from "next";
import { FC } from "react";

interface IAboutMeProps {

}

export const metadata: Metadata = {
  title: "About me!"
}

const AboutMe: FC<IAboutMeProps> = () => {
  return (
    <h1>my name is uhhh i forogr</h1>
  )
}

export default AboutMe;