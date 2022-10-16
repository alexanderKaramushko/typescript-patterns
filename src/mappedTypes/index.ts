type Events = {
  ready: boolean;
  error: Error;
}

type EventsEmitter = {
  on<Event extends keyof Events>(
    event: Event,
    fn: (data: Events[Event]) => void
  ): void;
  emit<Event extends keyof Events>(
    event: Event,
    payload: Events[Event]
  ): void;
}

class EventsEmitterImpl implements EventsEmitter {
  on<Event extends keyof Events>(event: Event, fn: (data: Events[Event]) => void): void {
    
  }

  emit<Event extends keyof Events>(event: Event, payload: Events[Event]): void {
    
  }
}

const eventsEmitter = new EventsEmitterImpl();

// map ready event, so fn arg is typed as boolean
eventsEmitter.on('ready', (ready) => ready)

// map error event, so fn arg is typed as Error
eventsEmitter.on('error', (error) => error)