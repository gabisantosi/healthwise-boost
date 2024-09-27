import React from 'react';
import { useTranslation } from 'react-i18next';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";

const ScheduleModal = () => {
  const { t } = useTranslation();
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
        <Button 
          size="lg"
          variant="outline" 
          className="text-lg px-8 bg-transparent text-white border-white hover:bg-white hover:text-primary transition-colors"
        >
          {t('hero.scheduleButton')}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t('hero.scheduleButton')}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
          <Button onClick={handleSchedule} className="w-full">
            <CalendarIcon className="mr-2 h-4 w-4" /> {t('hero.scheduleButton')}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ScheduleModal;