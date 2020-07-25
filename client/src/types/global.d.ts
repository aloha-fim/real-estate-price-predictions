interface Listing {
  MLSNUM: number;
  STATUS: string;
  LISTPRICE: number;
  SOLDPRICE?: number | null;
  LISTDATE: string;
  SOLDDATE?: string | null;
  EXPIREDDATE?: string | null;
  DOM: number;
  DTO?: number | null;
  ADDRESS: string;
  CITY: string;
  STATE: string;
  ZIP: number;
  AREA?: string | null;
  BEDS: number;
  BATHS: number;
  SQFT: number;
  AGE: number;
  LOTSIZE?: number | null;
  AGENTNAME?: string | null;
  OFFICENAME?: string | null;
  OFFICEPHONE?: string | null;
  SHOWINGINSTRUCTIONS?: string | null;
  REMARKS?: string | null;
  STYLE?: string | null;
  LEVEL?: string | null;
  GARAGE: number;
  HEATING?: string | null;
  COOLING?: string | null;
  ELEMENTARYSCHOOL?: string | null;
  JUNIORHIGHSCHOOL?: string | null;
  HIGHSCHOOL?: string | null;
  OTHERFEATURES?: string | null;
  PROPTYPE: string;
  STREETNAME: string;
  HOUSENUM1: string;
  HOUSENUM2?: string | null;
  PHOTOURL: string;
  zoMLSNUM?: string | null;
  lat?: number | null;
  lng?: number | null;
  flipScore?: number | null;
}
