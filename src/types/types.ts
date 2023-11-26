export interface EventsListType {
  id: number;
  text: string;
  logo: string;
  link: string;
}

export interface ItemFooter {
  id: number;
  text: string;
  link?: string;
}

export interface ItemsFooter {
  id: number;
  title: string;
  items: ItemFooter[];
}

export interface ContactUsItem {
  id: number;
  icon: string;
  text: string;
}

export interface ContactUs {
  id: number;
  title: string;
  items: ContactUsItem[];
}

export interface RegisterApi {
  f_name: string;
  l_name: string;
  mobile: string;
  email: string;
  address: string;
  zip_code: string;
  country: string;
  city: string;
  file: File;
  team_name: string;
  acceptAGB?: boolean;
}

export type CountryType = { code: string; id: string; name: string };

export type UsersType = {
  address: string;
  city: string;
  country_code: string;
  country_name: string;
  create_at: string;
  email: string;
  f_name: string;
  flag_url: string;
  l_name: string;
  mobile: string;
  status: string;
  team_name: string;
  wintercup_request__id: string;
  zip_code: string;
};
