import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';



const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

@Component({
  selector: 'app-connected',
  templateUrl: './connected.component.html',
  styleUrls: ['./connected.component.css']
})


export class ConnectedComponent {

  page: number = 1;
  totalPages: number;
  isLoaded: boolean = false;

  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }

  nextPage() {
    this.page++;
  }

  prevPage() {
    this.page--;
  }
  
    view: string = 'month';
  
    viewDate: Date = new Date();
  
    events: CalendarEvent[] = [
      {
        title: 'Editable event',
        color: colors.yellow,
        start: new Date(),
        actions: [
          {
            label: '<i class="fa fa-fw fa-pencil"></i>',
            onClick: ({ event }: { event: CalendarEvent }): void => {
              console.log('Edit event', event);
            }
          }
        ]
      },
      {
        title: 'Deletable event',
        color: colors.blue,
        start: new Date(),
        actions: [
          {
            label: '<i class="fa fa-fw fa-times"></i>',
            onClick: ({ event }: { event: CalendarEvent }): void => {
              this.events = this.events.filter(iEvent => iEvent !== event);
              console.log('Event deleted', event);
            }
          }
        ]
      },
      {
        title: 'Non editable and deletable event',
        color: colors.red,
        start: new Date()
      }
    ];
    
}
