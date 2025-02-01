import java.util.*;

// Interface defining grading operations
interface GradingOperations {
    void addStudent(String studentID, String name);
    void addGrade(String studentID, double grade);
    void viewGrades(String studentID);
    double calculateAverage(String studentID);
}

// Abstract class representing a Student
abstract class Student {
    protected String studentID;
    protected String name;
    protected List<Double> grades;

    public Student(String studentID, String name) {
        this.studentID = studentID;
        this.name = name;
        this.grades = new ArrayList<>();
    }
}

// Concrete class implementing grading operations
class GradingSystem extends Student implements GradingOperations {
    private static Map<String, Student> students = new HashMap<>();

    public GradingSystem(String studentID, String name) {
        super(studentID, name);
    }

    @Override
    public void addStudent(String studentID, String name) {
        students.put(studentID, new GradingSystem(studentID, name));
        System.out.println("Student added successfully.");
    }

    @Override
    public void addGrade(String studentID, double grade) {
        if (students.containsKey(studentID)) {
            students.get(studentID).grades.add(grade);
            System.out.println("Grade added successfully.");
        } else {
            System.out.println("Student not found.");
        }
    }

    @Override
    public void viewGrades(String studentID) {
        if (students.containsKey(studentID)) {
            System.out.println("Grades for " + students.get(studentID).name + ": " + students.get(studentID).grades);
        } else {
            System.out.println("Student not found.");
        }
    }

    @Override
    public double calculateAverage(String studentID) {
        if (students.containsKey(studentID)) {
            List<Double> grades = students.get(studentID).grades;
            if (grades.isEmpty()) return 0;
            double sum = 0;
            for (double grade : grades) {
                sum += grade;
            }
            return sum / grades.size();
        } else {
            System.out.println("Student not found.");
            return 0;
        }
    }
}

// Main class to provide menu-driven interface
public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        GradingSystem gradingSystem = new GradingSystem("", "");
        
        while (true) {
            System.out.println("\nStudent Grading System");
            System.out.println("1. Add Student");
            System.out.println("2. Add Grade");
            System.out.println("3. View Grades");
            System.out.println("4. Calculate Average");
            System.out.println("5. Exit");
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume newline

            switch (choice) {
                case 1:
                    System.out.print("Enter Student ID: ");
                    String id = scanner.nextLine();
                    System.out.print("Enter Student Name: ");
                    String name = scanner.nextLine();
                    gradingSystem.addStudent(id, name);
                    break;
                case 2:
                    System.out.print("Enter Student ID: ");
                    id = scanner.nextLine();
                    System.out.print("Enter Grade: ");
                    double grade = scanner.nextDouble();
                    gradingSystem.addGrade(id, grade);
                    break;
                case 3:
                    System.out.print("Enter Student ID: ");
                    id = scanner.nextLine();
                    gradingSystem.viewGrades(id);
                    break;
                case 4:
                    System.out.print("Enter Student ID: ");
                    id = scanner.nextLine();
                    double avg = gradingSystem.calculateAverage(id);
                    System.out.println("Average Grade: " + avg);
                    break;
                case 5:
                    System.out.println("Exiting...");
                    scanner.close();
                    return;
                default:
                    System.out.println("Invalid choice. Please try again.");
            }
        }
    }
}
