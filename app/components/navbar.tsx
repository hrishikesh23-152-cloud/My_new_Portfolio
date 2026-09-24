"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/app/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ", className)}
    > 
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home" href="#home" />
        
        <MenuItem setActive={setActive} active={active} item="Projects" href="#projects">
          <div className="flex flex-col space-y-4 text-sm min-w-[200px]">
            <HoveredLink href="https://github.com/hrishikesh23-152-cloud/Node-js-microservices-kafka" target="_blank">
              <span className="font-semibold text-white text-xs">Event-Driven Microservices</span>
              <p className="text-[10px] text-neutral-400">Kafka, Node.js, PostgreSQL & Docker</p>
            </HoveredLink>
            <HoveredLink href="https://github.com/hrishikesh23-152-cloud" target="_blank">
              <span className="font-semibold text-white text-xs">API Monitoring System</span>
              <p className="text-[10px] text-neutral-400">RabbitMQ, Redis, Node.js & Docker</p>
            </HoveredLink>
            <HoveredLink href="https://github.com/hrishikesh23-152-cloud/Resume-Analyzer" target="_blank">
              <span className="font-semibold text-white text-xs">Resume AI Analyzer</span>
              <p className="text-[10px] text-neutral-400">RAG-based Technical Review Engine</p>
            </HoveredLink>
            <HoveredLink href="https://github.com/hrishikesh23-152-cloud/Terminal-AI-Agent" target="_blank">
              <span className="font-semibold text-white text-xs">Terminal AI Agent</span>
              <p className="text-[10px] text-neutral-400">Local Shell CLI AI Assistant</p>
            </HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Skills" href="#skills" />

        <MenuItem setActive={setActive} active={active} item="Experience" href="#experience">
          <div className="flex flex-col space-y-4 text-sm min-w-[200px]">
            <div className="flex flex-col">
              <span className="font-semibold text-white text-xs">Sumato Globaltech</span>
              <span className="text-[10px] text-neutral-400">Treadmill Game ESP32 BLE Integration</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-white text-xs">IOCL</span>
              <span className="text-[10px] text-neutral-400">Refinery Maintenance ML</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-white text-xs">NIELIT Guwahati</span>
              <span className="text-[10px] text-neutral-400">Cardiac Disease Analytics</span>
            </div>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Contact" href="#contact" />
      </Menu>
    </div>
  );
}
export default Navbar;

