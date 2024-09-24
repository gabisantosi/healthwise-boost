import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";

const ScheduleModal = () => {
  const [date, setDate] = React.useState(new Date());

  const handleSchedule = () => {
    const formattedDate = date.toISOString().split('T')[0];
    const eventDetails = encodeURIComponent('Consultoria Kure Saúde');
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${eventDetails}&dates=${formattedDate}/${formattedDate}&details=Reunião de consultoria com Kure Saúde`;
    window.open(calendarUrl, '_blank');
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="text-lg px-8 text-white border-white hover:bg-white/20">
          Agende uma Consultoria
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Agende sua Consultoria</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
          <Button onClick={handleSchedule} className="w-full">
            <CalendarIcon className="mr-2 h-4 w-4" /> Agendar no Google Calendário
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ScheduleModal;