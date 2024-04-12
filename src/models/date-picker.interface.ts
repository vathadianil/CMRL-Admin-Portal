import { Time } from '@angular/common';

export interface DateRange {
  start: Date;
  end?: Date;
}

export interface TimeRange {
  start: Time;
  end?: Time;
}

export interface TimeLimit {
  hours: {
    min?: number;
    max?: number;
  };
  minutes: {
    min?: number;
    max?: number;
  };
  seconds: {
    min?: number;
    max?: number;
  };
}

export interface DateLimit {
  start: {
    min: Date;
    max: Date;
  };
  end: {
    min: Date;
    max: Date;
  };
}

export interface DateString {
  dateString: string;
  dateMillis: any;
}

export interface DateRangeObject {
  start: {
    dateString: string;
    dateMillis: any;
  };
  end?: {
    dateString: string;
    dateMillis: any;
  };
}
