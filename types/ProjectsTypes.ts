import { ImgDataInterface } from ".";

export interface ProjectDataInterface {
    [id: string]: ProjectInterface;
}
export interface ProjectInterface {
    projectSlug: string;
    title: string;
    subtitle: string;
    image: ImgDataInterface;
    year: string,
    location: string,
    details: {
        portraitImg?: ImgDataInterface;
        rectangleImg?: ImgDataInterface;
        secondRectangleImg?: ImgDataInterface;
        thirdRectangleImg?: ImgDataInterface;
        twoSmallImg?: ImgDataInterface[];
        secondTwoSmallImg?: ImgDataInterface[];
        thirdTwoSmallImg?: ImgDataInterface[];
        technicalInfo?: TechnicalInfoInterface;
        secondTechnicalInfo?: TechnicalInfoInterface;
    };
    categories: SelectedFilterInterface[];
    urlSlug: SelectedFilterInterface
}

export type SelectedFilterInterface =
    "all"
    | "kitchen"
    | "bathroom"
    | "closet"
    | "local"
    | "others"
    | "products";

export interface TechnicalInfoInterface {
    image: ImgDataInterface,
    title: string,
    description: string[],
    footer?: {
        materials: string[],
        propousal: string[],
        year: string[],
        location?: string[]
    },
    homeFooterData?: {
        proyects?: { title: string, url: string },
        contact?: { title: string, url: string }
    }
};