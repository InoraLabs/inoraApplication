import Image from "next/image";
import Link from "next/link";
export default function Home() {
    return <div className="flex justify-center items-center gap-5">
      <Link href="/dashboard">dashboard</Link>
      <Link href="/domaindetails">domian details</Link>
      <Link href="/pastlessons">pastlessons</Link>
      <Link href="/profile">profile</Link>

    </div>;
}
