// D.	Student’s Bio
// i.	Personal ( Name, Photo, Class, Date of Birth, Gender, Nationality, Residence, Remarks)
// ii.	Parents/Guardian (Name, Contact, Profession)
// E.	Teacher’s Bio (Name, Photo, Contact, Subject, Gender, Residence, Nationality)


export interface StudentBio {
    name: string;
    year: 'First year' | 'Second year' | 'Final year';
    gender: 'Male' | 'Female';
    role: string;
    dateOfBirth?: Date;
    photo?: string;
    remarks?: string;
    residence?: string;
    performance?: number;
    contact?: string;
    parent?: {
        name: string;
        contact: string;
        profession: string;
    };
    nationality?: string;
}

export interface TeacherBio {
    name: string;
    subject: 'Biology' | 'Chemistry' | 'Physics' | 'Mathematics';
    gender: 'Male' | 'Female';
    role: string;
    dateOfBirth?: Date;
    photo?: string;
    residence?: string;
    nationality?: string;
    contact?: string;
}

