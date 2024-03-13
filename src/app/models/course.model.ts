export class Course{

    nameCourse: String;
    kodeKategory: String;
    amountLessons: Number;
    startCourseDate: Date;
    syllabusArr: String;
    wayLearning: String;
    kodeLecture:String;
    image: String; 


    constructor( nameCourse: string, kodeKategory: String, amountLessons: number,
        startCourseDate: Date, syllabusArr: string, wayLearning: String, kodeLecture:String, image: string  ) {
            
        this.nameCourse = nameCourse;
        this.kodeKategory = kodeKategory;
        this.amountLessons = amountLessons;
        this.startCourseDate = startCourseDate;
        this.syllabusArr = syllabusArr;
        this.wayLearning = wayLearning;
        this.kodeLecture=kodeLecture;
        this.image = image;
    }
}

