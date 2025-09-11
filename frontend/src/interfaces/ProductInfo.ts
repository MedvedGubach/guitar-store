export interface ProductInfo {
    name: string;
    brand: string;
    fantasyColor?: string;
    color?: string;
    type: Type;
    category: Category;
    id: number | string;
    price: number;
    inStock: boolean;
    isTopSeller: boolean;
    orientation?: Orientation;
    neckWood?: NeckWood;
    fretNumber?: number;
    strings?: number;
    pickups?: Pickups;
    rating: number;
    isOnSale: boolean;
    images: string[];
    desc: string;
    countryOrigin?: CountryOrigin;
    power?: string;
    speakers?: string;
    speakerType?: string;
    reverb?: boolean;
    usb?: boolean;
    effect?: string;
    dimensions?: string;
    weight?: string;
    releaseYear?: number;
    features?: string[];
}

export enum Category {
    Amp = "amp",
    Guitar = "guitar",
    Pedal = "pedal",
}

export enum CountryOrigin {
    China = "China",
    Indonesia = "Indonesia",
    Japan = "Japan",
    Mexico = "Mexico",
    SouthKorea = "South Korea",
    Usa = "USA",
}

export enum NeckWood {
    Mahogany = "Mahogany",
    Maple = "Maple",
    RoastedMaple = "Roasted Maple",
}

export enum Orientation {
    Left = "Left",
    Right = "Right",
}

export interface Pickups {
    config: Config;
    neck: string;
    middle: string;
    bridge: string;
}

export enum Config {
    Hh = "HH",
    Hs = "HS",
    Hss = "HSS",
    Ss = "SS",
    Sss = "SSS",
}

export enum Type {
    AcousticGuitar = "Acoustic Guitar",
    ClassicalGuitar = "Classical Guitar",
    EffectsPedal = "Effects Pedal",
    ElectricGuitar = "Electric Guitar",
    SolidStateAmp = "Solid State Amp",
    TubeAmp = "Tube Amp",
}
