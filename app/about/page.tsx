import Link from "next/link";
import { FC } from "react";

interface IAboutProps {
  
}

const About: FC<IAboutProps> = () => {
  return (
    <>
    <h1>about page</h1>
    <div>
      <Link href="/about/me">Information about the creator of this undeniably great WEB SITE</Link>
    </div>
    </>
  )
}

export default About;