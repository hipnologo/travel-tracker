"use client"

import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Clock, FileText, FolderClosed, Link2, MoreVertical, Plus, Settings, Timer, Users2 } from 'lucide-react'

export default function TimeTracker() {
  return (
    <div className="h-screen w-full bg-gray-100 p-4">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-xl bg-white shadow-lg">
        <div className="flex h-full">
          {/* Sidebar */}
          <div className="w-64 border-r bg-gray-50/50 p-4">
            <div className="flex items-center gap-2 pb-6">
              <Clock className="h-5 w-5" />
              <span className="font-semibold">Travel:Tracker</span>
            </div>

            <nav className="space-y-2">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Timer className="h-4 w-4" />
                Timer
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <FileText className="h-4 w-4" />
                Travel History
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <FolderClosed className="h-4 w-4" />
                Routes
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Users2 className="h-4 w-4" />
                Transport Modes
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <FileText className="h-4 w-4" />
                Reports
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Settings className="h-4 w-4" />
                Settings
              </Button>
            </nav>

            <div className="mt-auto pt-6">
              <Card className="bg-blue-50 p-4">
                <h3 className="font-semibold">Upgrade to pro</h3>
                <p className="text-sm text-gray-600">Get detailed travel analytics and insights</p>
                <Button className="mt-4 w-full" size="sm">
                  Get started
                </Button>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center gap-4 border-b p-4">
              <Input
                className="flex-1 bg-gray-50"
                placeholder="Enter your travel destination"
                type="text"
              />
              <Button variant="ghost">Transport Mode</Button>
              <Button variant="ghost">Route</Button>
              <Button variant="ghost">
                <Link2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost">$</Button>
              <Button variant="secondary">
                <Timer className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="text-sm">
                  <div>John Doe</div>
                  <div className="text-xs text-gray-500">john@example.com</div>
                </div>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Content */}
            <div className="grid grid-cols-[1fr_300px] gap-4 p-4">
              <div className="space-y-4">
                {/* Timer Circle */}
                <Card className="p-6">
                  <div className="relative mx-auto h-48 w-48">
                    <div className="absolute inset-0 rounded-full border-4 border-gray-100" />
                    <div
                      className="absolute inset-0 rounded-full border-4 border-blue-500"
                      style={{
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                        transform: "rotate(45deg)",
                      }}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <div className="text-3xl font-bold">02:45:30</div>
                      <div className="text-sm text-gray-500">Travel Time</div>
                    </div>
                  </div>
                </Card>

                {/* Stats Cards */}
                <div className="grid grid-cols-3 gap-4">
                  <Card className="p-4">
                    <h3 className="text-sm font-medium text-gray-500">Total Distance</h3>
                    <p className="text-2xl font-bold">324 km</p>
                  </Card>
                  <Card className="p-4">
                    <h3 className="text-sm font-medium text-gray-500">Avg. Speed</h3>
                    <p className="text-2xl font-bold">65 km/h</p>
                  </Card>
                  <Card className="p-4">
                    <h3 className="text-sm font-medium text-gray-500">Total Cost</h3>
                    <p className="text-2xl font-bold">$128.50</p>
                  </Card>
                </div>
              </div>

              {/* Recent Travels */}
              <Card className="p-4">
                <div className="flex items-center justify-between pb-4">
                  <h2 className="text-lg font-semibold">Recent Travels</h2>
                  <Button size="icon" variant="ghost">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="space-y-2">
                  <Card className="p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">New York → Boston</div>
                        <div className="text-sm text-gray-500">Train</div>
                      </div>
                      <Button size="icon" variant="ghost">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                  <Card className="p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Boston → Chicago</div>
                        <div className="text-sm text-gray-500">Airplane</div>
                      </div>
                      <Button size="icon" variant="ghost">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                  <Card className="p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">Chicago → Detroit</div>
                        <div className="text-sm text-gray-500">Car</div>
                      </div>
                      <Button size="icon" variant="ghost">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </div>
                  </Card>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
