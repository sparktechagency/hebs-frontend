"use client"

import { useState } from "react"
import Link from "next/link"
import { MenuOutlined, ShoppingCartOutlined } from "@ant-design/icons"
import { Button, Drawer } from "antd"
import Image from "next/image"
import logo from "@/assets/logo.png"
export default function Navbar() {
  const [open, setOpen] = useState(false)

  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  return (
    <header className="w-full bg-gradient-to-r from-[#f08080] to-[#ffeb99] px-4 py-2 md:px-10">
      <div className="mx-auto flex  items-center justify-between">
        {/* Logo */}
        <Link href="/home" className="flex items-center">
          <div className="relative h-14 w-36">
            <Image
            src={logo}
            alt="logo"
               width="100"
              height="100"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:space-x-6">
          <Link href="/kidsBookClub" className="text-sm font-medium text-white hover:text-white/80">
            KIDS BOOK CLUBS
          </Link>
          <Link href="/online-book-store" className="text-sm font-medium text-white hover:text-white/80">
            ONLINE BOOK STORE
          </Link>
          <Link href="/book-registry" className="text-sm font-medium text-white hover:text-white/80">
            BOOK REGISTRY
          </Link>
          <Link href="/about" className="text-sm font-medium text-white hover:text-white/80">
            ABOUT
          </Link>
          <Link href="/contact" className="text-sm font-medium text-white hover:text-white/80">
            CONTACT
          </Link>
          <Link href="/blog" className="text-sm font-medium text-white hover:text-white/80">
            BLOG
          </Link>
        </nav>

        {/* Auth and Cart Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <Link href="/login">
            <Button type="default" shape="round" className="bg-white text-black hover:bg-white/90">
              Log In
            </Button>
          </Link>
          <Link href="/cart">
            <Button type="default" shape="round" className="bg-white text-black hover:bg-white/90">
              <ShoppingCartOutlined style={{ marginRight: 8 }} />
              Cart
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
    
        <button className="md:hidden block" onClick={showDrawer}>
        <MenuOutlined style={{ fontSize: "24px", color: "white" }} />
        </button>

        <Drawer
          title="Menu"
          placement="right"
          onClose={onClose}
          open={open}
          styles={{
            header: { background: "linear-gradient(to right, #f08080, #ffeb99)" },
            body: { background: "linear-gradient(to right, #f08080, #ffeb99)" },
          }}
        >
          <div className="flex flex-col space-y-6 pt-4">
            <Link href="/kids-book-clubs" className="text-lg font-medium text-white hover:text-white/80">
              KIDS BOOK CLUBS
            </Link>
            <Link href="/online-book-store" className="text-lg font-medium text-white hover:text-white/80">
              ONLINE BOOK STORE
            </Link>
            <Link href="/book-registry" className="text-lg font-medium text-white hover:text-white/80">
              BOOK REGISTRY
            </Link>
            <Link href="/about" className="text-lg font-medium text-white hover:text-white/80">
              ABOUT
            </Link>
            <Link href="/contact" className="text-lg font-medium text-white hover:text-white/80">
              CONTACT
            </Link>
            <Link href="/blog" className="text-lg font-medium text-white hover:text-white/80">
              BLOG
            </Link>
            <div className="flex flex-col space-y-3 pt-4">
              <Link href="/login">
                <Button type="default" shape="round" block className="bg-white text-black hover:bg-white/90">
                  Log In
                </Button>
              </Link>
              <Link href="/cart">
                <Button type="default" shape="round" block className="bg-white text-black hover:bg-white/90">
                  <ShoppingCartOutlined style={{ marginRight: 8 }} />
                  Cart
                </Button>
              </Link>
            </div>
          </div>
        </Drawer>
      </div>
    </header>
  )
}

