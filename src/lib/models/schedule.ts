export type Schedule = {
  day: string;
  opened: boolean;
  opensAt: Timing;
  closesAt: Timing;
};

export type Timing = `${number}${number}h${number}${number}`;
