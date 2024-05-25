import React from 'react'
import { Input } from "@/components/ui/input"
import { BeakerIcon } from '@heroicons/react/24/solid'

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import IconOne from '../icons/IconOne'
  

function VentEmergent() {
  return (
<>
<Dialog>
<DialogTrigger className='bg-gradient-to-r font-sans text-xs h-20 w-20 from-cyan-500 to-blue-500 mx-auto p-2 text-white m-2 rounded-md'>
    <div className='flex flex-col items-center justify-center'>
        <IconOne />
        <p>Component one</p>
    </div>
</DialogTrigger>
    <DialogContent>
        <DialogHeader>
            <DialogTitle>
                <div className='flex space-x-2'>
                    <IconOne/>
                    <p>Are you absolutely sure?</p>
                </div>
            </DialogTitle>
            <DialogDescription asChild="asChild">
                <div>
                    <p className=''>Exction Description One</p>
                    <div className='flex-col  divide-y divide-stone-200  w-full border-x  border-y  mx-auto'>
                        <div className='flex mx-auto'>
                            <label className='w-1/2 px-1 text-stone-600'>option 1</label>
                            <Input type="email" placeholder="Email"/>
                        </div>
                        <div className='flex mx-auto '>
                            <label className='w-1/2 px-1 text-stone-600 '>option 2</label>
                            <Input type="email" placeholder="Email"/>
                        </div>
                        <div className='flex mx-auto'>
                            <label className='w-1/2 px-1 text-stone-600 '>option 3</label>
                            <Input type="email" placeholder="Email"/>
                        </div>
                        <div className='flex mx-auto'>
                            <label className='w-1/2 px-1 text-stone-600'>option 4</label>
                            <Input type="email" placeholder="Email"/>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='pt-3'>Exction Description One</p>
                    <div className='flex-col  divide-y divide-stone-200  w-full border-x  border-y  mx-auto'>
                        <div className='flex mx-auto'>
                            <label className='w-1/2 px-1 text-stone-600'>option 1</label>
                            <Input type="email" placeholder="Email"/>
                        </div>
                        <div className='flex mx-auto '>
                            <label className='w-1/2 px-1 text-stone-600 '>option 2</label>
                            <Input type="email" placeholder="Email"/>
                        </div>
                        <div className='flex mx-auto'>
                            <label className='w-1/2 px-1 text-stone-600 '>option 3</label>
                            <Input type="email" placeholder="Email"/>
                        </div>
                        <div className='flex mx-auto'>
                            <label className='w-1/2 px-1 text-stone-600'>option 4</label>
                            <Input type="email" placeholder="Email"/>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='pt-3'>Exction Description One</p>
                    <div className='flex-col  divide-y divide-stone-200  w-full border-x   border-y  mx-auto'>
                        <div className='flex mx-auto'>
                            <label className='w-1/2 px-1 text-stone-600'>option 1</label>
                            <Input type="email" placeholder="Email"/>
                        </div>
                        <div className='flex mx-auto '>
                            <label className='w-1/2 px-1 text-stone-600 '>option 2</label>
                            <Input type="email" placeholder="Email"/>
                        </div>
                        <div className='flex mx-auto'>
                            <label className='w-1/2 px-1 text-stone-600 '>option 3</label>
                            <Input type="email" placeholder="Email"/>
                        </div>
                        <div className='flex mx-auto'>
                            <label className='w-1/2 px-1 text-stone-600'>option 4</label>
                            <Input type="email" placeholder="Email"/>
                        </div>
                    </div>
                </div>
                


            </DialogDescription>
        </DialogHeader>
    </DialogContent>
</Dialog>




</>

  )
}

export default VentEmergent