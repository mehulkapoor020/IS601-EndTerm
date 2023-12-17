'use client';

import { getLocalStorage, setLocalStorage } from '../../lib/storageHelper';
import { useState, useEffect } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure } from "@nextui-org/react";


export default function CookieBanner() {

    const storedCookieConsent = getLocalStorage("cookie_consent", null)
    const [cookieConsent, setCookieConsent] = useState(storedCookieConsent);

    useEffect(() => {
        const newValue = cookieConsent ? 'granted' : 'denied'

        window.gtag("consent", 'update', {
            'analytics_storage': newValue
        });

        setLocalStorage("cookie_consent", cookieConsent)

        //For Testing
        console.log("Cookie Consent: ", cookieConsent)

    }, [cookieConsent]);
  

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className={`z-50 mx-auto w-full fixed bottom-0 left-0 right-0 flex px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4 bg-gray-700 rounded-lg shadow ${cookieConsent != null ? "hidden" : "flex"} `}>

      <div className='text-center'>
        <p>We use cookies to improve your experience. By continuing to browse the site, you agree to our <span className='underline cursor-pointer' onClick={onOpen}>Policy.</span></p>
      </div>
      <Modal size='5xl' isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior="inside">
        <ModalContent className='text-warning-900 bg-warning-300'>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                "hi"
              </ModalHeader>
              <ModalBody>
                "hi"
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>


      <div className='flex gap-2'>
        <Button
          onClick={() => { setCookieConsent(false)}}
          color='warning'
          size='lg'
          className='text-xl font-bold'
        >
          Decline
        </Button>
        <Button
          onClick={() => {setCookieConsent(true)}}
          color='warning'
          size='lg'
          className='text-xl font-bold'
        >
          Allow Cookies
        </Button>
      </div>
    </div>
  )
}
