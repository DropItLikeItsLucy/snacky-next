// src/components/Header.tsx
'use client'
import Link from 'next/link'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Header() {
  return (
    <header className="flex justify-between items-center p-4 shadow-md">
      <div className="text-xl font-bold">
        <Link href="/">Snacky</Link>
      </div>
      <div className="flex gap-4 items-center">
        <nav className="hidden md:flex gap-4">
          <Link href="/">მთავარი</Link>
          <Link href="/markets">სად ვიყიდოთ</Link>
          <Link href="/sale">SALE</Link>
          <Link href="/blog">ბლოგი</Link>
          <Link href="/about">ჩვენ შესახებ</Link>
          <Link href="/contact">კონტაქტი</Link>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  )
}
