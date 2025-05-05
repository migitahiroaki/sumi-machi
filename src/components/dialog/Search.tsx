"use client";
import { Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaSearch } from "react-icons/fa";

export default function Search() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="mx-8">
          <span className="text-gray-400">Search</span>
          <FaSearch className="ml-2" />
        </Button>
      </DialogTrigger>
      {/* <DialogContent className="sm:max-w-md w-full"> */}
      <DialogContent className="min-w-11/12 min-h-11/12">
        <DialogHeader>
          <DialogTitle>サイト内を検索します</DialogTitle>
          <div className="flex items-center space-x-2">
            <div className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input id="term" placeholder="検索ワードを入力" readOnly />
            </div>
            <Button type="submit" size="sm" className="px-3">
              <span className="sr-only">Copy</span>
              <Copy />
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
