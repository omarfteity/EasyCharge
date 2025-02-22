import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarIcon, Wrench } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";

interface DiagnosticCardProps {
  onSchedule?: (date: Date, service: string) => void;
}

const services = [
  "Full Vehicle Diagnostic",
  "Battery Health Check",
  "Charging System Inspection",
  "Software Update",
  "Tire Rotation & Alignment",
];

export default function DiagnosticCard({
  onSchedule = () => {},
}: DiagnosticCardProps) {
  const [date, setDate] = useState<Date>();
  const [service, setService] = useState<string>();

  return (
    <Card className="w-[400px] bg-white">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wrench className="w-5 h-5" />
          Schedule Diagnostic
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Service Type</label>
          <Select onValueChange={setService}>
            <SelectTrigger>
              <SelectValue placeholder="Select service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Preferred Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <Button
          className="w-full bg-green-600 hover:bg-green-700"
          disabled={!date || !service}
          onClick={() => date && service && onSchedule(date, service)}
        >
          Schedule Service
        </Button>
      </CardContent>
    </Card>
  );
}
