export interface FormValues {
    name: string;
    description: string;
    city: string;
    address: string;
    start_date: string;
    end_date: string;
  }
  
  export interface FormProps {
    initialName?: string;
    initialDescription?: string;
    initialCity?: string;
    initialAddress?: string;
    initialStartDate?: string;
    initialEndDate?: string;
  }
  