import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';
import Logo from '@/app/assets/footer-logo.svg'
import bigLogo from '@/app/assets/logo-big.svg'

export default function Footer() {
  return (
    <div className="relative">
      
      {/* Footer */}
      <footer className="bg-green-900 rounded-[35px] container mx-auto p-8 text-white relative h-[400px]" style={{backgroundColor: '#1a4a3a'}}>
        
        <div className="">

          <div className="w-full relative flex flex-col h-[400px] pb-16 justify-between">
            <Image 
              src={Logo} 
              alt='logo'
              className="w-16 h-16"
            />

            <Image 
              src={bigLogo} 
              alt='Big logo'
              className="w-[200px] lg:w-[800px] z-[9999] top-20 lg:-top-40 left-[100px] lg:left-[300px] absolute"
            />

            <div className="mt-auto ml-auto w-fit">
              <div className="mb-4">
                {/* Social Icons */}
                <div className="flex space-x-3">
                  <a href="#" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <Facebook className="w-5 h-5" style={{color: '#1a4a3a'}} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <Instagram className="w-5 h-5" style={{color: '#1a4a3a'}} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <Linkedin className="w-5 h-5" style={{color: '#1a4a3a'}} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
                    <Twitter className="w-5 h-5" style={{color: '#1a4a3a'}} />
                  </a>
                </div>
              </div>
                <p className="text-white text-sm opacity-80">
                  Copyright © 2025. All Rights Reserved.
                </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}