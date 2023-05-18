// 'use client'

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Image from "next/image"
import CursorHoverster from "@/components/cursor-hoverster"


export default function IndexPage() {
  return (
    <>
      {/* TODO: How can i put the image in the background.. absolute / relative thingy */}

      <section className="flex flex-col items-center min-h-screen justify-center text-center relative overflow-hidden">

        <div className="flex flex-col relative z-10 gap-6">
          <div className="flex max-w-[980px] flex-col items-center gap-2 ">

            <h1 className="text-3xl font-medium leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-700 to-slate-900 mix-blend-difference">
              <span className="block">Shapping web</span>
              <span className="block">that will captivate</span>
              <span className="block">the world.</span>
            </h1>

          </div>

          <div className="flex gap-4 justify-center">
            <Link
              href={siteConfig.links.webxdao_getstarted}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({ size: "lg" })}
            >
              Get started
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.webxdao_gh}
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              <Icons.gitHub className="h-5 w-5 mr-2" />
              GitHub
            </Link>
          </div>

          <div className="flex flex-col items-center gap-4 mt-10">
            <p className="max-w-[700px] text-lg text-slate-900 dark:text-white sm:text-xl">
              Our community is based on open-source principles and e're focused on shaping the future of the web. Join us as we collaborate on projects, share knowledge, and build community.
            </p>
          </div>
        </div>

        <div className="absolute">
          <Image src="/12.png" width={1200} height={1200} alt="logo" className="mix-blend-difference" />
        </div>

        <Image src='/flying-card-001.png' alt="flying card 001" width={135} height={165} className="absolute top-[12rem] left-[12rem]" />

        <Image src='/flying-card-002.png' alt="flying card 001" width={208} height={259} className="absolute bottom-[15rem] right-[12rem]" />
        <CursorHoverster />
      </section>


      {/* Features */}
      {/* <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 justify-center text-center">
        <div className="flex max-w-[980px] flex-col items-center gap-2">

          <h3 className="text-xl font-extrabold leading-tight tracking-tighter sm:text-2xl md:text-3xl lg:text-2xl px-32">
            Become an integral part of a dynamic and vibrant network of like-minded developers
          </h3>
          <div className="flex gap-4">

            <div className="flex items-center">
            <Icons.twitter className="h-5 w-5 mr-1 fill-current" />
              <span className="">Twitter</span>
            </div>

            <div className="flex items-center">
              <Icons.discord className="h-5 w-5 mr-1 fill-current" />
              <span className="">Discord</span>
            </div>
          </div>
        
        </div>
      </section> */}

      {/* Blurbs: not ok.. i should not use grid */}
      {/* <section className="flex">
        
          <div className="flex my-12 gap-8">

            <div className="flex flex-col gap-3">
              <div className="shadow-lg p-8 rounded-md border-2 border-transparent flex justify-center">
                <Icons.users className="h-5 w-5 mr-1" />
                </div>
              <div className="font-bold text-lg">
                Collaborate
              </div>
              <span className="text-sm">Collaborate with other members to achieve
                common goals and objectives.</span>
            </div>
            
            <div className="flex flex-col gap-3">
              <div className="shadow-lg p-8 rounded-md border-2 border-transparent flex justify-center">
              <Icons.zap className="h-5 w-5 mr-1" />


              </div>
              <div className="font-bold text-lg">
                Blockchain
              </div>
              <span className="text-sm">Dedicated to exploring new ways to leverage
                the power Of this transformative technology.</span>
            </div>

            <div className="flex flex-col gap-3">
              <div className="shadow-lg p-8 rounded-md border-2 border-transparent flex justify-center">
              <Icons.rocket className="h-5 w-5 mr-1" />
              </div>
              <div className="font-bold text-lg">
                Decentralization
              </div>
              <span className="text-sm">Operates in a decentralized manner, giving
                power to its community members.</span>
            </div>

          </div>
      </section> */}
    </>
  )
}
