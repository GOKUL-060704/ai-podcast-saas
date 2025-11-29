"use client"
import {SignInButton, SignedIn, SignedOut, UserButton} from "@clerk/nextjs"
import {Home,Sparkles,Zap,Crown} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";


export function Header(){
  return (<div>Hi</div>)
}