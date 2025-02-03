import {
  Bell,
  Hash,
  HelpCircle,
  Lock,
  MessageSquare,
  Mic,
  Pin,
  Search,
  Settings,
  Users,
  Volume2,
  ChevronDown,
  Trophy,
  AlertCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function CommunityChat() {
  return (
    <div className="relative flex bg-background h-screen p-5">
      {/* Left Sidebar - Server List */}
      <div className="w-[72px] bg-zinc-100 flex flex-col items-center py-3 space-y-2">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
          <span className="text-primary-foreground text-lg font-semibold">
            SL
          </span>
        </div>
        <div className="w-12 h-12 rounded-full bg-white border-2 flex items-center justify-center">
          <Users className="w-6 h-6 text-primary" />
        </div>
        <div className="w-12 h-12 rounded-full bg-white border-2 flex items-center justify-center">
          <Trophy className="w-6 h-6 text-yellow-500" />
        </div>
      </div>

      {/* Channel Sidebar */}
      <div className="w-60 bg-zinc-50/50 border-r">
        <div className="p-4 border-b">
          <h1 className="font-semibold flex items-center">
            Social Launch
            <ChevronDown className="w-4 h-4 ml-1" />
          </h1>
        </div>

        <div className="p-2">
          <div className="space-y-4">
            {/* Stats Section */}
            <div>
              <div className="px-2 flex items-center text-xs font-semibold text-zinc-500">
                <ChevronDown className="w-3 h-3 mr-1" />
                STATS
              </div>
              <div className="mt-1 space-y-0.5">
                <div className="flex items-center px-2 py-1 text-sm text-zinc-600">
                  <Lock className="w-4 h-4 mr-2" />
                  <span>Members: 3550</span>
                </div>
                <div className="flex items-center px-2 py-1 text-sm text-zinc-600">
                  <Lock className="w-4 h-4 mr-2" />
                  <span>sociallaunch</span>
                </div>
              </div>
            </div>

            {/* Important Section */}
            <div>
              <div className="px-2 flex items-center text-xs font-semibold text-zinc-500">
                <ChevronDown className="w-3 h-3 mr-1" />
                IMPORTANT
              </div>
              <div className="mt-1 space-y-0.5">
                <div className="flex items-center px-2 py-1 text-sm text-zinc-600 bg-zinc-100 rounded">
                  <AlertCircle className="w-4 h-4 mr-2 text-red-500" />
                  <span>announcements</span>
                </div>
                <div className="flex items-center px-2 py-1 text-sm text-zinc-600">
                  <Pin className="w-4 h-4 mr-2" />
                  <span>rules</span>
                </div>
                <div className="flex items-center px-2 py-1 text-sm text-zinc-600">
                  <Volume2 className="w-4 h-4 mr-2" />
                  <span>live-events</span>
                </div>
                <div className="flex items-center px-2 py-1 text-sm text-zinc-600">
                  <Hash className="w-4 h-4 mr-2" />
                  <span>chat</span>
                </div>
                <div className="flex items-center px-2 py-1 text-sm text-zinc-600">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  <span>results</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User Section */}
        <div className="absolute bottom-0 left-[72px] right-0 w-60 bg-zinc-50/50 p-3 border-t flex items-center">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="ml-2 flex-1">
            <div className="text-sm font-medium">johannes</div>
            <div className="text-xs text-zinc-500">Online</div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Mic className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navigation */}
        <div className="h-14 border-b flex items-center justify-between px-4">
          <div className="flex items-center space-x-1">
            <AlertCircle className="w-5 h-5 text-red-500" />
            <span className="font-medium">announcements</span>
            <Badge variant="secondary" className="ml-2">
              Follow
            </Badge>
          </div>
          <div className="flex items-center space-x-2">
            <div className="relative w-60">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search" className="pl-8" />
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Bell className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Notifications</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <HelpCircle className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Help</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        {/* Channel Content */}
        <div className="flex-1 overflow-auto p-4 flex justify-center items-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold">
                Welcome to Social Launch Club
              </h1>
              <p className="text-zinc-600">
                This is the beginning of this community.
              </p>
            </div>
            <div className="mt-8 p-4 bg-zinc-50 rounded-lg border">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">
                    Follow to get this club's updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
