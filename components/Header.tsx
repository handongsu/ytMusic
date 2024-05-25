import Image from "next/image";
import React from "react";
import UserIcon from "./UserIcon";
import { FaChromecast } from "react-icons/fa6";
import PagePadding from "./PagePadding";
import { FiSearch } from "react-icons/fi";
import Logo from "./elements/Logo";

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="relative overflow-y-auto w-full h-full">
      <section className="relative top-0 w-full">
        <div className="absolute w-full h-[400px]">
          <Image
            fill
            className="object-cover"
            src={"https://images.unsplash.com/photo-1707833558984-3293e794031c"}
            alt={""}
          />
          <div className="absolute h-[400px] top-0 bg-black opacity-40 w-full "></div>
          <div className="absolute h-[400px] top-0 bg-gradient-to-t from-black w-full"></div>
        </div>
      </section>
      <section>
        <PagePadding>
          <div className="h-[64px] flex flex-row justify-between items-center">
            <article
              className="h-[42px] min-w-[480px] hidden lg:flex flex-row items-center
            bg-[rgba(0,0,0,0.14)] rounded-2xl px-[16px] gap-[16px] border border-neutral-500
            "
            >
              <div className="z-10">
                <FiSearch size={24} />
              </div>
              <input
                className="h-full w-full bg-transparent z-10"
                placeholder="노래, 앨범, 아티스트, 팟캐스트 검색"
                type="text"
              />
            </article>
            <article className="lg:hidden">
              <Logo />
            </article>
            <article className="flex flex-row gap-6 items-center z-10">
              <FaChromecast size={26} />
              <UserIcon />
            </article>
          </div>
        </PagePadding>
      </section>
      <section className="absolute">{children}</section>
    </header>
  );
};

export default Header;
