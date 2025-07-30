namespace TrainingApp.Core.Models;
public class Workout
{
    public int Id { get; set; }
    public DateTime Date { get; set; }
    public string? Notes { get; set; }

    public ICollection<WorkoutExercise> Exercises { get; set; }
    public ICollection<WorkoutAssignment> Assignments { get; set; }
}