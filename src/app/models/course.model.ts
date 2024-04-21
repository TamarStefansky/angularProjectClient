export class Course{
    nameCourse: string;
    kodeCategory: number;
    amountLessons: Number;
    startCourseDate: Date;
    syllabusArr: string[];
    wayLearning: string;
    kodeLecture:string;
    image: string ; 


    /**
     *
     */
    constructor( name: string, category: number, amountLessons: number,
        Date: Date, syllabusArr: string[], wayLearning: string, /*kodeLecture:string, */image: string  ) {
        this.nameCourse = name;
        this.kodeCategory = category;
        this.amountLessons = amountLessons;
        this.startCourseDate = Date;
        this.syllabusArr = syllabusArr;
        this.wayLearning = wayLearning;
        // this.kodeLecture=kodeLecture;
        this.image = image;
    }
}