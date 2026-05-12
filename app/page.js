'use client'
import Image from "next/image";
import Dashboard from '@/Dashboard';
import Card from "@/components/ui/Card";
import { useState } from 'react';
import Button from "@/components/ui/Button";

export default function Home() {
  
  const [extensions, setExtensions] = useState([
    {
      id: 1,
      title:"DevLens",
      text: "Quickly inspect page layout and visualize element boundaries",
      icon: './assets/images/logo-devlens.svg',
      name:'Logo of devlens',
      status:"active",
    },
    {
      id: 2,
      title:"StyleSpy",
      text: "Instantly, analyze and copy css from any webpage element",
      icon: './assets/images/logo-style-spy.svg',
      name:'Logo of StyleSpy',
      status:"active",
      
    },
    {
      id: 3,
      title:"SpeedBoost",
      text: "Optimizes browser resource usage to accelerate page loading",
      icon: './assets/images/logo-speed-boost.svg',
      name:'Logo of StyleSpy',
      status:"inactive",
      
    },
    {
      id: 4,
      title:"JSONWizard",
      text: "Formats, validates, and pretifers JSON response in-browser",
      icon: './assets/images/logo-json-wizard.svg',
      name:'Logo of JSONWizard',
      status:"active",
      
    },
    {
      id: 5,
      title:"TabMaster Pro",
      text: "Organizes browser tabs into groups and sessions",
      icon: './assets/images/logo-tab-master-pro.svg',
      name:'Logo of TabMaster Pro',
      status:"active",
      
    },
    {
      id: 6,
      title:"Viewport Buddy",
      text: "Simulates various screen resolutions directly within the browser",
      icon: './assets/images/logo-viewport-buddy.svg',
      name:'Logo of TabMaster Pro',
      status:"inactive",
      
    },
    {
      id:7,
      title:"Makeup Notes",
      text: "Enables annotation and notes directly onto webpages for collaborative debugging",
      icon: './assets/images/logo-markup-notes.svg',
      name:'Logo of Makeup Notes',
      status:"active",
      
    },
    {
      id:8,
      title:"GridGuides",
      text: "Overlays customizable grid and alignment guides on any webpage",
      icon: './assets/images/logo-grid-guides.svg',
      name:'Logo of GridGuides',
      status:"inactive",
      
    },
    {
      id: 9,
      title:"Palette Picker",
      text: "Instantly extracts color palettes form any website page",
      icon: './assets/images/logo-palette-picker.svg',
      name:'Logo of Palette Picker',
      status:"active",
      
    },
    {
      id: 10,
      title:"Link Checker",
      text: "Scans and highlights broken links on nay page",
      icon: './assets/images/logo-link-checker.svg',
      name:'Logo of Link Checker',
      status :"active",
      
    },
    {
      id: 11,
      title:"DOM Snapshot",
      text: "Captures and exports DOM structure quickly",
      icon: './assets/images/logo-dom-snapshot.svg',
      name:'Logo of DOM Snapshot',
      status:"inactive",
      
    },
    {
      id: 12,
      title:"ConsolePlus",
      text: "Enhanced developer console with advanced filtering and logging",
      icon: './assets/images/logo-console-plus.svg',
      name:'Logo of ConsolePlus',
      status:"active",
      
    },
    
  
  ]);
  const handleRemove = (id) => {
  const updatedExtensions = extensions.filter((item) =>item.id !== id)
  setExtensions(updatedExtensions); 
  }
  const [mode, setMode] = useState("dark");
  const [filter, setFilter] = useState("all");
  const filteredExtensions = filter === 'all' ? extensions : extensions.filter((item) => item.status === filter);
  const toggleExtension = (id) => {
    setExtensions(prev =>
      prev.map(item => item.id === id ?
        {...item, status: item.status === 'active' ?
           'inactive' : 'active'} : item)
    );

};
  
  return (
    <div className="min-h-screen bg-gradient-to-b-from-[#050A1D] to-[#09153F] px-4 py-8 md:px-6 md:py-8">
      <main className={`max-w-6xl mx-auto px-5 ${mode === 'dark' ? 'bg-blue-950' : 'bg-blue-100'}`}>
        <div className="flex flex-col justify-between py-5">
                          <div className="flex flex-row justify-between py-5 px-10 items-between rounded-3xl object-contain text-white
                          bg-[#1F2535]">
                            <Image src={'/assets/images/logo.svg'}
                            alt="logo"
                            height={200}
                            width={200} 
                            className={`${mode === 'light' ? 'text-black' : 'text-white'}`}
                            />
                            
                            <Image src={'/assets/images/icon-sun.svg'}
                            alt="logo"
                            height={40}
                            width={40} 
                            onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')} className="hover:opacity-75 hover:translate-x-1 transition
                            cursor-pointer"/>
                          </div>

                            <div className="flex flex-row gap-4 justify-between items-center py-5 mt-10">
                              <div>
                                <h1 className={`text-4xl font-bold ${mode === 'light' ? 'text-black' : 'text-white'} `}>
                                    Extensions List
                                </h1>

                              </div>
                              {/* Action buttons */}
                                <div className="flex gap-1 rounded-full">
                                <Button 
                                onClick={() => setFilter('all')}
                                variant="outline"
                                className={
                                  filter === 'all'
                                  ? 'bg-orange-500 text-white'
                                  :mode === 'dark' 
                                  ? "bg-black text-white" 
                                  : "bg-white text-black"}
                                >
                                    All
                                </Button>
                                <Button 
                                onClick={() => setFilter('active')}
                                variant="outline"
                                className={
                                  filter === 'active'
                                  ? 'bg-orange-500 text-white'
                                  :mode === 'dark' 
                                  ? "bg-black text-white" 
                                  : "bg-white text-black"}
                                >
                                    Active
                                </Button>
                                <Button 
                                onClick={() => setFilter('inactive')}
                                variant="outline"
                                className={
                                  filter === 'inactive'
                                  ? 'bg-orange-500 text-white'
                                  :mode === 'dark' 
                                  ? "bg-black text-white" 
                                  : "bg-white text-black"}
                                >
                                    Inactive
                                </Button>

                                </div>

                            </div>
                        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10">
        {filteredExtensions?.map((ext) => (
          <Dashboard key={ext.id}{...ext} 
          mode={mode}
          isActive={ext.status === 'active'}
          onToggle={() => toggleExtension(ext.id) }
          onRemove={()=> handleRemove(ext.id)}
          />
        ))}
        </div>
      </main>
    </div>
  );
}
