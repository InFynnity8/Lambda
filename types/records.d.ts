// types/StudentScores.ts

/**
 * Defines the subjects available in the structure.
 */
export type Subjects = "biology" | "chemistry" | "physics" | "mathematics";

/**
 * Defines the structure of a single student's scores.
 */
export interface SubjectScores {
  name: string; // The student's name
  biology: number; // Score for biology
  chemistry: number; // Score for chemistry
  physics: number; // Score for physics
  mathematics: number; // Score for mathematics
}

/**
 * Defines the structure for the full list of students and their scores.
 */
export type SubjectScores = SubjectScores[];



// types/RoundScores.ts

/**
 * Defines the structure of a single student's scores across rounds.
 */
export interface RoundScores {
    name: string; // The student's name
    roundone: number; // Score for round one
    roundtwo: number; // Score for round two
    roundthree: number; // Score for round three
    roundfour: number; // Score for round four
    roundfive: number; // Score for round five
  }
  
  /**
   * Defines the structure for the full list of students and their round scores.
   */
  export type RoundScores = RoundScores[];
  

  export interface StudentPerformance {
    name: string; // The student's name
    speed: number; // Speed score out of 100
    content: number; // Content score out of 100
  }
  
  /**
   * Defines the structure for the full list of students and their performance data.
   */
  export type StudentPerformanceData = StudentPerformance[];