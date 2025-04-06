// src/app/page.tsx
'use client'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const t = useTranslations('home')

  return (
    <main className="min-h-screen bg-white text-gray-800">

      {/* Header */}
      <header className="sticky top-0 bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">Snacky</div>
          <nav className="space-x-4 hidden md:block">
            <Link href="/">მთავარი</Link>
            <Link href="/markets">სად ვიყიდოთ</Link>
            <Link href="/sale">SALE</Link>
            <Link href="/blog">ბლოგი</Link>
            <Link href="/about">ჩვენ შესახებ</Link>
            <Link href="/contact">კონტაქტი</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 py-12 gap-6">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            100% ნატურალური არაქისი <br /> გემო რომელიც შეგიყვარდება
          </h1>
          <p className="mb-6 text-lg text-gray-600">
            შეუკვეთე უშუალოდ ჩვენი ვებგვერდიდან ან აირჩიე პლატფორმა შენთვის მოსახერხებლად.
          </p>
          <div className="space-x-4">
            <Link href="/sale">
              <button className="bg-pink-500 text-white px-6 py-3 rounded-full text-lg shadow-md hover:bg-pink-600 transition">
              {t('cta')}
              </button>
            </Link>
            <br />
            <br />
            <Link href="https://veli.store" target="_blank">
              <button className="bg-[#B3DA89] text-black px-5 py-2 rounded-full hover:brightness-90 transition">
                VELI
              </button>
            </Link>
            <Link href="https://wolt.com" target="_blank">
              <button className="bg-[#00B2E4] text-white px-5 py-2 rounded-full hover:bg-[#00A0CD] transition">
                Wolt
              </button>
            </Link>
            <Link href="https://glovoapp.com" target="_blank">
              <button className="bg-[#FEC601] text-white px-5 py-2 rounded-full hover:bg-[#e6b201] transition">
                Glovo
              </button>
            </Link>
            <Link href="https://vitaminebi.ge" target="_blank">
              <button className="bg-gradient-to-r from-[#72BD44] to-[#FFD43B] text-white px-5 py-2 rounded-full font-medium hover:brightness-95 transition">
                Vitamini.ge
              </button>
            </Link>
            <Link href="https://extra.ge/search?k=Snacky-%E1%83%90%E1%83%A0%E1%83%90%E1%83%A5%E1%83%98%E1%83%A1%E1%83%98%E1%83%A1-%E1%83%99%E1%83%90%E1%83%A0%E1%83%90%E1%83%A5%E1%83%98" target="_blank">
              <button className="bg-[#7B2FFF] text-white px-5 py-2 rounded-full hover:bg-[#6b27e6] transition">
                Extra.ge
              </button>
            </Link>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <Image
            src="/images/hero-peanut-butter.png" // <- Replace with actual image in public/images
            alt="Snacky Peanut Butter"
            width={400}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Supermarket Logos (Trust Signals) */}
      <section className="bg-gray-50 py-6">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-semibold mb-4">გაყიდვაში შემდეგ სუპერმარკეტებში:</h2>
          <div className="flex gap-4 overflow-x-auto">
            <Image src="/images/europroduct.png" alt="europroduct" width={100} height={60} />
            <Image src="/images/fresco.png" alt="fresco" width={100} height={60} />
            <Image src="/images/goodwill.png" alt="goodwill" width={100} height={60} />
            <Image src="/images/nikora.png" alt="nikora" width={100} height={60} />
            <Image src="/images/spar.png" alt="Spar" width={100} height={60} />
            <Image src="/images/schirnhofer.png" alt="schirnhofer" width={100} height={60} />
            <Image src="/images/smart.png" alt="smart" width={100} height={60} />
            {/* Add more logos as needed */}
          </div>
        </div>
      </section>

    </main>
  )
}
